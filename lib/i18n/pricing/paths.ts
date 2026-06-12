import type { Locale } from "@/lib/i18n/config";

/** RO: /preturi · EN: /prices */
export function pricingPath(locale: Locale): string {
  return locale === "en" ? "/prices" : "/preturi";
}

export function resolveLocalizedPath(path: string, locale: Locale): string {
  if (path === "/preturi" || path === "/prices") {
    return pricingPath(locale);
  }
  return path.startsWith("/") ? path : `/${path}`;
}
