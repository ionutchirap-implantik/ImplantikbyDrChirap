const ATTRIBUTION_COOKIE = "implantik_attribution";
const ATTRIBUTION_PARAMS = [
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
] as const;

export type AttributionData = Partial<
  Record<(typeof ATTRIBUTION_PARAMS)[number], string>
>;

export function captureAttributionFromUrl(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const captured: AttributionData = {};

  for (const key of ATTRIBUTION_PARAMS) {
    const value = params.get(key);
    if (value) captured[key] = value;
  }

  if (Object.keys(captured).length === 0) return;

  const existing = getAttributionCookie();
  const merged = { ...existing, ...captured };
  document.cookie = `${ATTRIBUTION_COOKIE}=${encodeURIComponent(JSON.stringify(merged))};path=/;max-age=${60 * 60 * 24 * 90};SameSite=Lax`;
}

function getAttributionCookie(): AttributionData {
  if (typeof document === "undefined") return {};
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${ATTRIBUTION_COOKIE}=`));
  if (!match) return {};
  try {
    return JSON.parse(decodeURIComponent(match.split("=")[1])) as AttributionData;
  } catch {
    return {};
  }
}

export function getAttributionForLead(): AttributionData {
  return getAttributionCookie();
}
