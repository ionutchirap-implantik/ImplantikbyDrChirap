import { notFound } from "next/navigation";
import { ScaffoldPage } from "@/components/shared/scaffold-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createScaffoldMetadata } from "@/lib/create-scaffold-metadata";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  return createScaffoldMetadata(localeParam as Locale, "implant-all-on-4-iasi", "Implant All-on-4 Iași", "All-on-4 Implants Iași");
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const title = locale === "ro" ? "Implant All-on-4 Iași" : "All-on-4 Implants Iași";
  return <ScaffoldPage title={title} dict={dict} locale={locale} />;
}
