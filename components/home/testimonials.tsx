import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SITE, PLACEHOLDERS } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type TestimonialsProps = {
  dict: Dictionary;
};

const placeholders = [
  { text: "[TESTIMONIAL PACIENT — DE CONFIRMAT]", author: "Pacient" },
  { text: "[TESTIMONIAL PACIENT — DE CONFIRMAT]", author: "Pacient" },
  { text: "[TESTIMONIAL PACIENT — DE CONFIRMAT]", author: "Pacient" },
];

export function Testimonials({ dict }: TestimonialsProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading title={dict.home.testimonialsTitle} align="center" className="mb-10" />

        <a
          href={SITE.googleProfileUrl}
          className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex text-brand-coral">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="font-medium">{SITE.googleRating}</span>
          <span className="text-muted-foreground">Google</span>
        </a>

        <div className="grid gap-6 md:grid-cols-3">
          {placeholders.map((item, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground italic">&ldquo;{item.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">— {item.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">{PLACEHOLDERS.stat}</p>
      </div>
    </section>
  );
}
