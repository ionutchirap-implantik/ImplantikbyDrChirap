"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/consent/consent-context";
import { captureAttributionFromUrl } from "@/lib/tracking/attribution";

export function ConsentScripts() {
  const { consent } = useConsent();

  useEffect(() => {
    if (consent.decided && consent.categories.marketing) {
      captureAttributionFromUrl();
    }
  }, [consent]);

  return null;
}
