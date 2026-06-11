import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type HowWeWorkProps = {
  dict: Dictionary;
};

export function HowWeWork({ dict }: HowWeWorkProps) {
  const p = dict.home.process;

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-narrow">
        <SectionHeading title={p.title} align="center" className="mb-12" />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((step, i) => (
            <RevealOnScroll key={i}>
              <li className="list-none">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
