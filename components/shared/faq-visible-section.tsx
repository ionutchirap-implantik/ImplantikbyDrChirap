import { SectionHeading } from "./section-heading";
import { faqJsonLd, JsonLd } from "@/lib/json-ld";

type FaqItem = { question: string; answer: string };

type FaqVisibleSectionProps = {
  title: string;
  items: FaqItem[];
};

export function FaqVisibleSection({ title, items }: FaqVisibleSectionProps) {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <SectionHeading title={title} align="center" className="mb-10" />
        <dl className="mx-auto max-w-3xl space-y-8">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border bg-background p-6 shadow-sm">
              <dt className="font-display text-lg font-semibold">{item.question}</dt>
              <dd className="mt-3 text-muted-foreground leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <JsonLd data={faqJsonLd(items)} />
      </div>
    </section>
  );
}
