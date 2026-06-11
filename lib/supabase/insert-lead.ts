import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase/admin";

export type LeadRecord = {
  last_name: string;
  first_name: string;
  phone: string;
  email: string | null;
  service: string;
  message: string | null;
  contact_preference: string | null;
  locale: string;
  attribution: Record<string, string>;
  fbclid: string | null;
  ttclid: string | null;
  gclid: string | null;
  event_id: string;
  consent_form: boolean;
  consent_form_at: string;
  policy_version: string;
};

export type InsertLeadResult =
  | { ok: true; id: string; persisted: boolean }
  | { ok: false; error: string };

export async function insertLead(lead: LeadRecord): Promise<InsertLeadResult> {
  if (!isSupabaseConfigured()) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[SUPABASE] not configured — lead not persisted to database");
    }
    return { ok: true, id: lead.event_id, persisted: false };
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { ok: false, error: "supabase_client_unavailable" };
  }

  const { data, error } = await supabase
    .from("leads")
    .insert({
      last_name: lead.last_name,
      first_name: lead.first_name,
      phone: lead.phone,
      email: lead.email,
      service: lead.service,
      message: lead.message,
      contact_preference: lead.contact_preference,
      locale: lead.locale,
      attribution: lead.attribution,
      fbclid: lead.fbclid,
      ttclid: lead.ttclid,
      gclid: lead.gclid,
      event_id: lead.event_id,
      consent_form: lead.consent_form,
      consent_form_at: lead.consent_form_at,
      policy_version: lead.policy_version,
    })
    .select("id")
    .single();

  if (error || !data?.id) {
    console.error("[SUPABASE] insert failed", lead.event_id, error?.message ?? "unknown");
    return { ok: false, error: error?.message ?? "insert_failed" };
  }

  return { ok: true, id: data.id as string, persisted: true };
}
