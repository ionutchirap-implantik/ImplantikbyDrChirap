"use client";

import { useConsent } from "@/components/consent/consent-context";

type CookieSettingsLinkProps = {
  label: string;
  className?: string;
};

export function CookieSettingsLink({ label, className }: CookieSettingsLinkProps) {
  const { openSettings } = useConsent();

  return (
    <button type="button" onClick={openSettings} className={className}>
      {label}
    </button>
  );
}
