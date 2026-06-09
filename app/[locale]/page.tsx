import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServicesGrid } from "@/components/home/services-grid";
import { FeatureSections } from "@/components/home/feature-sections";
import { Testimonials } from "@/components/home/testimonials";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaSection } from "@/components/shared/cta-section";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n/config";
import { isValidLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: `${dict.meta.siteName} — Implantologie & Stomatologie Iași`,
    description: dict.meta.defaultDescription,
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
  ];

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <ServicesGrid dict={dict} locale={locale} />
      <FeatureSections dict={dict} locale={locale} />
      <Testimonials dict={dict} />
      <InstagramFeed
        title={dict.instagram.title}
        followLabel={dict.instagram.follow}
        placeholderNote={dict.instagram.placeholder}
      />
      <FaqSection title={dict.home.faqTitle} items={faqItems} />
      <CtaSection
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        dict={dict}
        locale={locale}
        page={`/${locale}`}
        whatsappContext="home"
      />
    </>
  );
}
