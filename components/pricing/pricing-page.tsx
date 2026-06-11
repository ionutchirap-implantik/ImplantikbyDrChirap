import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import type { PricingContent } from "@/lib/i18n/pricing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type PricingPageProps = {
  content: PricingContent;
  locale: Locale;
};

export function PricingPage({ content, locale }: PricingPageProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading title={content.h1} subtitle={content.intro} />
        <p className="mt-6 text-sm text-muted-foreground">{content.disclaimer}</p>

        <div className="mt-12 space-y-10">
          {content.categories.map((category) => (
            <RevealOnScroll key={category.name}>
              <h2 className="font-display text-xl font-semibold sm:text-2xl">{category.name}</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border bg-background shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="border-b bg-secondary/30">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-medium">
                        {locale === "ro" ? "Serviciu" : "Service"}
                      </th>
                      <th scope="col" className="px-4 py-3 font-medium text-right">
                        {content.priceColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item) => (
                      <tr key={item.name} className="border-b last:border-0">
                        <td className="px-4 py-3 text-muted-foreground">{item.name}</td>
                        <td className="px-4 py-3 text-right font-medium tabular-nums">{item.from}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">{content.footerNote}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href={localePath(locale, "/programare")}>{content.ctaLabel}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={localePath(locale, "/implantologie")}>
              {locale === "ro" ? "Implantologie" : "Implantology"}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={localePath(locale, "/echipa/dr-ionut-chirap")}>Dr. Ionuț Chirap</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
