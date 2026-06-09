import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type FeatureSectionsProps = {
  dict: Dictionary;
  locale: Locale;
};

export function FeatureSections({ dict, locale }: FeatureSectionsProps) {
  const h = dict.home;

  const sections = [
    {
      title: h.surgicalTitle,
      text: h.surgicalText,
      href: "/reabilitari-complexe",
      imageLeft: false,
    },
    {
      title: h.aestheticTitle,
      text: h.aestheticText,
      href: "/estetica-dentara",
      imageLeft: true,
    },
    {
      title: h.genZTitle,
      text: h.genZText,
      href: "/stomatologie-fara-bariere",
      imageLeft: false,
      accent: true,
    },
  ];

  return (
    <>
      {sections.map((section) => (
        <section
          key={section.href}
          className={`section-padding ${section.accent ? "bg-primary/5" : ""}`}
        >
          <div className="container-narrow grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {section.imageLeft && (
              <RevealOnScroll>
                <ImagePlaceholder />
              </RevealOnScroll>
            )}
            <RevealOnScroll>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">{section.text}</p>
              <Button asChild className="mt-6" variant={section.accent ? "default" : "outline"}>
                <Link href={localePath(locale, section.href)}>{dict.cta.learnMore}</Link>
              </Button>
            </RevealOnScroll>
            {!section.imageLeft && (
              <RevealOnScroll>
                <ImagePlaceholder />
              </RevealOnScroll>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
