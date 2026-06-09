import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
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
    title: `${dict.nav.book} — Iași`,
    description: dict.contact.subtitle,
    path: "/programare",
    locale,
  });
}

export default async function ProgramarePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <section className="section-padding">
      <div className="container-narrow max-w-2xl">
        <SectionHeading title={dict.nav.book} subtitle={dict.contact.subtitle} />
        <div className="mt-10">
          <ContactForm dict={dict} locale={locale} />
        </div>
      </div>
    </section>
  );
}
