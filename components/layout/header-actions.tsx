"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { WhatsAppLink } from "@/components/social/whatsapp-link";
import { PhoneLink } from "@/components/social/phone-link";
import { trackMapsClick, trackWazeClick } from "@/lib/tracking/data-layer";
import type { WhatsAppContext } from "@/lib/social/whatsapp";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath, switchLocalePath } from "@/lib/i18n/paths";

type HeaderActionsProps = {
  dict: Dictionary;
  locale: Locale;
  compact?: boolean;
};

function getWhatsAppContext(pathname: string): WhatsAppContext {
  if (pathname.includes("implantologie")) return "implantologie";
  if (pathname.includes("stomatologie-fara-bariere")) return "genZ";
  if (pathname.includes("programare")) return "programare";
  if (pathname.includes("contact")) return "contact";
  return "default";
}

export function HeaderActions({ dict, locale, compact = false }: HeaderActionsProps) {
  const pathname = usePathname();
  const otherLocale = locale === "ro" ? "en" : "ro";
  const page = pathname;
  const waContext = getWhatsAppContext(pathname);
  const t = dict.location;

  const iconBtn =
    "inline-flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-xl border border-input bg-background text-primary shadow-sm transition-colors hover:bg-secondary";

  return (
    <div className={`flex items-center gap-1.5 ${compact ? "flex-wrap" : ""}`}>
      <Link
        href={switchLocalePath(locale, otherLocale, pathname)}
        className="inline-flex h-11 min-h-11 min-w-11 items-center justify-center rounded-xl px-2 text-xs font-medium uppercase text-muted-foreground hover:bg-muted hover:text-foreground"
        hrefLang={otherLocale}
      >
        {otherLocale}
      </Link>

      <a
        href={SITE.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label={t.openGoogleMaps}
        onClick={() => trackMapsClick(page, "header")}
      >
        <MapPin className="h-4 w-4" />
      </a>

      <a
        href={SITE.wazeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label={t.openWaze}
        onClick={() => trackWazeClick(page, "header")}
      >
        <Navigation className="h-4 w-4" />
      </a>

      <WhatsAppLink
        context={waContext}
        locale={locale}
        page={page}
        location="header"
        className={iconBtn}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
      </WhatsAppLink>

      <PhoneLink page={page} location="header" className={iconBtn} aria-label={t.call}>
        <Phone className="h-4 w-4" />
      </PhoneLink>

      <Button asChild size="sm" className="hidden min-h-10 sm:inline-flex">
        <Link href={localePath(locale, "/programare")}>{dict.nav.book}</Link>
      </Button>
    </div>
  );
}
