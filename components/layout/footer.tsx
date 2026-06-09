import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type FooterProps = {
  dict: Dictionary;
  locale: Locale;
};

const serviceLinks = [
  { href: "/implantologie", key: "implantologie" },
  { href: "/stomatologie", key: "stomatologie" },
  { href: "/estetica-dentara", key: "estetica" },
  { href: "/stomatologie-fara-bariere", key: "genZ" },
] as const;

export function Footer({ dict, locale }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container-narrow section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-primary">{SITE.name}</p>
          <p className="mt-3 text-sm text-muted-foreground">{dict.meta.defaultDescription}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
            {dict.nav.services}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(locale, link.href)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {dict.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p className="font-medium">{dict.footer.address}</p>
              <p className="text-muted-foreground">{SITE.address}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p className="font-medium">{dict.footer.schedule}</p>
              <p className="text-muted-foreground">{SITE.hours}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <a href={SITE.phoneHref} className="text-muted-foreground hover:text-foreground">
              {SITE.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
            {dict.footer.legal}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={localePath(locale, "/confidentialitate")} className="text-muted-foreground hover:text-foreground">
                {dict.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/cookies")} className="text-muted-foreground hover:text-foreground">
                {dict.footer.cookies}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/termeni")} className="text-muted-foreground hover:text-foreground">
                {dict.footer.terms}
              </Link>
            </li>
          </ul>
          <p className="mt-6 font-display text-sm font-semibold">{dict.footer.followUs}</p>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>FB: {SITE.social.facebook}</span>
            <span>IG: {SITE.social.instagram}</span>
            <span>TikTok: {SITE.social.tiktok}</span>
          </div>
        </div>
      </div>

      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {year} {SITE.name}. {dict.footer.rights}
      </div>
    </footer>
  );
}
