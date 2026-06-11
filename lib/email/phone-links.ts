export function phoneToTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("40") && digits.length >= 11) return `tel:+${digits}`;
  if (digits.startsWith("0")) return `tel:+4${digits}`;
  if (digits.length >= 9) return `tel:+40${digits}`;
  return `tel:${phone}`;
}

export function phoneToWhatsAppHref(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 9) return null;
  const normalized = digits.startsWith("40")
    ? digits
    : `40${digits.replace(/^0/, "")}`;
  if (normalized.length < 11) return null;
  return `https://wa.me/${normalized}`;
}
