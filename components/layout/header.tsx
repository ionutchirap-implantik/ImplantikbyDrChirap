"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath, switchLocalePath } from "@/lib/i18n/paths";

type HeaderProps = {
  dict: Dictionary;
  locale: Locale;
};

const navItems = [
  { key: "implantologie", href: "/implantologie" },
  { key: "stomatologie", href: "/stomatologie" },
  { key: "genZ", href: "/stomatologie-fara-bariere", labelKey: "genZ" as const },
  { key: "echipa", href: "/echipa" },
  { key: "preturi", href: "/preturi" },
  { key: "contact", href: "/contact" },
] as const;

export function Header({ dict, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const otherLocale = locale === "ro" ? "en" : "ro";

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const label =
              "labelKey" in item ? dict.nav[item.labelKey] : dict.nav[item.key as keyof typeof dict.nav];
            const href = localePath(locale, item.href);
            return (
              <Link
                key={item.href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={switchLocalePath(locale, otherLocale, pathname)}
            className="rounded-lg px-2 py-1 text-xs font-medium uppercase text-muted-foreground hover:bg-muted hover:text-foreground"
            hrefLang={otherLocale}
          >
            {otherLocale}
          </Link>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={localePath(locale, "/programare")}>{dict.nav.book}</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t px-4 py-4 lg:hidden" aria-label="Mobile">
          <ul className="space-y-3">
            {navItems.map((item) => {
              const label =
                "labelKey" in item ? dict.nav[item.labelKey] : dict.nav[item.key as keyof typeof dict.nav];
              return (
                <li key={item.href}>
                  <Link
                    href={localePath(locale, item.href)}
                    className="block text-base"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button asChild className="w-full">
                <Link href={localePath(locale, "/programare")} onClick={() => setOpen(false)}>
                  {dict.nav.book}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
