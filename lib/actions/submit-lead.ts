"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { safeParseAttribution, sanitizeText } from "@/lib/security/sanitize";
import { verifyTurnstileToken } from "@/lib/security/turnstile";

const leadSchema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(6).max(20),
  email: z.string().email().max(254).optional().or(z.literal("")),
  service: z.enum([
    "implantologie",
    "stomatologie",
    "estetica",
    "ortodontie",
    "chirurgie",
    "other",
  ]),
  message: z.string().max(2000).optional(),
  intent: z.enum(["consultation", "call", "whatsapp"]),
  consent: z.literal(true),
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
    name: sanitizeText(formData.get("name"), 120),
    phone: sanitizeText(formData.get("phone"), 20),
    email: sanitizeText(formData.get("email"), 254),
    service: sanitizeText(formData.get("service"), 50),
    message: sanitizeText(formData.get("message"), 2000),
    intent: sanitizeText(formData.get("intent"), 20),
    consent: formData.get("consent") === "on",
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
    name: parsed.data.name,
    phone: parsed.data.phone,
    email: parsed.data.email || null,
    service: parsed.data.service,
    message: parsed.data.message || null,
    intent: parsed.data.intent,
    locale: parsed.data.locale,
    attribution: parsed.data.attribution ?? {},
    event_id: eventId,
    fbclid: parsed.data.attribution?.fbclid ?? null,
    ttclid: parsed.data.attribution?.ttclid ?? null,
    created_at: new Date().toISOString(),
  };

  // TODO: Connect Supabase — insert into `leads` with service role (server-only)
  // const supabase = createServiceClient();
  // await supabase.from('leads').insert(lead);
  // Store event_id in conversion_events for Meta CAPI / TikTok Events API deduplication via GTM server-side

  if (process.env.NODE_ENV === "development") {
    console.log("[LEAD]", { event_id: eventId, service: lead.service, locale: lead.locale });
  }

  return { success: true, message: "success", eventId };
}
