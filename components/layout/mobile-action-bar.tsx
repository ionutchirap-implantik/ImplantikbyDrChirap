"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { pushDataLayer } from "@/lib/tracking/data-layer";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type MobileActionBarProps = {
  dict: Dictionary;
};

const whatsappMessage = encodeURIComponent(
  "Bună ziua, aș dori o programare la Implantik by Dr. Chirap."
);

export function MobileActionBar({ dict }: MobileActionBarProps) {
  const whatsappUrl = `${SITE.whatsappHref}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t bg-background/95 p-3 backdrop-blur md:hidden">
      <Button variant="outline" className="flex-1" asChild>
        <a
          href={SITE.phoneHref}
          onClick={() => pushDataLayer({ event: "phone_call", location: "mobile_bar" })}
        >
          <Phone className="h-4 w-4" />
          {dict.cta.call}
        </a>
      </Button>
      <Button className="flex-1" asChild>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pushDataLayer({ event: "whatsapp_click", location: "mobile_bar" })}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </Button>
    </div>
  );
}
