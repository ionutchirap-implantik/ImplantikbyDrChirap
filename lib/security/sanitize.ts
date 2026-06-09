export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export function safeParseAttribution(raw: unknown): Record<string, string> {
  if (typeof raw !== "string" || !raw) return {};
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const allowed = [
      "gclid",
      "gbraid",
      "wbraid",
      "fbclid",
      "ttclid",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    const result: Record<string, string> = {};
    for (const key of allowed) {
      const val = (parsed as Record<string, unknown>)[key];
      if (typeof val === "string" && val.length <= 256) {
        result[key] = val;
      }
    }
    return result;
  } catch {
    return {};
  }
}
