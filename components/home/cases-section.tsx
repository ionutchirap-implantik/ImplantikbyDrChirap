import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <RevealOnScroll key={i}>
              <ImagePlaceholder aspect="video" label={c.placeholder} />
            </RevealOnScroll>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">{c.consentNote}</p>
      </div>
    </section>
  );
}
