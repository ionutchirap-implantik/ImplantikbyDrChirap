import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SITE } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type CasesSectionProps = {
  dict: Dictionary;
};

const INSTAGRAM_EMBED_SRC = `${SITE.social.instagramFeaturedPost}embed`;

export function CasesSection({ dict }: CasesSectionProps) {
  const c = dict.home.cases;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <SectionHeading title={c.title} subtitle={c.subtitle} align="center" className="mb-10" />

        <RevealOnScroll>
          <div className="mx-auto flex max-w-md flex-col items-center gap-6">
            <div className="w-full overflow-hidden rounded-2xl border bg-background shadow-lg">
              <iframe
                src={INSTAGRAM_EMBED_SRC}
                title="Implantik — post Instagram"
                className="aspect-square w-full border-0"
                loading="lazy"
                allow="encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <Button asChild size="lg" className="gap-2">
              <Link
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
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
