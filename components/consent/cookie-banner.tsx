"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useConsent } from "./consent-context";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

type CookieBannerProps = {
  dict: Dictionary;
  locale: Locale;
};

export function CookieBanner({ dict, locale }: CookieBannerProps) {
  const { showBanner, acceptAll, rejectAll, savePreferences } = useConsent();
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (!showBanner) return null;

  const t = dict.cookie;
  const prefix = `/${locale}`;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 p-4 shadow-2xl backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:mx-auto sm:max-w-2xl sm:rounded-2xl sm:border"
    >
      <h2 id="cookie-title" className="font-display text-lg font-semibold">
        {t.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>

      {customize && (
        <div className="mt-4 space-y-3 rounded-xl bg-muted/50 p-4">
          <div className="flex items-start gap-3">
            <Checkbox id="necessary" checked disabled />
            <div>
              <Label htmlFor="necessary">{t.necessary}</Label>
              <p className="text-xs text-muted-foreground">{t.necessaryDesc}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="analytics"
              checked={analytics}
              onCheckedChange={(v) => setAnalytics(v === true)}
            />
            <div>
              <Label htmlFor="analytics">{t.analytics}</Label>
              <p className="text-xs text-muted-foreground">{t.analyticsDesc}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="marketing"
              checked={marketing}
              onCheckedChange={(v) => setMarketing(v === true)}
            />
            <div>
              <Label htmlFor="marketing">{t.marketing}</Label>
              <p className="text-xs text-muted-foreground">{t.marketingDesc}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Link href={`${prefix}/cookies`} className="underline hover:text-foreground">
          {t.policy}
        </Link>
        <span>·</span>
        <Link href={`${prefix}/confidentialitate`} className="underline hover:text-foreground">
          {t.privacy}
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <Button onClick={acceptAll} className="sm:flex-1">
          {t.acceptAll}
        </Button>
        <Button variant="outline" onClick={rejectAll} className="sm:flex-1">
          {t.rejectAll}
        </Button>
        {customize ? (
          <Button
            variant="secondary"
            onClick={() => savePreferences({ analytics, marketing })}
            className="sm:flex-1"
          >
            {t.save}
          </Button>
        ) : (
          <Button variant="ghost" onClick={() => setCustomize(true)} className="sm:flex-1">
            {t.customize}
          </Button>
        )}
      </div>
    </div>
  );
}
