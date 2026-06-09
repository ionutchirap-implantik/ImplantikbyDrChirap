import { notFound } from "next/navigation";
import { FaqSection } from "@/components/shared/faq-section";
import { ScaffoldPage } from "@/components/shared/scaffold-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

const guides: Record<string, { titleRo: string; titleEn: string }> = {
  "implant-dentar-ghid": { titleRo: "Ghid implant dentar", titleEn: "Dental implant guide" },
  "prima-vizita": { titleRo: "Prima vizită la dentist", titleEn: "Your first dental visit" },
  "ingrijire-post-operator": { titleRo: "Îngrijire post-operatorie", titleEn: "Post-operative care" },
};

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam) || !guides[slug]) return {};
  const locale = localeParam as Locale;
  const guide = guides[slug];
  const title = locale === "ro" ? guide.titleRo : guide.titleEn;

  return buildMetadata({
    title: `${title} — Iași`,
    description: locale === "ro" ? "Ghid informativ pentru pacienți." : "Informative guide for patients.",
    path: `/ghiduri/${slug}`,
    locale,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam) || !guides[slug]) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const guide = guides[slug];
  const title = locale === "ro" ? guide.titleRo : guide.titleEn;

  const faqItems =
    locale === "ro"
      ? [
          { question: "Informațiile din ghid înlocuiesc consultația?", answer: "Nu. Ghidul oferă informații generale. Planul de tratament se stabilește la consultație." },
          { question: "Cum programez o evaluare?", answer: "Prin formular, telefon sau WhatsApp." },
        ]
      : [
          { question: "Does this guide replace a consultation?", answer: "No. The guide provides general information. Your treatment plan is set at consultation." },
          { question: "How do I book an evaluation?", answer: "Via form, phone, or WhatsApp." },
        ];

  return (
    <>
      <ScaffoldPage title={title} dict={dict} locale={locale} />
      <FaqSection title={locale === "ro" ? "Întrebări frecvente" : "FAQ"} items={faqItems} />
    </>
  );
}
