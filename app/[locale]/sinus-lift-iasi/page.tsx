import { notFound } from "next/navigation";
import { ScaffoldPage } from "@/components/shared/scaffold-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createScaffoldMetadata } from "@/lib/create-scaffold-metadata";
import { getSiteUrl } from "@/lib/site-url";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const base = createScaffoldMetadata(locale, "sinus-lift-iasi", "Sinus Lift Iași", "Sinus Lift Iași");
  return {
    ...base,
    robots: { index: false, follow: true },
    alternates: {
      ...base.alternates,
      canonical: `${getSiteUrl()}/${locale}/chirurgie-orala`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  return <ScaffoldPage title="Sinus Lift Iași" dict={dict} locale={locale} />;
}
