"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { HeaderActions } from "@/components/layout/header-actions";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

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

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const label =
              "labelKey" in item ? dict.nav[item.labelKey] : dict.nav[item.key as keyof typeof dict.nav];
            return (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex">
            <HeaderActions dict={dict} locale={locale} />
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.a11y.closeMenu : dict.a11y.openMenu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <HeaderActions dict={dict} locale={locale} compact />
          <ul className="mt-4 space-y-1">
            {navItems.map((item) => {
              const label =
                "labelKey" in item ? dict.nav[item.labelKey] : dict.nav[item.key as keyof typeof dict.nav];
              return (
                <li key={item.href}>
                  <Link
                    href={localePath(locale, item.href)}
                    className="flex min-h-11 items-center py-3 text-base"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Button asChild className="min-h-11 w-full">
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
