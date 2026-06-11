import type { FormService } from "@/lib/constants";

const SERVICE_LABELS_RO: Record<FormService, string> = {
  stomatologie: "Stomatologie",
  implantologie: "Implantologie",
  chirurgie: "Chirurgie",
  ortodontie: "Ortodonție",
  estetica_dentara: "Estetică dentară",
  estetica_faciala: "Estetică facială",
};

const CONTACT_PREFERENCE_LABELS_RO: Record<string, string> = {
  consultation: "Consultație",
  call: "Sună-mă",
  whatsapp: "WhatsApp",
};

export function serviceLabel(service: string): string {
  return SERVICE_LABELS_RO[service as FormService] ?? service;
}

export function contactPreferenceLabel(preference: string | null): string {
  if (!preference) return "—";
  return CONTACT_PREFERENCE_LABELS_RO[preference] ?? preference;
}

export function formatLeadDateTime(iso: string): string {
  return new Intl.DateTimeFormat("ro-RO", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Bucharest",
  }).format(new Date(iso));
}
