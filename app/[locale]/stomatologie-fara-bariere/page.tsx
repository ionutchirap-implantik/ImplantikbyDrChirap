import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Heart, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaSection } from "@/components/shared/cta-section";
import { ViewContentTracker } from "@/components/tracking/view-content-tracker";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { PLACEHOLDERS } from "@/lib/constants";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: `${dict.genZ.title} — Iași`,
    description: dict.genZ.intro,
    path: "/stomatologie-fara-bariere",
    locale,
  });
}

export default async function GenZPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.genZ;
  const p = t.pillars;

  const pillars = [
    { icon: Shield, title: p.transparency, text: p.transparencyText },
    { icon: Heart, title: p.noFear, text: p.noFearText },
    { icon: Users, title: p.yourChoice, text: p.yourChoiceText },
  ];

  const page = `/${locale}/stomatologie-fara-bariere`;

  return (
    <>
      <ViewContentTracker page={page} contentName="stomatologie-fara-bariere" />
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Gen Z · {locale === "ro" ? "Fără bariere" : "No barriers"}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">{t.subtitle}</p>

          <div className="mx-auto mt-10 inline-flex flex-col items-center rounded-2xl border bg-background px-8 py-6 shadow-sm">
            <span className="font-display text-4xl font-bold text-primary">
              {PLACEHOLDERS.stat}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">{t.statLabel}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow grid items-center gap-10 lg:grid-cols-2">
          <RevealOnScroll>
            <p className="text-lg text-muted-foreground">{t.intro}</p>
          </RevealOnScroll>
          <RevealOnScroll>
            <ImagePlaceholder aspect="square" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <SectionHeading
            title={locale === "ro" ? "Ce ne diferențiază" : "What sets us apart"}
            align="center"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={t.ctaTitle}
        text={t.ctaText}
        dict={dict}
        locale={locale}
        page={page}
        whatsappContext="genZ"
      />
    </>
  );
}
