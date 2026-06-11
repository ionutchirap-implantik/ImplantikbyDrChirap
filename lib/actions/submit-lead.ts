"use server";

import { after } from "next/server";
import { headers } from "next/headers";
import { z } from "zod";
import { FORM_SERVICES } from "@/lib/constants";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { safeParseAttribution, sanitizeText } from "@/lib/security/sanitize";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { POLICY_VERSION } from "@/lib/consent/policy-version";
import { sendLeadEmails } from "@/lib/email/send-lead-email";
import { insertLead } from "@/lib/supabase/insert-lead";

const CONTACT_PREFERENCES = ["consultation", "call", "whatsapp"] as const;

const leadSchema = z.object({
  lastName: z.string().min(2).max(80),
  firstName: z.string().min(2).max(80),
  phone: z.string().min(6).max(20),
  email: z.preprocess(
    (val) => {
      if (typeof val !== "string" || !val.trim()) return null;
      return val.trim();
    },
    z.union([z.string().email().max(120), z.null()])
  ),
  service: z.enum(FORM_SERVICES),
  message: z.string().max(2000).optional(),
  contactPreference: z.preprocess(
    (val) => {
      if (typeof val !== "string" || !val.trim()) return null;
      return val.trim();
    },
    z.union([z.enum(CONTACT_PREFERENCES), z.null()])
  ),
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
    email: sanitizeText(formData.get("email"), 120),
    service: sanitizeText(formData.get("service"), 50),
    message: sanitizeText(formData.get("message"), 2000),
    contactPreference: sanitizeText(formData.get("contact_preference"), 20),
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
  const submittedAt = new Date().toISOString();
  const attribution = parsed.data.attribution ?? {};

  const lead = {
    last_name: parsed.data.lastName,
    first_name: parsed.data.firstName,
    phone: parsed.data.phone,
    email: parsed.data.email,
    service: parsed.data.service,
    message: parsed.data.message || null,
    contact_preference: parsed.data.contactPreference,
    locale: parsed.data.locale,
    attribution,
    event_id: eventId,
    fbclid: attribution.fbclid ?? null,
    ttclid: attribution.ttclid ?? null,
    gclid: attribution.gclid ?? null,
    consent_form: true,
    consent_form_at: submittedAt,
    policy_version: parsed.data.policy_version,
  };

  const insertResult = await insertLead(lead);
  if (!insertResult.ok) {
    return { success: false, message: "server_error" };
  }

  const leadId = insertResult.id;

  after(async () => {
    try {
      await sendLeadEmails(
        leadId,
        {
          lastName: lead.last_name,
          firstName: lead.first_name,
          phone: lead.phone,
          email: lead.email,
          service: lead.service,
          message: lead.message,
          contactPreference: lead.contact_preference,
          submittedAt,
        },
        lead.email,
        lead.first_name
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "unknown_error";
      console.error("[EMAIL]", leadId, message);
    }
  });

  if (process.env.NODE_ENV === "development") {
    console.log("[LEAD]", { id: leadId, service: lead.service, locale: lead.locale });
  }

  return { success: true, message: "success", eventId };
}
