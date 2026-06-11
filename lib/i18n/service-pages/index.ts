import type { Locale } from "@/lib/i18n/config";
import { servicePagesEn } from "./content/en";
import { servicePagesRo } from "./content/ro";
import type { ServicePageContent, ServicePageSlug } from "./types";

export type { ServicePageContent, ServicePageSlug } from "./types";

export function getServicePageContent(
  locale: Locale,
  slug: ServicePageSlug
): ServicePageContent {
  const pages = locale === "ro" ? servicePagesRo : servicePagesEn;
  return pages[slug];
}
