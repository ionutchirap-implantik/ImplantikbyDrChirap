import Link from "next/link";
import { MapPin, Clock, Phone, Facebook, Instagram } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SOCIAL_HANDLE } from "@/lib/social/utm";
import { PhoneLink } from "@/components/social/phone-link";
import { LocationSection } from "@/components/location/location-section";
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
  const page = `/${locale}`;

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container-narrow section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-primary">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{SITE.tagline}</p>
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
            <div>
              <PhoneLink page={page} location="footer" className="block text-muted-foreground hover:text-foreground">
                {SITE.phone}
              </PhoneLink>
              <a href={SITE.phoneLandlineHref} className="block text-muted-foreground hover:text-foreground">
                {SITE.phoneLandline}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">{SITE.phoneNote}</p>
            </div>
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
            <li>
              <Link href={localePath(locale, "/social")} className="text-muted-foreground hover:text-foreground">
                {dict.social.title}
              </Link>
            </li>
          </ul>
          <p className="mt-6 font-display text-sm font-semibold">{dict.footer.followUs}</p>
          <p className="mt-1 text-xs text-muted-foreground">{SOCIAL_HANDLE}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={SITE.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
              aria-label="TikTok"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      <LocationSection dict={dict} page={page} variant="footer" />

      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        <p>
          © {SITE.legal.copyrightFrom}–{year} {SITE.legal.company}. {dict.footer.rights}
        </p>
        <p className="mt-1">
          {dict.footer.companyLegal} ·{" "}
          <Link href={localePath(locale, "/confidentialitate")} className="underline hover:text-foreground">
            {dict.footer.privacy}
          </Link>
        </p>
      </div>
    </footer>
  );
}
