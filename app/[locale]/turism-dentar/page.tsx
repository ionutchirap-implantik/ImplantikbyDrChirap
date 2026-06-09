import { notFound } from "next/navigation";
import { ScaffoldPage } from "@/components/shared/scaffold-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createScaffoldMetadata } from "@/lib/create-scaffold-metadata";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  return createScaffoldMetadata(
    localeParam as Locale,
    "turism-dentar",
    "Turism dentar",
    "Dental tourism",
    "Plan de tratament personalizat și logistică pentru pacienți naționali și internaționali.",
    "Personalized treatment plan and logistics for national and international patients."
  );
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const title = locale === "ro" ? "Turism dentar" : "Dental tourism";
  const desc =
    locale === "ro"
      ? "Plan de tratament personalizat și logistică pentru pacienți naționali și internaționali."
      : "Personalized treatment plan and logistics for national and international patients.";
  return <ScaffoldPage title={title} description={desc} dict={dict} locale={locale} />;
}
