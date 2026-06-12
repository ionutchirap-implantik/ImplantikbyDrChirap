export type PricingItem = {
  name: string;
  price: string;
  priceSecondary?: string;
};

export type PricingSubsection = {
  title: string;
  intro?: string;
  items: PricingItem[];
  dualArchPricing?: {
    tierLabel: string;
    singleArchLabel: string;
    bothArchesLabel: string;
  };
};

export type PricingCategory = {
  id: string;
  name: string;
  serviceHref?: string;
  items?: PricingItem[];
  subsections?: PricingSubsection[];
  sectionNote?: string;
};

export type PricingContent = {
  meta: { title: string; description: string };
  h1: string;
  legalNote: string;
  tocTitle: string;
  serviceColumn: string;
  priceColumn: string;
  categories: PricingCategory[];
  ctaLabel: string;
};
