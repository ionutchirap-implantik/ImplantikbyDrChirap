"use client";

import { Phone, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/social/whatsapp-link";
import { PhoneLink } from "@/components/social/phone-link";
import type { WhatsAppContext } from "@/lib/social/whatsapp";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

type MobileActionBarProps = {
  dict: Dictionary;
  locale: Locale;
};

function getWhatsAppContext(pathname: string): WhatsAppContext {
  if (pathname.includes("implantologie")) return "implantologie";
  if (pathname.includes("stomatologie-fara-bariere")) return "genZ";
  if (pathname.includes("programare")) return "programare";
  if (pathname.includes("contact")) return "contact";
  if (pathname.includes("social")) return "social";
  return "default";
}

export function MobileActionBar({ dict, locale }: MobileActionBarProps) {
  const pathname = usePathname();
  const page = pathname;
  const waContext = getWhatsAppContext(pathname);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t bg-background/95 p-3 pb-safe backdrop-blur md:hidden">
      <Button variant="outline" className="flex-1" asChild>
        <PhoneLink page={page} location="mobile_bar" className="flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" />
          {dict.cta.call}
        </PhoneLink>
      </Button>
      <Button className="flex-1" asChild>
        <WhatsAppLink
          context={waContext}
          locale={locale}
          page={page}
          location="mobile_bar"
          className="flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </WhatsAppLink>
      </Button>
    </div>
  );
}
