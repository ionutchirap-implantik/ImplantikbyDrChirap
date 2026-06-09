"use server";

import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2, "Numele este obligatoriu"),
  phone: z.string().min(6, "Telefonul este obligatoriu"),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1),
  message: z.string().optional(),
  intent: z.enum(["consultation", "call", "whatsapp"]),
  consent: z.literal(true),
  locale: z.enum(["ro", "en"]),
  attribution: z.record(z.string()).optional(),
});

export type LeadFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email") || "",
    service: formData.get("service"),
    message: formData.get("message") || "",
    intent: formData.get("intent"),
    consent: formData.get("consent") === "on" ? true : false,
    locale: formData.get("locale"),
    attribution: formData.get("attribution")
      ? JSON.parse(String(formData.get("attribution")))
      : {},
  };

  const parsed = leadSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "validation_error",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const lead = {
    ...parsed.data,
    created_at: new Date().toISOString(),
  };

  // TODO: Connect Supabase — insert into `leads` table
  // Requires env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
  // Example:
  // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  // await supabase.from('leads').insert(lead);

  console.log("[LEAD — TODO Supabase]", JSON.stringify(lead, null, 2));

  return { success: true, message: "success" };
}
