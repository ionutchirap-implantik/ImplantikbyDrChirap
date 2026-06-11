import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicePageView } from "@/components/service/service-page-view";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getServicePageContent } from "@/lib/i18n/service-pages";
import type { ServicePageSlug } from "@/lib/i18n/service-pages/types";

type PageProps = { params: Promise<{ locale: string }> };

export function createServicePageHandlers(slug: ServicePageSlug) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: localeParam } = await params;
    if (!isValidLocale(localeParam)) return {};
    const locale = localeParam as Locale;
    const content = getServicePageContent(locale, slug);
    return buildMetadata({
      title: content.meta.title,
      description: content.meta.description,
      path: content.path,
      locale,
    });
  }

  async function Page({ params }: PageProps) {
    const { locale: localeParam } = await params;
    if (!isValidLocale(localeParam)) notFound();
    const locale = localeParam as Locale;
    const dict = await getDictionary(locale);
    const content = getServicePageContent(locale, slug);
    return <ServicePageView content={content} dict={dict} locale={locale} />;
  }

  return { generateMetadata, Page };
}
