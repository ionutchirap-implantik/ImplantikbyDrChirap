"use client";

import type { ReactNode } from "react";
import { buildWhatsAppUrl, type WhatsAppContext } from "@/lib/social/whatsapp";
import { trackWhatsAppClick } from "@/lib/tracking/data-layer";
import type { Locale } from "@/lib/i18n/config";

type WhatsAppLinkProps = {
  context: WhatsAppContext;
  locale: Locale;
  page: string;
  location?: string;
  className?: string;
  children: ReactNode;
};

export function WhatsAppLink({
  context,
  locale,
  page,
  location,
  className,
  children,
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl(context, locale)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackWhatsAppClick(page, location)}
    >
      {children}
    </a>
  );
}
