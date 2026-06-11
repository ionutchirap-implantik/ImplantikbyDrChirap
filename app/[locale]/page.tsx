import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { StatsBand } from "@/components/home/stats-band";
import { AboutDoctor } from "@/components/home/about-doctor";
import { ServicesGrid } from "@/components/home/services-grid";
import { HowWeWork } from "@/components/home/how-we-work";
import { GenZTeaser } from "@/components/home/gen-z-teaser";
import { CasesSection } from "@/components/home/cases-section";
import { Testimonials } from "@/components/home/testimonials";
import { FaqVisibleSection } from "@/components/shared/faq-visible-section";
import { HomeCtaSection } from "@/components/home/home-cta-section";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n/config";
import { isValidLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { GOOGLE_REVIEWS } from "@/lib/google-reviews";
import { SITE } from "@/lib/constants";
import { physicianJsonLd, reviewsJsonLd, JsonLd } from "@/lib/json-ld";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    path: "/",
    locale,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  const faqItems = [
    { question: dict.faq.q1, answer: dict.faq.a1 },
    { question: dict.faq.q2, answer: dict.faq.a2 },
    { question: dict.faq.q3, answer: dict.faq.a3 },
    { question: dict.faq.q4, answer: dict.faq.a4 },
    { question: dict.faq.q5, answer: dict.faq.a5 },
    { question: dict.faq.q6, answer: dict.faq.a6 },
  ];

  return (
    <>
      <JsonLd
        data={[
          physicianJsonLd(locale),
          ...reviewsJsonLd(GOOGLE_REVIEWS, {
            name: SITE.name,
            url: `${SITE.url}/${locale}`,
          }),
        ]}
      />
      <Hero dict={dict} locale={locale} />
      <StatsBand dict={dict} />
      <AboutDoctor dict={dict} locale={locale} />
      <ServicesGrid dict={dict} locale={locale} />
      <HowWeWork dict={dict} />
      <GenZTeaser dict={dict} locale={locale} />
      <CasesSection dict={dict} />
      <Testimonials dict={dict} locale={locale} />
      <FaqVisibleSection title={dict.home.faqTitle} items={faqItems} />
      <HomeCtaSection dict={dict} locale={locale} />
    </>
  );
}
