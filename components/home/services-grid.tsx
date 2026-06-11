import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type ServicesGridProps = {
  dict: Dictionary;
  locale: Locale;
};

const serviceHrefs = [
  "/implantologie",
  "/chirurgie-orala",
  "/reabilitari-complexe",
  "/stomatologie",
  "/ortodontie",
  "/estetica-dentara",
  "/estetica-faciala",
  "/stomatologie-fara-bariere",
] as const;

export function ServicesGrid({ dict, locale }: ServicesGridProps) {
  const h = dict.home;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <SectionHeading title={h.servicesTitle} subtitle={h.servicesSubtitle} align="center" className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.serviceItems.map((service, index) => (
            <RevealOnScroll key={serviceHrefs[index]}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg leading-snug">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <Link
                    href={localePath(locale, serviceHrefs[index])}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    {dict.cta.learnMore}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
