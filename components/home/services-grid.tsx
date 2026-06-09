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

const services = [
  { href: "/implantologie", titleKey: "implantologie", descRo: "Înlocuire dinți lipsă, plan individual.", descEn: "Replace missing teeth, individual plan." },
  { href: "/chirurgie-orala", titleKey: "chirurgie", descRo: "Chirurgie orală planificată.", descEn: "Planned oral surgery." },
  { href: "/stomatologie", titleKey: "stomatologie", descRo: "Îngrijire dentară completă.", descEn: "Complete dental care." },
  { href: "/estetica-dentara", titleKey: "estetica", descRo: "Estetică dentară și facială.", descEn: "Dental and facial aesthetics." },
  { href: "/ortodontie", titleKey: "ortodontie", descRo: "Aliniere dentară.", descEn: "Teeth alignment." },
  { href: "/stomatologie-fara-bariere", titleKey: "genZ", descRo: "Pentru tineri, fără presiune.", descEn: "For young adults, no pressure." },
] as const;

export function ServicesGrid({ dict, locale }: ServicesGridProps) {
  const h = dict.home;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <SectionHeading title={h.servicesTitle} subtitle={h.servicesSubtitle} align="center" className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const title =
              service.titleKey === "chirurgie"
                ? dict.form.services.chirurgie
                : service.titleKey === "ortodontie"
                  ? dict.form.services.ortodontie
                  : dict.nav[service.titleKey as keyof typeof dict.nav];
            const desc = locale === "ro" ? service.descRo : service.descEn;

            return (
              <RevealOnScroll key={service.href}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                    <Link
                      href={localePath(locale, service.href)}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      {dict.cta.learnMore}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
