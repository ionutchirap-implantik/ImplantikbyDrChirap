"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/consent/consent-context";
import { trackViewContent } from "@/lib/tracking/data-layer";

type ViewContentTrackerProps = {
  page: string;
  contentName: string;
};

export function ViewContentTracker({ page, contentName }: ViewContentTrackerProps) {
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent.decided) return;
    if (!consent.categories.analytics && !consent.categories.marketing) return;
    trackViewContent(page, contentName);
  }, [page, contentName, consent]);

  return null;
}
