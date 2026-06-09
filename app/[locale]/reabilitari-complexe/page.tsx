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
    "reabilitari-complexe",
    "Reabilitări complexe",
    "Complex rehabilitations",
    "Chirurgie orală și maxilo-facială pentru cazuri complexe.",
    "Oral and maxillofacial surgery for complex cases."
  );
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const title = locale === "ro" ? "Reabilitări complexe" : "Complex rehabilitations";
  const desc =
    locale === "ro"
      ? "Chirurgie orală și maxilo-facială pentru cazuri complexe."
      : "Oral and maxillofacial surgery for complex cases.";
  return <ScaffoldPage title={title} description={desc} dict={dict} locale={locale} />;
}
