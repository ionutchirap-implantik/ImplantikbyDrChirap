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
    "estetica-faciala",
    "Estetică facială",
    "Facial aesthetics",
    "Servicii de estetică facială — informații pentru pacient, nu promovare de produse.",
    "Facial aesthetic services — patient information, not product promotion."
  );
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const title = locale === "ro" ? "Estetică facială" : "Facial aesthetics";
  const desc =
    locale === "ro"
      ? "Acid hialuronic și toxina botulinică ca servicii medicale — informații clare pentru pacient."
      : "Hyaluronic acid and botulinum toxin as medical services — clear patient information.";
  return <ScaffoldPage title={title} description={desc} dict={dict} locale={locale} />;
}
