import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/contact-form";
import { LocationSection } from "@/components/location/location-section";
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
    title: `${dict.contact.title} — Iași`,
    description: dict.contact.subtitle,
    path: "/contact",
    locale,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.contact;
  const page = `/${locale}/contact`;

  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading title={t.title} subtitle={t.subtitle} />

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold">{t.formTitle}</h2>
              <div className="mt-6">
                <ContactForm dict={dict} locale={locale} />
              </div>
            </div>

            <LocationSection dict={dict} page={page} variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
