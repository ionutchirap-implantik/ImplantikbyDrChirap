import { PageImage } from "@/components/shared/page-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { CLINIC_IMAGES } from "@/lib/images/site-images";
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
          {Object.values(CLINIC_IMAGES).map((src, i) => (
            <RevealOnScroll key={src}>
              <PageImage
                src={src}
                alt={`Implantik by Dr. Chirap — clinică Iași ${i + 1}`}
                aspect="video"
              />
            </RevealOnScroll>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">{c.consentNote}</p>
      </div>
    </section>
  );
}
