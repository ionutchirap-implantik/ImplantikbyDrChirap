import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";
import { faqJsonLd, JsonLd } from "@/lib/json-ld";

type FaqItem = { question: string; answer: string };

type FaqSectionProps = {
  title: string;
  items: FaqItem[];
};

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading title={title} align="center" className="mb-10" />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <JsonLd data={faqJsonLd(items)} />
      </div>
    </section>
  );
}
