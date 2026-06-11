import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";
import { GOOGLE_REVIEWS, GOOGLE_RATING_VALUE } from "@/lib/google-reviews";
import { plainTextForSchema } from "@/lib/schema-plain-text";
import type { Locale } from "@/lib/i18n/config";

export function medicalClinicJsonLd(locale: Locale) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE.name,
    url: `${siteUrl}/${locale}`,
    telephone: "+40758169234",
    email: SITE.email,
    priceRange: SITE.priceRange,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_RATING_VALUE,
      bestRating: 5,
      worstRating: 1,
      reviewCount: GOOGLE_REVIEWS.length,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.addressLocality,
      postalCode: SITE.postalCode,
      addressCountry: SITE.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHours: SITE.openingHours,
    image: `${siteUrl}/opengraph-image`,
    sameAs: [
      SITE.mapsUrl,
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.tiktok,
    ].filter((u) => !u.startsWith("[")),
  };
}

export function physicianJsonLd(locale: Locale = "ro") {
  const siteUrl = getSiteUrl();
  const isRo = locale === "ro";
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Ionuț Chirap",
    jobTitle: isRo
      ? "Medic specialist chirurgie orală și maxilo-facială"
      : "Oral and maxillofacial surgeon",
    worksFor: { "@type": "Dentist", name: SITE.name },
    url: `${siteUrl}/${locale}/echipa/dr-ionut-chirap`,
    description: isRo
      ? "Medic specialist în chirurgie orală și maxilo-facială, cu peste 7.000 de implanturi inserate. Implant dentar în Iași, All-on-4, reabilitări complexe."
      : "Oral and maxillofacial surgeon with over 7,000 implants placed. Dental implants in Iași, Romania, All-on-4, complex rehabilitation.",
    medicalSpecialty: "Oral and Maxillofacial Surgery",
    image: `${siteUrl}${SITE.doctorPortraitPath}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.addressLocality,
      postalCode: SITE.postalCode,
      addressCountry: SITE.addressCountry,
    },
  };
}

export function reviewsJsonLd(
  reviews: { author: string; text: string; rating: number }[],
  itemReviewed: { name: string; url: string }
) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    itemReviewed: { "@type": "Dentist", name: itemReviewed.name, url: itemReviewed.url },
  }));
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: plainTextForSchema(item.answer),
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceJsonLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    provider: { "@type": "Dentist", name: SITE.name },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
