import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPricingMetadata } from "@/lib/i18n/pricing/metadata";
import { PricingPageRoute, assertPricingLocale } from "@/lib/i18n/pricing/pricing-page-route";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  return buildPricingMetadata(localeParam as Locale);
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  assertPricingLocale(locale, "/prices");
  return <PricingPageRoute locale={locale} />;
}
