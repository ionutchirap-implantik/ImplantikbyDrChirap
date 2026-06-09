import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  return buildMetadata({
    title: dict.legal.privacyTitle,
    description: dict.legal.placeholder,
    path: "/confidentialitate",
    locale,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="section-padding">
      <div className="container-narrow prose prose-neutral max-w-3xl">
        <h1>{dict.legal.privacyTitle}</h1>
        <p className="text-muted-foreground">{dict.legal.placeholder}</p>
        <p className="text-sm text-muted-foreground">
          GDPR Art. 9 — date de sănătate prelucrate cu consimțământ explicit și minim necesar.
        </p>
      </div>
    </section>
  );
}
