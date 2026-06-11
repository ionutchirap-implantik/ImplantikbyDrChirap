import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocumentView } from "@/components/legal/legal-document-view";
import { getLegalDocument } from "@/lib/legal";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const document = getLegalDocument(locale, "privacy");
  return buildMetadata({
    title: document.title,
    description: document.description,
    path: "/confidentialitate",
    locale,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const document = getLegalDocument(locale, "privacy");

  return (
    <section className="section-padding">
      <LegalDocumentView document={document} />
    </section>
  );
}
