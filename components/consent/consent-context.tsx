"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  buildConsentPreferences,
  defaultPreferences,
  readConsentCookie,
  writeConsentCookie,
  type ConsentCategories,
  type ConsentPreferences,
} from "@/lib/consent/preferences";
import {
  applyTrackingForConsent,
  updateGtagConsent,
} from "@/lib/consent/tracking-scripts";
import { clearAttributionCookie } from "@/lib/tracking/attribution";

type ConsentContextValue = {
  consent: ConsentPreferences;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: Omit<ConsentCategories, "necessary">) => void;
  openSettings: () => void;
  closeBanner: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function revokeMarketingSideEffects(previous: ConsentPreferences, next: ConsentPreferences) {
  const hadMarketing = previous.decided && previous.categories.marketing;
  const hasMarketing = next.categories.marketing;
  if (hadMarketing && !hasMarketing) {
    clearAttributionCookie();
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentPreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readConsentCookie();
    const initial = stored ?? defaultPreferences;
    setConsent(initial);
    setShowBanner(!initial.decided);
    setHydrated(true);
    if (initial.decided) {
      updateGtagConsent(initial.categories);
      applyTrackingForConsent(initial.categories);
    }
  }, []);

  const applyConsent = useCallback((next: ConsentPreferences) => {
    setConsent((prev) => {
      revokeMarketingSideEffects(prev, next);
      return next;
    });
    writeConsentCookie(next);
    setShowBanner(false);
    setShowSettings(false);
    updateGtagConsent(next.categories);
    applyTrackingForConsent(next.categories);
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent(buildConsentPreferences({ analytics: true, marketing: true }));
  }, [applyConsent]);

  const rejectAll = useCallback(() => {
    applyConsent(buildConsentPreferences({ analytics: false, marketing: false }));
  }, [applyConsent]);

  const savePreferences = useCallback(
    (prefs: Omit<ConsentCategories, "necessary">) => {
      applyConsent(buildConsentPreferences(prefs));
    },
    [applyConsent]
  );

  const openSettings = useCallback(() => {
    setShowSettings(true);
    setShowBanner(true);
  }, []);

  const closeBanner = useCallback(() => {
    if (consent.decided) {
      setShowBanner(false);
      setShowSettings(false);
    }
  }, [consent.decided]);

  const value = useMemo(
    () => ({
      consent,
      showBanner: hydrated && showBanner,
      showSettings,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeBanner,
    }),
    [
      consent,
      showBanner,
      showSettings,
      hydrated,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeBanner,
    ]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
