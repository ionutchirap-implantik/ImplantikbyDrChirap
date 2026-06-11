"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { FORM_SERVICES } from "@/lib/constants";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { safeParseAttribution, sanitizeText } from "@/lib/security/sanitize";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { POLICY_VERSION } from "@/lib/consent/policy-version";
import { sendLeadNotificationEmail } from "@/lib/email/send-lead-email";

const leadSchema = z.object({
  lastName: z.string().min(2).max(80),
  firstName: z.string().min(2).max(80),
  phone: z.string().min(6).max(20),
  service: z.enum(FORM_SERVICES),
  message: z.string().max(2000).optional(),
  consent: z.literal(true),
  policy_version: z.string().min(1).max(32),
  locale: z.enum(["ro", "en"]),
  attribution: z.record(z.string().max(256)).optional(),
  turnstileToken: z.string().optional(),
});

export type LeadFormState = {
  success: boolean;
  message: string;
  eventId?: string;
  errors?: Record<string, string[]>;
};

function generateServerEventId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const hdrs = await headers();
  const ip = getClientIp(hdrs);
  const rate = checkRateLimit(`lead:${ip}`);

  if (!rate.allowed) {
    return {
      success: false,
      message: "rate_limited",
    };
  }

  const turnstileToken = sanitizeText(formData.get("cf-turnstile-response"), 2048);
  const turnstileOk = await verifyTurnstileToken(turnstileToken);
  if (!turnstileOk && process.env.TURNSTILE_SECRET_KEY) {
    return { success: false, message: "captcha_failed" };
  }

  const raw = {
    lastName: sanitizeText(formData.get("lastName"), 80),
    firstName: sanitizeText(formData.get("firstName"), 80),
    phone: sanitizeText(formData.get("phone"), 20),
    service: sanitizeText(formData.get("service"), 50),
    message: sanitizeText(formData.get("message"), 2000),
    consent: formData.get("consent") === "on",
    policy_version: sanitizeText(formData.get("policy_version"), 32) || POLICY_VERSION,
    locale: sanitizeText(formData.get("locale"), 2),
    attribution: safeParseAttribution(formData.get("attribution")),
    turnstileToken,
  };

  const parsed = leadSchema.safeParse({
    ...raw,
    consent: raw.consent ? true : false,
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "validation_error",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const eventId = generateServerEventId();
  const lead = {
    last_name: parsed.data.lastName,
    first_name: parsed.data.firstName,
    phone: parsed.data.phone,
    service: parsed.data.service,
    message: parsed.data.message || null,
    locale: parsed.data.locale,
    attribution: parsed.data.attribution ?? {},
    event_id: eventId,
    fbclid: parsed.data.attribution?.fbclid ?? null,
    ttclid: parsed.data.attribution?.ttclid ?? null,
    created_at: new Date().toISOString(),
    consent_form: true,
    consent_form_at: new Date().toISOString(),
    policy_version: parsed.data.policy_version,
  };

  // TODO: Connect Supabase — insert into `leads` with service role (server-only)

  await sendLeadNotificationEmail({
    lastName: lead.last_name,
    firstName: lead.first_name,
    phone: lead.phone,
    service: lead.service,
    message: lead.message,
    locale: lead.locale,
    eventId,
  });

  if (process.env.NODE_ENV === "development") {
    console.log("[LEAD]", { event_id: eventId, service: lead.service, locale: lead.locale });
  }

  return { success: true, message: "success", eventId };
}
