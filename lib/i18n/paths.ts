import type { Locale } from "./config";
import { resolveLocalizedPath } from "./pricing/paths";

export function localePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${resolveLocalizedPath(normalized, locale)}`;
}

export function switchLocalePath(currentLocale: Locale, targetLocale: Locale, pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === currentLocale) {
    segments[0] = targetLocale;
    if (segments[1] === "preturi" || segments[1] === "prices") {
      segments[1] = targetLocale === "en" ? "prices" : "preturi";
    }
  } else {
    segments.unshift(targetLocale);
  }
  return `/${segments.join("/")}`;
}
