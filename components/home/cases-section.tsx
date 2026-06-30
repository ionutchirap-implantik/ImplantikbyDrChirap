import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SITE } from "@/lib/constants";
import { CASE_IMAGES } from "@/lib/images/site-images";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type CasesSectionProps = {
  dict: Dictionary;
};

export function CasesSection({ dict }: CasesSectionProps) {
  const c = dict.home.cases;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <SectionHeading title={c.title} subtitle={c.subtitle} align="center" className="mb-10" />

        <RevealOnScroll>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
            <div className="grid w-full gap-5 sm:grid-cols-3">
              {CASE_IMAGES.map((src, index) => (
                <Link
                  key={src}
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-primary/25 bg-background shadow-md transition-shadow hover:border-primary/40 hover:shadow-lg"
                  aria-label={`${c.cta} — ${c.imageAlts[index]}`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={src}
                      alt={c.imageAlts[index]}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <Button asChild size="lg" className="gap-2">
              <Link href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" aria-hidden />
                {c.cta}
              </Link>
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              <Link
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                {c.follow}
              </Link>
            </p>
          </div>
        </RevealOnScroll>

        <p className="mt-6 text-center text-xs text-muted-foreground">{c.consentNote}</p>
      </div>
    </section>
  );
}
