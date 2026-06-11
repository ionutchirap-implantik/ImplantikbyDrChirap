import type { WhatsAppContext } from "@/lib/social/whatsapp";

export type ServicePageSlug =
  | "implantologie"
  | "implant-all-on-4-iasi"
  | "chirurgie-orala"
  | "reabilitari-complexe"
  | "protetica-dentara"
  | "ortodontie"
  | "stomatologie"
  | "estetica-dentara"
  | "estetica-faciala"
  | "stomatologie-fara-bariere";

export type ServiceSection = {
  title: string;
  body?: string;
  items?: string[];
  ordered?: boolean;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceInternalLink = {
  label: string;
  href: string;
};

export type ServicePageContent = {
  slug: ServicePageSlug;
  path: string;
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faq: ServiceFaqItem[];
  internalLinks: ServiceInternalLink[];
  cta: { title: string; text?: string };
  whatsappContext: WhatsAppContext;
  heroVariant?: "default" | "accent";
  heroImage?: string;
  heroImageAlt?: string;
  heroImageAspect?: "square" | "video" | "wide" | "portrait";
  trackName: string;
};
