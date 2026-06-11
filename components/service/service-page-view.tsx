import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageImage } from "@/components/shared/page-image";
import { getServiceHeroImage } from "@/lib/images/site-images";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqVisibleSection } from "@/components/shared/faq-visible-section";
import { CtaSection } from "@/components/shared/cta-section";
import { ViewContentTracker } from "@/components/tracking/view-content-tracker";
import { WhatsAppLink } from "@/components/social/whatsapp-link";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { RichServiceText } from "@/components/service/rich-service-text";
import { breadcrumbJsonLd, serviceJsonLd, JsonLd } from "@/lib/json-ld";
import { plainTextForSchema } from "@/lib/schema-plain-text";
import { getSiteUrl } from "@/lib/site-url";
import type { ServicePageContent } from "@/lib/i18n/service-pages/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type ServicePageViewProps = {
  content: ServicePageContent;
  dict: Dictionary;
  locale: Locale;
};

export function ServicePageView({ content, dict, locale }: ServicePageViewProps) {
  const page = `/${locale}${content.path}`;
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${page}`;
  const accentHero = content.heroVariant === "accent";

  return (
    <>
      <ViewContentTracker page={page} contentName={content.trackName} />

      <section
        className={`section-padding ${accentHero ? "bg-gradient-to-b from-primary/10 to-background" : ""}`}
      >
        <div className="container-narrow">
          <SectionHeading title={content.h1} />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <RevealOnScroll>
              <p className="text-lg leading-relaxed text-muted-foreground">
                <RichServiceText text={content.intro} locale={locale} />
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={localePath(locale, "/programare")}>{dict.cta.book}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <WhatsAppLink
                    context={content.whatsappContext}
                    locale={locale}
                    page={page}
                    location="intro"
                  >
                    {dict.cta.whatsapp}
                  </WhatsAppLink>
                </Button>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <PageImage
                src={content.heroImage ?? getServiceHeroImage(content.slug)}
                alt={content.heroImageAlt ?? content.h1}
                aspect={content.heroImageAspect ?? "video"}
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {content.sections.map((section, index) => (
        <section
          key={section.title}
          className={`section-padding ${index % 2 === 1 ? "bg-secondary/20" : ""}`}
        >
          <div className="container-narrow max-w-3xl">
            <RevealOnScroll>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">{section.title}</h2>
              {section.body ? (
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  <RichServiceText text={section.body} locale={locale} />
                </p>
              ) : null}
              {section.items?.length ? (
                section.ordered ? (
                  <ol className="mt-6 list-decimal space-y-3 pl-5 text-muted-foreground">
                    {section.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        <RichServiceText text={item} locale={locale} />
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span className="leading-relaxed">
                          <RichServiceText text={item} locale={locale} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )
              ) : null}
            </RevealOnScroll>
          </div>
        </section>
      ))}

      {content.internalLinks.length > 0 ? (
        <section className="section-padding border-t">
          <div className="container-narrow">
            <h2 className="font-display text-lg font-semibold">
              {locale === "ro" ? "Pagini utile" : "Related pages"}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localePath(locale, link.href)}
                  className="inline-flex items-center gap-1 rounded-full border bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm transition-shadow hover:shadow-md"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FaqVisibleSection
        title={locale === "ro" ? "Întrebări frecvente" : "Frequently asked questions"}
        items={content.faq}
        locale={locale}
      />

      <CtaSection
        title={content.cta.title}
        text={content.cta.text ?? dict.home.finalCta.text}
        dict={dict}
        locale={locale}
        page={page}
        whatsappContext={content.whatsappContext}
      />

      <JsonLd
        data={[
          serviceJsonLd(content.h1, plainTextForSchema(content.intro), pageUrl),
          breadcrumbJsonLd([
            { name: locale === "ro" ? "Acasă" : "Home", url: `${siteUrl}/${locale}` },
            { name: content.h1, url: pageUrl },
          ]),
        ]}
      />
    </>
  );
}
