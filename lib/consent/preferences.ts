import { POLICY_VERSION } from "@/lib/consent/policy-version";

export const CONSENT_COOKIE_NAME = "consent-preferences";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 12 luni

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentPreferences = {
  decided: boolean;
  categories: ConsentCategories;
  timestamp: string;
  policyVersion: string;
};

export const defaultPreferences: ConsentPreferences = {
  decided: false,
  categories: { necessary: true, analytics: false, marketing: false },
  timestamp: "",
  policyVersion: POLICY_VERSION,
};

function isSecureContext(): boolean {
  return typeof window !== "undefined" && window.location.protocol === "https:";
}

export function readConsentCookie(): ConsentPreferences | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`));
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match.split("=").slice(1).join("="))) as ConsentPreferences;
    if (!parsed.categories) return null;
    return {
      ...parsed,
      categories: { necessary: true, analytics: !!parsed.categories.analytics, marketing: !!parsed.categories.marketing },
    };
  } catch {
    return null;
  }
}

export function writeConsentCookie(preferences: ConsentPreferences): void {
  if (typeof document === "undefined") return;
  const secure = isSecureContext() ? ";Secure" : "";
  const value = encodeURIComponent(JSON.stringify(preferences));
  document.cookie = `${CONSENT_COOKIE_NAME}=${value};path=/;max-age=${CONSENT_MAX_AGE_SECONDS};SameSite=Lax${secure}`;
}

export function clearCookie(name: string): void {
  if (typeof document === "undefined") return;
  const secure = isSecureContext() ? ";Secure" : "";
  document.cookie = `${name}=;path=/;max-age=0;SameSite=Lax${secure}`;
}

export function buildConsentPreferences(
  categories: Omit<ConsentCategories, "necessary">,
  decided = true
): ConsentPreferences {
  return {
    decided,
    categories: { necessary: true, ...categories },
    timestamp: new Date().toISOString(),
    policyVersion: POLICY_VERSION,
  };
}
