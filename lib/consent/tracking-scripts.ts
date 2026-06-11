import { SITE } from "@/lib/constants";
import type { ConsentCategories } from "@/lib/consent/preferences";

const GTM_SCRIPT_ID = "gtm-script";
const META_SCRIPT_ID = "meta-pixel-script";
const TIKTOK_SCRIPT_ID = "tiktok-pixel-script";

function isConfigured(value: string): boolean {
  return Boolean(value) && !value.startsWith("[");
}

export function updateGtagConsent(categories: ConsentCategories): void {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  };
  w.dataLayer = w.dataLayer || [];
  w.gtag =
    w.gtag ||
    function gtag(...args: unknown[]) {
      w.dataLayer?.push(args as unknown as Record<string, unknown>);
    };

  w.gtag("consent", "update", {
    analytics_storage: categories.analytics ? "granted" : "denied",
    ad_storage: categories.marketing ? "granted" : "denied",
    ad_user_data: categories.marketing ? "granted" : "denied",
    ad_personalization: categories.marketing ? "granted" : "denied",
  });

  w.dataLayer.push({
    event: "consent_updated",
    analytics: categories.analytics,
    marketing: categories.marketing,
  });
}

function injectScript(id: string, innerHTML: string): void {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.innerHTML = innerHTML;
  document.head.appendChild(script);
}

export function loadGtm(): void {
  const gtmId = SITE.gtmId;
  if (!isConfigured(gtmId) || document.getElementById(GTM_SCRIPT_ID)) return;

  injectScript(
    GTM_SCRIPT_ID,
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`
  );
}

export function loadMetaPixel(): void {
  const pixelId = SITE.metaPixelId;
  if (!isConfigured(pixelId) || document.getElementById(META_SCRIPT_ID)) return;

  injectScript(
    META_SCRIPT_ID,
    `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');
fbq('track','PageView');`
  );
}

export function loadTikTokPixel(): void {
  const pixelId = SITE.tiktokPixelId;
  if (!isConfigured(pixelId) || document.getElementById(TIKTOK_SCRIPT_ID)) return;

  injectScript(
    TIKTOK_SCRIPT_ID,
    `!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=r+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
ttq.load('${pixelId}');
ttq.page();}(window,document,'ttq');`
  );
}

export function removeTrackingScripts(): void {
  [GTM_SCRIPT_ID, META_SCRIPT_ID, TIKTOK_SCRIPT_ID].forEach((id) => {
    document.getElementById(id)?.remove();
  });
}

export function applyTrackingForConsent(categories: ConsentCategories): void {
  if (!categories.analytics && !categories.marketing) {
    removeTrackingScripts();
    return;
  }
  if (categories.analytics || categories.marketing) {
    loadGtm();
  }
  if (categories.marketing) {
    loadMetaPixel();
    loadTikTokPixel();
  } else {
    document.getElementById(META_SCRIPT_ID)?.remove();
    document.getElementById(TIKTOK_SCRIPT_ID)?.remove();
  }
}
