import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Clock, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
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

  return (
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

          <div className="space-y-8">
            <ImagePlaceholder aspect="video" label="[HARTĂ / POZĂ CLINICĂ — DE ADĂUGAT]" />

            <div className="space-y-4 rounded-2xl border bg-secondary/20 p-6">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">{t.mapTitle}</p>
                  <p className="text-sm text-muted-foreground">{SITE.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">{t.hoursTitle}</p>
                  <p className="text-sm text-muted-foreground">{SITE.hours}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href={SITE.phoneHref} className="text-sm text-primary hover:underline">
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
