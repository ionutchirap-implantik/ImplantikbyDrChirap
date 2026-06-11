import { POLICY_VERSION } from "@/lib/consent/policy-version";
import type { LegalDocument } from "@/lib/legal/types";

export const cookiesEn: LegalDocument = {
  type: "cookies",
  title: "Cookie policy",
  description:
    "This policy explains what cookies and similar technologies are used on implantik.ro, the categories used by Implantik Chirap SRL, the legal basis, how consent is managed, and how you can withdraw it.",
  lastUpdated: `Last updated: ${POLICY_VERSION}`,
  tocTitle: "Table of contents",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      paragraphs: [
        "The implantik.ro website uses cookies and similar technologies to ensure proper site operation, to understand how the site is used (analytics), and — only with your consent — to measure and optimise digital marketing campaigns.",
        "This policy supplements the Privacy Policy and should be read together with it. The data controller is Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581, tax ID (CUI) 40441553.",
        "By “cookies” we also mean equivalent technologies such as tracking pixels or similar identifiers loaded in the browser after consent. The site does not use localStorage for consent preferences; these are stored exclusively in the HTTP cookie `consent-preferences`.",
      ],
    },
    {
      id: "what-are-cookies",
      title: "2. What cookies are",
      paragraphs: [
        "Cookies are small text files stored on your device (computer, phone, tablet) when you visit a website. They allow the site to recognise your device or browser, remember certain preferences, and collect technical information about your visit.",
        "Cookies may be “session” cookies (deleted when you close the browser) or “persistent” cookies (remaining for a defined period). They may be placed by the site you visit (“first-party”) or by third parties (“third-party”), for example analytics or advertising providers.",
        "Blocking or deleting cookies may affect site functionality or browsing experience, especially for strictly necessary cookies.",
      ],
    },
    {
      id: "controller",
      title: "3. Controller and contact",
      paragraphs: [
        "The controller deciding the use of cookies on implantik.ro is Implantik Chirap SRL. For questions about cookies or consent: implantikdrchirap@gmail.com, phone (0758) 169 234.",
        "Implantik Chirap SRL has not appointed a Data Protection Officer (DPO) under Art. 37 GDPR. The contact point for data protection and exercising GDPR rights is implantikdrchirap@gmail.com with the subject line “Data protection”. Response hours: Monday–Friday, 8:00–19:30.",
      ],
    },
    {
      id: "categories",
      title: "4. Cookie categories used",
      paragraphs: [
        "We classify cookies into three main categories, aligned with the site’s consent banner:",
        "Strictly necessary — essential for site operation and security; do not require consent under applicable law.",
        "Analytics — help us understand how the site is used (Google Analytics 4 via GTM), based on aggregated or pseudonymised data; activated only after consent.",
        "Marketing — used for conversion measurement, remarketing, and campaign attribution (Google Ads, Meta Pixel, TikTok Pixel); activated only after consent.",
        "Cookie table: | Name | Provider | Category | Purpose | Duration | | consent-preferences | Implantik (first-party) | Necessary | CMP consent preferences | 12 months | | cf-turnstile-* / __cf_bm | Cloudflare | Necessary | Turnstile anti-spam | session–30 days | | _ga | Google | Analytics | GA4 identifier | 2 years | | _ga_* | Google | Analytics | GA4 session state | 2 years | | _gcl_* | Google | Marketing | Google Ads attribution | 90 days | | _fbp | Meta | Marketing | Meta browser identifier | 90 days | | _ttp / tt_* | TikTok | Marketing | TikTok identifier | 13 months | | implantik_attribution | Implantik (first-party) | Marketing | UTM/gclid/fbclid/ttclid params | 90 days | Analytics and marketing cookies are placed only after consent is granted for the relevant category.",
      ],
    },
    {
      id: "necessary",
      title: "5. Strictly necessary cookies",
      paragraphs: [
        "These cookies are essential for: correct page display; form security and anti-spam protection; saving your cookie consent choices.",
        "Known first-party cookies: `consent-preferences` — stores accepted/refused cookie categories, timestamp, and policy version; duration: up to 12 months; basis: Art. 6(1)(f) GDPR (legitimate interest) and/or Art. 6(1)(c) where consent storage is required by law.",
        "Other strictly necessary cookies: Cloudflare Turnstile cookies (`cf-turnstile-response`, `__cf_bm`) — anti-bot verification on form submission; duration: session or up to 30 days; basis: Art. 6(1)(f) GDPR. Language preference (ro/en) is managed via URL routing (`/[locale]`), without a dedicated language cookie. The `implantik_attribution` cookie is not strictly necessary — it is set only after marketing consent.",
        "You cannot disable these cookies from our banner without affecting site operation, as they are necessary for the service you explicitly request.",
      ],
    },
    {
      id: "analytics",
      title: "6. Analytics cookies (Google Analytics 4)",
      paragraphs: [
        "With your consent for the “Analytics” category, we may use Google Analytics 4 (GA4), managed via Google Tag Manager (GTM-5QFHBCH), to understand traffic and interactions on the site (pages visited, visit duration, technical events).",
        "Identifiers: Google Tag Manager GTM-5QFHBCH; Google Analytics 4 (Measurement ID configured in GTM). Provider: Google Ireland Limited / Google LLC. Data processed may include: pseudonymised IP, device/browser identifiers, pages and events. GA4 cookie duration: `_ga` — 2 years; `_ga_*` — 2 years (GA4 session state).",
        "We use Consent Mode v2: Google tags do not store analytics cookies until you accept the analytics category. Default settings (before consent): `analytics_storage: denied`, `ad_storage: denied`, `ad_user_data: denied`, `ad_personalization: denied`, `security_storage: granted`. On analytics acceptance: `analytics_storage: granted`. On marketing acceptance: `ad_storage`, `ad_user_data`, `ad_personalization: granted`.",
        "See Google’s policy: https://policies.google.com/privacy. Transfers to the USA: Standard Contractual Clauses (SCCs) and, where applicable, the EU-US Data Privacy Framework.",
      ],
    },
    {
      id: "marketing",
      title: "7. Marketing cookies",
      paragraphs: [
        "With your consent for the “Marketing” category, we may load conversion measurement and remarketing technologies:",
        "Google Ads / GTM (GTM-5QFHBCH) — conversions from forms, calls, WhatsApp clicks, and maps; cookies `_gcl_au`, `_gcl_aw`, and similar; duration: up to 90 days. Enhanced conversions may be enabled in GTM, transmitting hashed data only with consent.",
        "Meta Pixel (Facebook/Instagram) — visit and conversion events; pixel ID configured in the site environment variables; provider Meta Platforms Ireland Ltd. Cookie `_fbp` — duration: up to 90 days.",
        "TikTok Pixel — visit and conversion events; pixel ID configured in the site environment variables; provider TikTok Technology Limited. Cookies `_ttp`, `tt_*` — duration: up to 13 months.",
        "First-party attribution cookie `implantik_attribution` — stores gclid, gbraid, wbraid, fbclid, ttclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content parameters; duration: 90 days; set exclusively after marketing consent when parameters are detected in the URL; used to transmit attribution data with form leads.",
        "Without marketing consent, these technologies remain blocked or operate in limited mode under Consent Mode, without storing marketing cookies.",
      ],
    },
    {
      id: "consent",
      title: "8. Consent mechanism",
      paragraphs: [
        "On your first visit (or after your choices expire/are deleted), a cookie banner is displayed with equally prominent options to “Accept all”, “Reject all” (or equivalent), and “Customise”.",
        "You may accept or refuse analytics and marketing categories separately. The strictly necessary category always remains active.",
        "Your choice is saved in the first-party `consent-preferences` cookie as a JSON object including: `decided` (boolean), `categories` (necessary: true, analytics: boolean, marketing: boolean), `timestamp` (ISO 8601), `policyVersion` (policy version at the time of choice, tied to the POLICY_VERSION constant).",
        "Tracking tags (GTM GTM-5QFHBCH, GA4, Meta, TikTok) are loaded or activated only after consent is given for the relevant category. Google Consent Mode v2 is updated via `gtag('consent', 'update', ...)` before any analytics or advertising storage.",
        "Proof of consent: preferences are stored exclusively in the client cookie `consent-preferences` and in the `policy_version` field submitted with contact forms. We do not maintain a separate server-side consent log for cookies.",
      ],
    },
    {
      id: "withdrawal",
      title: "9. Withdrawing and changing consent",
      paragraphs: [
        "You may withdraw or change consent at any time without affecting the lawfulness of processing carried out before withdrawal.",
        "Methods: (1) the “Cookie settings” link in the site footer; (2) deleting cookies in your browser, which will show the banner again on your next visit; (3) request to implantikdrchirap@gmail.com.",
        "When marketing consent is withdrawn, the site calls `clearAttributionCookie()`, deletes the `implantik_attribution` cookie, removes Meta Pixel and TikTok Pixel scripts from the page, and updates Consent Mode v2 to `ad_storage: denied`, `ad_user_data: denied`, `ad_personalization: denied`. When analytics consent is withdrawn, `analytics_storage` is set to `denied` and GTM scripts may be removed if marketing is also inactive.",
        "For third-party cookies already placed, you may also need to delete them manually in browser settings or use provider tools (Google, Meta, TikTok).",
      ],
    },
    {
      id: "browser",
      title: "10. Browser settings",
      paragraphs: [
        "Most browsers allow cookie management in privacy settings. You can block third-party cookies, delete existing cookies, or configure notifications when cookies are placed.",
        "Useful guides: Chrome — Settings > Privacy and security > Cookies; Firefox — Settings > Privacy & Security; Safari — Preferences > Privacy; Edge — Settings > Cookies and site permissions.",
        "Blocking all cookies may prevent saving consent preferences and form operation (including Turnstile). The site remains viewable, but the cookie banner will appear on each visit, and forms may be rejected if anti-spam verification fails.",
        "For personalised advertising, providers offer opt-out pages: Google — https://adssettings.google.com; Meta — https://www.facebook.com/settings/ads/; TikTok — https://www.tiktok.com/setting/advertising.",
      ],
    },
    {
      id: "consent-cookie",
      title: "11. consent-preferences cookie details",
      paragraphs: [
        "Name: `consent-preferences`. Type: first-party HTTP cookie (serialised JSON, URL-encoded). Purpose: remembering your decision on cookie categories and the accepted policy version.",
        "Maximum duration: 365 days (12 months) from last save. Attributes: `Path=/`, `SameSite=Lax`, `Secure` on HTTPS connections.",
        "Example content: {\"decided\":true,\"categories\":{\"necessary\":true,\"analytics\":false,\"marketing\":false},\"timestamp\":\"...\",\"policyVersion\":\"2026-06-09\"}. Actual values reflect your choices.",
        "On major policy updates, the POLICY_VERSION constant is incremented; if the cookie’s `policyVersion` differs from the current version, the consent banner is shown again and a new choice is requested, without automatically carrying over prior consent.",
      ],
    },
    {
      id: "changes",
      title: "12. Policy changes",
      paragraphs: [
        "We may update this policy to reflect technological changes, new providers, or legal requirements. The current version is published on implantik.ro with the update date.",
        "We recommend checking this page periodically. For significant changes regarding marketing or analytics cookies, we will update the consent banner, increment POLICY_VERSION, and request a new choice.",
      ],
    },
    {
      id: "contact",
      title: "13. Contact",
      paragraphs: [
        "Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; phone (0758) 169 234; website implantik.ro. Hours: Monday–Friday, 8:00–19:30.",
        "To exercise GDPR rights related to data collected via cookies, also see the Privacy Policy section on data subject rights.",
      ],
    },
  ],
};
