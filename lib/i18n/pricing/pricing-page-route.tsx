import { notFound } from "next/navigation";
import { PricingPage } from "@/components/pricing/pricing-page";
import { breadcrumbJsonLd, JsonLd } from "@/lib/json-ld";
import { getSiteUrl } from "@/lib/site-url";
import type { Locale } from "@/lib/i18n/config";
import { getPricingContent, getPricingPageUrl } from "./index";
import { pricingPath } from "./paths";

export function PricingPageRoute({ locale }: { locale: Locale }) {
  const content = getPricingContent(locale);
  const siteUrl = getSiteUrl();
  const pageUrl = getPricingPageUrl(siteUrl, locale);

  return (
    <>
      <PricingPage content={content} locale={locale} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: locale === "ro" ? "Acasă" : "Home", url: `${siteUrl}/${locale}` },
          { name: content.h1, url: pageUrl },
        ])}
      />
    </>
  );
}

export function assertPricingLocale(locale: Locale, expectedPath: "/preturi" | "/prices") {
  if (pricingPath(locale) !== expectedPath) {
    notFound();
  }
}
