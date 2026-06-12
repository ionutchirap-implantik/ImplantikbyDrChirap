import type { Locale } from "@/lib/i18n/config";
import { pricingEn } from "./data-en";
import { pricingRo } from "./data-ro";
import { pricingPath } from "./paths";
import type { PricingContent } from "./types";

export type { PricingContent, PricingCategory, PricingItem } from "./types";
export { pricingPath, resolveLocalizedPath } from "./paths";

export function getPricingContent(locale: Locale): PricingContent {
  return locale === "ro" ? pricingRo : pricingEn;
}

export function getPricingPageUrl(siteUrl: string, locale: Locale): string {
  return `${siteUrl}/${locale}${pricingPath(locale)}`;
}
