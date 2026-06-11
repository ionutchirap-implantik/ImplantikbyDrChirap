"use client";

import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { trackMapsClick, trackPhoneCall, trackWazeClick } from "@/lib/tracking/data-layer";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type NavigationButtonsProps = {
  dict: Dictionary;
  page: string;
  location?: string;
};

export function NavigationButtons({ dict, page, location = "location_section" }: NavigationButtonsProps) {
  const t = dict.location;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button size="lg" className="min-h-11 flex-1 sm:flex-none" asChild>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackMapsClick(page, location)}
        >
          <MapPin className="h-5 w-5" />
          {t.openGoogleMaps}
        </a>
      </Button>
      <Button size="lg" variant="secondary" className="min-h-11 flex-1 sm:flex-none" asChild>
        <a
          href={SITE.wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWazeClick(page, location)}
        >
          <Navigation className="h-5 w-5" />
          {t.openWaze}
        </a>
      </Button>
      <Button size="lg" variant="outline" className="min-h-11 flex-1 sm:flex-none" asChild>
        <a href={SITE.phoneHref} onClick={() => trackPhoneCall(page, location)}>
          <Phone className="h-5 w-5" />
          {t.call}
        </a>
      </Button>
    </div>
  );
}
