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

/** Înlocuiește cu capturi statice ale postărilor Instagram (fără embed / script terț). */
const POST_CAPTURE_PLACEHOLDER = "[CAPTURĂ POSTARE — DE ÎNLOCUIT]";

const CASE_CARD_COUNT = 3;

export function CasesSection({ dict }: CasesSectionProps) {
  const c = dict.home.cases;

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <SectionHeading title={c.title} subtitle={c.subtitle} align="center" className="mb-10" />

        <RevealOnScroll>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
            <div className="grid w-full gap-5 sm:grid-cols-3">
              {Array.from({ length: CASE_CARD_COUNT }, (_, index) => (
                <Link
                  key={index}
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-primary/25 bg-background shadow-md transition-shadow hover:border-primary/40 hover:shadow-lg"
                  aria-label={`${c.cta} — ${POST_CAPTURE_PLACEHOLDER}`}
                >
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 p-4 transition-colors group-hover:from-primary/25 group-hover:to-primary/10">
                    <span className="text-center text-xs font-medium leading-snug text-primary/80">
                      {POST_CAPTURE_PLACEHOLDER}
                    </span>
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
