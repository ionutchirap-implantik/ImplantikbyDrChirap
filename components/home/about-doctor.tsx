import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type AboutDoctorProps = {
  dict: Dictionary;
  locale: Locale;
};

export function AboutDoctor({ dict, locale }: AboutDoctorProps) {
  const a = dict.home.about;

  return (
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{a.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{a.text}</p>
          <ul className="mt-8 space-y-3">
            {a.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8">
            <Link href={localePath(locale, "/echipa/dr-ionut-chirap")}>{a.cta}</Link>
          </Button>
          <p className="mt-6 text-xs text-muted-foreground">{a.note}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
