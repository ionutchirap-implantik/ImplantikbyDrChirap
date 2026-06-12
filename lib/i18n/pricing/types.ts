export type PricingItem = {
  name: string;
  price: string;
};

export type PricingCategory = {
  id: string;
  name: string;
  serviceHref?: string;
  items: PricingItem[];
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
