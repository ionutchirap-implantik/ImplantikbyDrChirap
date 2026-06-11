import type { Locale } from "@/lib/i18n/config";

export type PricingItem = {
  name: string;
  from: string;
};

export type PricingCategory = {
  name: string;
  items: PricingItem[];
};

export type PricingContent = {
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  disclaimer: string;
  priceColumn: string;
  categories: PricingCategory[];
  footerNote: string;
  ctaLabel: string;
};

const pricingRo: PricingContent = {
  meta: {
    title: "Prețuri stomatologie Iași — Implantik",
    description:
      "Prețuri orientative pentru implant dentar, chirurgie orală, ortodonție și stomatologie în Iași. Valori „de la”, plan scris la consultație. Programează o evaluare.",
  },
  h1: "Prețuri stomatologie în Iași",
  intro:
    "Prețul implantului dentar și al celorlalte tratamente depinde de situația clinică, de materialele alese și de etapele necesare. Mai jos găsești valori orientative „de la” — costul exact îl primești în planul de tratament scris, la consultație.",
  disclaimer:
    "Toate sumele sunt orientative și pot varia în funcție de investigații, complexitate și opțiuni protetice. Nu includ reduceri sau campanii promoționale.",
  priceColumn: "De la",
  categories: [
    {
      name: "Implantologie",
      items: [
        { name: "Consultație implantologie + plan de tratament", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Implant dentar (unitar, cu coroană)", from: "[PREȚ — DE COMPLETAT]" },
        { name: "All-on-4 / All-on-6 (arcadă)", from: "[PREȚ — DE COMPLETAT]" },
      ],
    },
    {
      name: "Chirurgie orală și maxilo-facială",
      items: [
        { name: "Sinus lift", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Adiție osoasă", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Extracție molar de minte", from: "[PREȚ — DE COMPLETAT]" },
      ],
    },
    {
      name: "Protetică dentară",
      items: [
        { name: "Coroană ceramică / zirconiu", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Punte dentară", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Proteză pe implanturi", from: "[PREȚ — DE COMPLETAT]" },
      ],
    },
    {
      name: "Ortodonție",
      items: [
        { name: "Consultație ortodontică", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Aparat dentar fix", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Gutiere Spark (aligneri)", from: "[PREȚ — DE COMPLETAT]" },
      ],
    },
    {
      name: "Stomatologie generală",
      items: [
        { name: "Consultație stomatologică", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Detartraj și igienizare", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Tratament carie", from: "[PREȚ — DE COMPLETAT]" },
      ],
    },
    {
      name: "Estetică dentară și facială",
      items: [
        { name: "Fațete dentare", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Albire profesională", from: "[PREȚ — DE COMPLETAT]" },
        { name: "Estetică facială (consultație)", from: "[PREȚ — DE COMPLETAT]" },
      ],
    },
  ],
  footerNote:
    "La Implantik nu publicăm oferte, reduceri sau promoții sezoniere. Primești un plan clar, cu etape și costuri, înainte de a decide.",
  ctaLabel: "Programează o consultație",
};

const pricingEn: PricingContent = {
  meta: {
    title: "Dental prices Iași — Implantik",
    description:
      "Guide prices for dental implants, oral surgery, orthodontics, and dentistry in Iași, Romania. “From” values; written plan at consultation. Book an evaluation.",
  },
  h1: "Dental prices in Iași",
  intro:
    "The cost of dental implants and other treatments depends on your clinical situation, materials chosen, and required steps. Below are indicative “from” prices — the exact cost is provided in your written treatment plan at consultation.",
  disclaimer:
    "All amounts are indicative and may vary with investigations, complexity, and prosthetic options. They do not include discounts or promotional campaigns.",
  priceColumn: "From",
  categories: [
    {
      name: "Implantology",
      items: [
        { name: "Implantology consultation + treatment plan", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Single dental implant (with crown)", from: "[PRICE — TO BE COMPLETED]" },
        { name: "All-on-4 / All-on-6 (full arch)", from: "[PRICE — TO BE COMPLETED]" },
      ],
    },
    {
      name: "Oral and maxillofacial surgery",
      items: [
        { name: "Sinus lift", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Bone grafting", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Wisdom tooth extraction", from: "[PRICE — TO BE COMPLETED]" },
      ],
    },
    {
      name: "Dental prosthetics",
      items: [
        { name: "Ceramic / zirconia crown", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Dental bridge", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Implant-supported denture", from: "[PRICE — TO BE COMPLETED]" },
      ],
    },
    {
      name: "Orthodontics",
      items: [
        { name: "Orthodontic consultation", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Fixed braces", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Spark clear aligners", from: "[PRICE — TO BE COMPLETED]" },
      ],
    },
    {
      name: "General dentistry",
      items: [
        { name: "Dental consultation", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Scaling and hygiene", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Filling", from: "[PRICE — TO BE COMPLETED]" },
      ],
    },
    {
      name: "Dental and facial aesthetics",
      items: [
        { name: "Dental veneers", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Professional whitening", from: "[PRICE — TO BE COMPLETED]" },
        { name: "Facial aesthetics (consultation)", from: "[PRICE — TO BE COMPLETED]" },
      ],
    },
  ],
  footerNote:
    "At Implantik we do not publish offers, discounts, or seasonal promotions. You receive a clear plan with steps and costs before you decide.",
  ctaLabel: "Book a consultation",
};

export function getPricingContent(locale: Locale): PricingContent {
  return locale === "ro" ? pricingRo : pricingEn;
}
