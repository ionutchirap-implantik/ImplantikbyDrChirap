import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n/config";
import { getPricingContent } from "./index";
import { pricingPath } from "./paths";

export function buildPricingMetadata(locale: Locale): Metadata {
  const content = getPricingContent(locale);
  const siteUrl = getSiteUrl();
  const path = pricingPath(locale);

  const base = buildMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path,
    locale,
  });

  return {
    ...base,
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: {
        ro: `${siteUrl}/ro/preturi`,
        en: `${siteUrl}/en/prices`,
      },
    },
  };
}
