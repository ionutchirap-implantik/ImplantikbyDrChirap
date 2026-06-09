import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { WhatsAppLink } from "@/components/social/whatsapp-link";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type HeroProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Hero({ dict, locale }: HeroProps) {
  const h = dict.home;
  const page = `/${locale}`;

  return (
    <section className="section-padding pb-8">
      <div className="container-narrow grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Iași · Implantologie & Stomatologie
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {h.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            {h.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={localePath(locale, "/programare")}>{dict.cta.book}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <WhatsAppLink context="home" locale={locale} page={page} location="hero">
                {dict.cta.whatsapp}
              </WhatsAppLink>
            </Button>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <ImagePlaceholder aspect="square" className="lg:ml-auto lg:max-w-md" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
