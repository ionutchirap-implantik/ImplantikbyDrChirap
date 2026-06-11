"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useConsent } from "./consent-context";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

type CookieBannerProps = {
  dict: Dictionary;
  locale: Locale;
};

export function CookieBanner({ dict, locale }: CookieBannerProps) {
  const { showBanner, showSettings, consent, acceptAll, rejectAll, savePreferences, closeBanner } =
    useConsent();
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (showSettings && consent.decided) {
      setCustomize(true);
      setAnalytics(consent.categories.analytics);
      setMarketing(consent.categories.marketing);
    }
  }, [showSettings, consent]);

  if (!showBanner) return null;

  const t = dict.cookie;
  const showPanel = customize || showSettings;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/20 bg-primary p-4 text-primary-foreground shadow-2xl sm:bottom-4 sm:left-4 sm:right-4 sm:mx-auto sm:max-w-2xl sm:rounded-2xl sm:border"
    >
      <h2 id="cookie-title" className="font-display text-lg font-semibold">
        {t.title}
      </h2>
      <p className="mt-2 text-sm text-primary-foreground/90">
        {t.description}{" "}
        <Link
          href={localePath(locale, "/cookies")}
          className="font-medium underline underline-offset-4 hover:text-white"
        >
          {t.policy}
        </Link>
        .
      </p>

      {showPanel && (
        <div className="mt-4 space-y-3 rounded-xl bg-white/10 p-4 text-primary-foreground">
          <div className="flex items-start gap-3">
            <Checkbox id="necessary" checked disabled className="border-white/60" />
            <div>
              <Label htmlFor="necessary" className="text-primary-foreground">
                {t.necessary}
              </Label>
              <p className="text-xs text-primary-foreground/80">{t.necessaryDesc}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="analytics"
              checked={analytics}
              onCheckedChange={(v) => setAnalytics(v === true)}
              className="border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-primary"
            />
            <div>
              <Label htmlFor="analytics" className="text-primary-foreground">
                {t.analytics}
              </Label>
              <p className="text-xs text-primary-foreground/80">{t.analyticsDesc}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="marketing"
              checked={marketing}
              onCheckedChange={(v) => setMarketing(v === true)}
              className="border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-primary"
            />
            <div>
              <Label htmlFor="marketing" className="text-primary-foreground">
                {t.marketing}
              </Label>
              <p className="text-xs text-primary-foreground/80">{t.marketingDesc}</p>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/80">{t.withdrawNote}</p>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <Button
          onClick={acceptAll}
          className="w-full bg-white text-primary hover:bg-white/90"
        >
          {t.acceptAll}
        </Button>
        <Button
          variant="outline"
          onClick={rejectAll}
          className="w-full border-white/60 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-white"
        >
          {t.rejectAll}
        </Button>
        {showPanel ? (
          <Button
            variant="outline"
            onClick={() => savePreferences({ analytics, marketing })}
            className="w-full border-white/60 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-white"
          >
            {t.save}
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={() => setCustomize(true)}
            className="w-full border-white/60 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-white"
          >
            {t.customize}
          </Button>
        )}
      </div>

      {consent.decided && (
        <button
          type="button"
          onClick={closeBanner}
          className="mt-3 text-xs text-primary-foreground/70 underline hover:text-white"
        >
          {t.close}
        </button>
      )}
    </div>
  );
}
