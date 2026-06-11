"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

const SERVICE_LINKS = [
  { href: "/implantologie", key: "implantologie" as const },
  { href: "/stomatologie", key: "stomatologie" as const },
  { href: "/ortodontie", key: "ortodontie" as const },
  { href: "/contact", key: "contact" as const },
] as const;

const COPY = {
  ro: {
    title: "Pagina nu a fost găsită",
    description:
      "Linkul pe care l-ai accesat nu există sau a fost mutat. Poți reveni acasă, programa o consultație sau explora serviciile noastre.",
    home: "Înapoi acasă",
    book: "Programează o consultație",
    guides: "Ghiduri pacienți",
    services: "Servicii populare",
    searchHint: "Caută în ghiduri",
  },
  en: {
    title: "Page not found",
    description:
      "The link you followed does not exist or has moved. You can go home, book a consultation, or browse our services.",
    home: "Back to home",
    book: "Book a consultation",
    guides: "Patient guides",
    services: "Popular services",
    searchHint: "Browse guides",
  },
} as const;

const NAV_LABELS = {
  ro: {
    implantologie: "Implantologie",
    stomatologie: "Stomatologie",
    ortodontie: "Ortodonție",
    contact: "Contact",
  },
  en: {
    implantologie: "Dental Implants",
    stomatologie: "Dentistry",
    ortodontie: "Orthodontics",
    contact: "Contact",
  },
} as const;

function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isValidLocale(segment) ? segment : "ro";
}

export function NotFoundView() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = COPY[locale];
  const labels = NAV_LABELS[locale];

  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-2xl text-center">
        <p className="font-display text-6xl font-semibold text-primary sm:text-7xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{t.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t.description}</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href={localePath(locale)}>{t.home}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={localePath(locale, "/programare")}>{t.book}</Link>
          </Button>
        </div>

        <div className="mt-10 rounded-2xl border border-primary/15 bg-secondary/40 p-6 text-left">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
            {t.services}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(locale, link.href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {labels[link.key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-primary/10 pt-6">
            <Link
              href={localePath(locale, "/ghiduri")}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Search className="h-4 w-4" aria-hidden />
              {t.searchHint}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
