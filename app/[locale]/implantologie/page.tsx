import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaSection } from "@/components/shared/cta-section";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, JsonLd } from "@/lib/json-ld";
import { SITE } from "@/lib/constants";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.implantologie.title,
    description: dict.implantologie.subtitle,
    path: "/implantologie",
    locale,
  });
}

export default async function ImplantologiePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.implantologie;

  const processSteps =
    locale === "ro"
      ? [
          "Consultație și evaluare clinică",
          "Investigații imagistice, dacă sunt necesare",
          "Plan de tratament personalizat, explicat în detaliu",
          "Intervenția chirurgicală, în condiții controlate",
          "Urmărire și îngrijire post-operatorie",
        ]
      : [
          "Consultation and clinical evaluation",
          "Imaging investigations if needed",
          "Personalized treatment plan, explained in detail",
          "Surgical procedure in controlled conditions",
          "Follow-up and post-operative care",
        ];

  const benefits =
    locale === "ro"
      ? [
          "Restabilirea funcției de masticație",
          "Aspect natural al zâmbetului",
          "Planificare individuală pentru fiecare caz",
          "Abordare echipă multidisciplinară în clinică",
        ]
      : [
          "Restored chewing function",
          "Natural smile appearance",
          "Individual planning for each case",
          "Multidisciplinary team approach in-clinic",
        ];

  const faqItems =
    locale === "ro"
      ? [
          {
            question: "Cine poate primi un implant dentar?",
            answer:
              "Evaluarea clinică și investigațiile stabilesc dacă implantul este o opțiune potrivită. Discutăm alternativele și alegem împreună.",
          },
          {
            question: "Cât durează procesul?",
            answer:
              "Durata variază în funcție de complexitate. Primești un calendar estimativ în planul de tratament.",
          },
          {
            question: "Ce investigații sunt necesare?",
            answer:
              "De regulă radiografii sau tomografie computerizată pentru evaluarea structurii osoase. Recomandările sunt personalizate.",
          },
        ]
      : [
          {
            question: "Who can receive a dental implant?",
            answer:
              "Clinical evaluation and investigations determine if an implant is a suitable option. We discuss alternatives and decide together.",
          },
          {
            question: "How long does the process take?",
            answer:
              "Duration varies by complexity. You receive an estimated timeline in your treatment plan.",
          },
          {
            question: "What investigations are needed?",
            answer:
              "Usually X-rays or CT scans to assess bone structure. Recommendations are personalized.",
          },
        ];

  const pageUrl = `${SITE.url}/${locale}/implantologie`;

  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading title={t.title} subtitle={t.subtitle} />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <RevealOnScroll>
              <p className="text-lg text-muted-foreground">{t.intro}</p>
              <Button asChild className="mt-6">
                <Link href={localePath(locale, "/programare")}>{dict.cta.book}</Link>
              </Button>
            </RevealOnScroll>
            <RevealOnScroll>
              <ImagePlaceholder />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <SectionHeading title={t.processTitle} align="center" className="mb-10" />
          <ol className="mx-auto grid max-w-3xl gap-4">
            {processSteps.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border bg-background p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading title={t.benefitsTitle} align="center" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <Card key={benefit}>
                <CardHeader>
                  <CardTitle className="text-base font-medium">{benefit}</CardTitle>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title={t.faqTitle} items={faqItems} />
      <CtaSection
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        dict={dict}
        locale={locale}
      />

      <JsonLd
        data={[
          serviceJsonLd(t.title, t.subtitle, pageUrl),
          breadcrumbJsonLd([
            { name: "Home", url: `${SITE.url}/${locale}` },
            { name: t.title, url: pageUrl },
          ]),
        ]}
      />
    </>
  );
}
