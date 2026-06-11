import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type StatsBandProps = {
  dict: Dictionary;
};

export function StatsBand({ dict }: StatsBandProps) {
  const stats = dict.home.stats;

  return (
    <section className="border-y bg-background py-10 sm:py-12">
      <div className="container-narrow">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <RevealOnScroll key={i}>
              <div className="text-center">
                <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium">{stat.label}</p>
                {stat.note ? (
                  <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>
                ) : null}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
