import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { WhatsAppLink } from "@/components/social/whatsapp-link";
import { SITE } from "@/lib/constants";
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
            {h.heroEyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {h.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance leading-relaxed">
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
          <p className="mt-4 text-sm text-muted-foreground">{h.heroNote}</p>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="relative aspect-[4/5] max-h-[70vh] overflow-hidden rounded-2xl shadow-lg sm:aspect-square sm:max-h-none lg:ml-auto lg:max-w-md">
            <Image
              src={SITE.doctorPortraitPath}
              alt={
                locale === "ro"
                  ? "Dr. Ionuț Chirap, medic specialist chirurgie orală și maxilo-facială, Implantik Iași"
                  : "Dr. Ionuț Chirap, oral and maxillofacial surgeon, Implantik Iași"
              }
              width={800}
              height={800}
              sizes="(max-width: 1024px) 100vw, 448px"
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
