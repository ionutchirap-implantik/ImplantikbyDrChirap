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
        "By “cookies” we also mean equivalent technologies such as local storage (localStorage), tracking pixels, or similar identifiers loaded in the browser after consent. [DE COMPLETAT - if localStorage or other non-cookie technologies are used, list them].",
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
        "Data Protection Officer / GDPR contact: [DE COMPLETAT - DPO or designated contact details].",
      ],
    },
    {
      id: "categories",
      title: "4. Cookie categories used",
      paragraphs: [
        "We classify cookies into three main categories, aligned with the site’s consent banner:",
        "Strictly necessary — essential for site operation and security; do not require consent under applicable law.",
        "Analytics — help us understand how the site is used (e.g. Google Analytics 4), based on aggregated or pseudonymised data; activated only after consent.",
        "Marketing — used for conversion measurement, remarketing, and campaign attribution (Google Ads, Meta Pixel, TikTok Pixel); activated only after consent.",
        "Detailed descriptions follow. Full table with names, providers, purposes, and durations: [DE COMPLETAT - updated cookie table including duration of each first-party and third-party cookie].",
      ],
    },
    {
      id: "necessary",
      title: "5. Strictly necessary cookies",
      paragraphs: [
        "These cookies are essential for: correct page display; remembering language preferences; form security and anti-spam protection; saving your cookie consent choices.",
        "Known first-party cookies: `consent-preferences` — stores accepted/refused cookie categories, timestamp, and policy version; duration: up to 12 months; basis: Art. 6(1)(f) GDPR (legitimate interest) and/or Art. 6(1)(c) where consent storage is required by law.",
        "Other strictly necessary cookies: [DE COMPLETAT - e.g. language cookie, Next.js session, Turnstile, first-party attribution for forms if considered necessary without marketing consent].",
        "You cannot disable these cookies from our banner without affecting site operation, as they are necessary for the service you explicitly request.",
      ],
    },
    {
      id: "analytics",
      title: "6. Analytics cookies (Google Analytics 4)",
      paragraphs: [
        "With your consent for the “Analytics” category, we may use Google Analytics 4 (GA4), managed via Google Tag Manager (GTM), to understand traffic and interactions on the site (pages visited, visit duration, technical events).",
        "Identifiers: [DE COMPLETAT - GA4 Measurement ID, GTM Container ID]. Provider: Google Ireland Limited / Google LLC. Data processed may include: pseudonymised IP, device/browser identifiers, pages and events. GA4 cookie duration: [DE COMPLETAT - e.g. _ga, _ga_*, duration].",
        "We use Consent Mode v2: Google tags do not store analytics cookies until you accept the analytics category. [DE COMPLETAT - exact Consent Mode settings: ad_storage, analytics_storage, ad_user_data, ad_personalization].",
        "See Google’s policy: https://policies.google.com/privacy. Transfers to the USA: [DE COMPLETAT - SCC / EU-US Data Privacy Framework if applicable].",
      ],
    },
    {
      id: "marketing",
      title: "7. Marketing cookies",
      paragraphs: [
        "With your consent for the “Marketing” category, we may load conversion measurement and remarketing technologies:",
        "Google Ads / GTM — conversions from forms, calls, WhatsApp clicks; identifiers: [DE COMPLETAT - Google Ads conversion IDs, enhanced conversions if enabled].",
        "Meta Pixel (Facebook/Instagram) — visit and conversion events; pixel ID: [DE COMPLETAT - META_PIXEL_ID]; provider Meta Platforms Ireland Ltd. Cookie duration: [DE COMPLETAT].",
        "TikTok Pixel — visit and conversion events; pixel ID: [DE COMPLETAT - TIKTOK_PIXEL_ID]; provider TikTok Technology Limited. Cookie duration: [DE COMPLETAT].",
        "First-party attribution cookie (gclid, fbclid, ttclid, utm_*): [DE COMPLETAT - attribution cookie name, duration, whether set before or after marketing consent].",
        "Without marketing consent, these technologies remain blocked or operate in limited mode under Consent Mode, without storing marketing cookies.",
      ],
    },
    {
      id: "consent",
      title: "8. Consent mechanism",
      paragraphs: [
        "On your first visit (or after your choices expire/are deleted), a cookie banner is displayed with equally prominent options to “Accept all”, “Reject all” (or equivalent), and “Customise”.",
        "You may accept or refuse analytics and marketing categories separately. The strictly necessary category always remains active.",
        "Your choice is saved in the first-party `consent-preferences` cookie as a JSON object including: `decided` (boolean), `categories` (necessary: true, analytics: boolean, marketing: boolean), `timestamp` (ISO 8601), `policyVersion` (policy version at the time of choice, currently tied to the policy update date).",
        "Tracking tags (GTM, GA4, Meta, TikTok) are loaded or activated only after consent is given for the relevant category. Google Consent Mode is updated before any analytics or advertising storage.",
        "Proof of consent: [DE COMPLETAT - whether server-side consent log is kept or client cookie only].",
      ],
    },
    {
      id: "withdrawal",
      title: "9. Withdrawing and changing consent",
      paragraphs: [
        "You may withdraw or change consent at any time without affecting the lawfulness of processing carried out before withdrawal.",
        "Methods: (1) the “Cookie settings” link in the site footer; (2) deleting cookies in your browser, which will show the banner again on your next visit; (3) request to implantikdrchirap@gmail.com.",
        "When marketing consent is withdrawn, we stop loading marketing pixels and delete first-party attribution cookies where implemented. [DE COMPLETAT - exact behaviour on revocation, including clearAttributionCookie].",
        "For third-party cookies already placed, you may also need to delete them manually in browser settings or use provider tools (Google, Meta, TikTok).",
      ],
    },
    {
      id: "browser",
      title: "10. Browser settings",
      paragraphs: [
        "Most browsers allow cookie management in privacy settings. You can block third-party cookies, delete existing cookies, or configure notifications when cookies are placed.",
        "Useful guides: Chrome — Settings > Privacy and security > Cookies; Firefox — Settings > Privacy & Security; Safari — Preferences > Privacy; Edge — Settings > Cookies and site permissions.",
        "Blocking all cookies may prevent saving consent preferences and optimal site operation. [DE COMPLETAT - site behaviour when cookies are fully disabled].",
        "For personalised advertising, providers also offer opt-out pages: Google Ads Settings, Meta Ad Preferences, TikTok Ad Settings — [DE COMPLETAT - final standardised links].",
      ],
    },
    {
      id: "consent-cookie",
      title: "11. consent-preferences cookie details",
      paragraphs: [
        "Name: `consent-preferences`. Type: first-party HTTP cookie (serialised JSON, URL-encoded). Purpose: remembering your decision on cookie categories and the accepted policy version.",
        "Maximum duration: 365 days (12 months) from last save. Attributes: `Path=/`, `SameSite=Lax`, `Secure` on HTTPS connections.",
        "Example content: {\"decided\":true,\"categories\":{\"necessary\":true,\"analytics\":false,\"marketing\":false},\"timestamp\":\"...\",\"policyVersion\":\"2026-06-09\"}. Actual values reflect your choices.",
        "On major policy updates, `policyVersion` may be incremented and consent may be re-requested: [DE COMPLETAT - re-consent policy when POLICY_VERSION changes].",
      ],
    },
    {
      id: "changes",
      title: "12. Policy changes",
      paragraphs: [
        "We may update this policy to reflect technological changes, new providers, or legal requirements. The current version is published on implantik.ro with the update date.",
        "We recommend checking this page periodically. For significant changes regarding marketing or analytics cookies, we will update the consent banner or request a new choice where appropriate. [DE COMPLETAT - internal procedure].",
      ],
    },
    {
      id: "contact",
      title: "13. Contact",
      paragraphs: [
        "Implantik Chirap SRL, Strada Milcov nr. 2, bl. 1206, sc. D, Iași 700581; e-mail implantikdrchirap@gmail.com; phone (0758) 169 234; website implantik.ro.",
        "To exercise GDPR rights related to data collected via cookies, also see the Privacy Policy section on data subject rights.",
      ],
    },
  ],
};
