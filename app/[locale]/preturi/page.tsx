import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PricingPage } from "@/components/pricing/pricing-page";
import { breadcrumbJsonLd, JsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import { getPricingContent } from "@/lib/i18n/pricing";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const content = getPricingContent(locale);

  return buildMetadata({
    title: content.meta.title,
    description: content.meta.description,
    path: "/preturi",
    locale,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const content = getPricingContent(locale);
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/${locale}/preturi`;

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
