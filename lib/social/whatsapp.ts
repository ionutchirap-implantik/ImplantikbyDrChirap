import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";

export type WhatsAppContext =
  | "default"
  | "home"
  | "implantologie"
  | "genZ"
  | "contact"
  | "programare"
  | "stomatologie"
  | "social";

const messages: Record<WhatsAppContext, Record<Locale, string>> = {
  default: {
    ro: "Bună ziua, aș dori o programare la Implantik by Dr. Chirap.",
    en: "Hello, I would like to book an appointment at Implantik by Dr. Chirap.",
  },
  home: {
    ro: "Bună ziua, am vizitat site-ul Implantik și aș dori o consultație.",
    en: "Hello, I visited the Implantik website and would like a consultation.",
  },
  implantologie: {
    ro: "Bună ziua, aș dori o consultație pentru implant dentar.",
    en: "Hello, I would like a consultation for dental implants.",
  },
  genZ: {
    ro: "Bună ziua, aș dori să aflu mai multe despre stomatologie fără bariere.",
    en: "Hello, I would like to learn more about dentistry without barriers.",
  },
  contact: {
    ro: "Bună ziua, am o întrebare pentru echipa Implantik.",
    en: "Hello, I have a question for the Implantik team.",
  },
  programare: {
    ro: "Bună ziua, aș dori să programez o consultație.",
    en: "Hello, I would like to schedule a consultation.",
  },
  stomatologie: {
    ro: "Bună ziua, aș dori o consultație de stomatologie generală.",
    en: "Hello, I would like a general dentistry consultation.",
  },
  social: {
    ro: "Bună ziua, am ajuns de pe rețelele sociale și aș dori o programare.",
    en: "Hello, I came from social media and would like to book an appointment.",
  },
};

export function getWhatsAppMessage(context: WhatsAppContext, locale: Locale): string {
  return messages[context]?.[locale] ?? messages.default[locale];
}

export function buildWhatsAppUrl(context: WhatsAppContext, locale: Locale): string {
  const text = encodeURIComponent(getWhatsAppMessage(context, locale));
  return `${SITE.whatsappHref}?text=${text}`;
}
