import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import type { PricingContent } from "@/lib/i18n/pricing";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type PricingPageProps = {
  content: PricingContent;
  locale: Locale;
};

function PriceRows({ content, categoryId }: { content: PricingContent; categoryId: string }) {
  const category = content.categories.find((c) => c.id === categoryId);
  if (!category) return null;

  return (
    <>
      {/* Desktop table */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-primary/20 bg-background shadow-sm md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-primary/15 bg-primary/10">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium text-foreground">
                {content.serviceColumn}
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-right text-foreground">
                {content.priceColumn}
              </th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item) => (
              <tr key={item.name} className="border-b border-primary/10 last:border-0">
                <td className="px-4 py-3 text-muted-foreground">{item.name}</td>
                <td className="px-4 py-3 text-right font-medium tabular-nums text-foreground">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="mt-4 space-y-3 md:hidden">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="rounded-2xl border border-primary/20 bg-background p-4 shadow-sm"
          >
            <p className="text-sm font-medium leading-snug">{item.name}</p>
            <p className="mt-2 text-sm font-semibold tabular-nums text-primary">{item.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export function PricingPage({ content, locale }: PricingPageProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{content.h1}</h1>
        <p className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm leading-relaxed text-muted-foreground">
          {content.legalNote}
        </p>

        <nav
          aria-label={content.tocTitle}
          className="mt-10 rounded-2xl border border-primary/15 bg-secondary/20 p-5"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
            {content.tocTitle}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {content.categories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="inline-block rounded-full border border-primary/25 bg-background px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 space-y-14">
          {content.categories.map((category) => (
            <RevealOnScroll key={category.id}>
              <section id={category.id} className="scroll-mt-24">
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-primary/20 pb-3">
                  <h2 className="font-display text-xl font-semibold text-primary sm:text-2xl">
                    {category.name}
                  </h2>
                  {category.serviceHref ? (
                    <Link
                      href={localePath(locale, category.serviceHref)}
                      className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {locale === "ro" ? "Pagina serviciului →" : "Service page →"}
                    </Link>
                  ) : null}
                </div>
                <PriceRows content={content} categoryId={category.id} />
                <div className="mt-6">
                  <Button asChild>
                    <Link href={localePath(locale, "/programare")}>{content.ctaLabel}</Link>
                  </Button>
                </div>
              </section>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
