import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type GenZTeaserProps = {
  dict: Dictionary;
  locale: Locale;
};

export function GenZTeaser({ dict, locale }: GenZTeaserProps) {
  const g = dict.home.genZTeaser;

  return (
    <section className="section-padding">
      <div className="container-narrow grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <ImagePlaceholder aspect="video" label={g.imageLabel} />
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{g.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{g.text}</p>
          <Button asChild className="mt-6" variant="outline">
            <Link href={localePath(locale, "/stomatologie-fara-bariere")}>{dict.cta.learnMore}</Link>
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
