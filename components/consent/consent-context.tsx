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
import { SITE } from "@/lib/constants";

export type ConsentCategories = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type ConsentState = {
  decided: boolean;
  categories: ConsentCategories;
};

type ConsentContextValue = {
  consent: ConsentState;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: Omit<ConsentCategories, "necessary">) => void;
  openBanner: () => void;
};

const STORAGE_KEY = "implantik_consent_v1";

const defaultConsent: ConsentState = {
  decided: false,
  categories: { necessary: true, analytics: false, marketing: false },
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function loadConsent(): ConsentState {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConsent;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return defaultConsent;
  }
}

function persistConsent(state: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateGtagConsent(categories: ConsentCategories) {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  w.dataLayer = w.dataLayer || [];
  w.gtag =
    w.gtag ||
    function gtag(...args: unknown[]) {
      w.dataLayer?.push(args);
    };

  w.gtag("consent", "update", {
    analytics_storage: categories.analytics ? "granted" : "denied",
    ad_storage: categories.marketing ? "granted" : "denied",
    ad_user_data: categories.marketing ? "granted" : "denied",
    ad_personalization: categories.marketing ? "granted" : "denied",
  });
}

function loadTrackingScripts(categories: ConsentCategories) {
  if (typeof document === "undefined") return;
  if (!categories.analytics && !categories.marketing) return;

  const gtmId = SITE.gtmId;
  if (gtmId.startsWith("[") || document.getElementById("gtm-script")) return;

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
  document.head.appendChild(script);
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [showBanner, setShowBanner] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = loadConsent();
    setConsent(stored);
    setShowBanner(!stored.decided);
    setHydrated(true);
    if (stored.decided) {
      updateGtagConsent(stored.categories);
      loadTrackingScripts(stored.categories);
    }
  }, []);

  const applyConsent = useCallback((next: ConsentState) => {
    setConsent(next);
    persistConsent(next);
    setShowBanner(false);
    updateGtagConsent(next.categories);
    loadTrackingScripts(next.categories);
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent({
      decided: true,
      categories: { necessary: true, analytics: true, marketing: true },
    });
  }, [applyConsent]);

  const rejectAll = useCallback(() => {
    applyConsent({
      decided: true,
      categories: { necessary: true, analytics: false, marketing: false },
    });
  }, [applyConsent]);

  const savePreferences = useCallback(
    (prefs: Omit<ConsentCategories, "necessary">) => {
      applyConsent({
        decided: true,
        categories: { necessary: true, ...prefs },
      });
    },
    [applyConsent]
  );

  const openBanner = useCallback(() => setShowBanner(true), []);

  const value = useMemo(
    () => ({
      consent,
      showBanner: hydrated && showBanner,
      acceptAll,
      rejectAll,
      savePreferences,
      openBanner,
    }),
    [consent, showBanner, hydrated, acceptAll, rejectAll, savePreferences, openBanner]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
