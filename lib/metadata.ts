import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  ogImagePath?: string;
};

/** Strip embedded brand suffix; root layout `title.template` appends SITE.name once. */
export function normalizePageTitle(title: string): string {
  return title
    .replace(/\s*\|\s*Implantik(?:\s+by\s+Dr\.?\s*Chirap)?\s*$/i, "")
    .trim();
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
  ogImagePath,
}: PageMeta): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/${locale}${path === "/" ? "" : path}`;
  const ogImage = ogImagePath ? `${siteUrl}${ogImagePath}` : `${siteUrl}/opengraph-image`;
  const pageTitle = normalizePageTitle(title);

  const alternateLocale = locale === "ro" ? "en_US" : "ro_RO";

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteUrl}/${l}${path === "/" ? "" : path}`])
      ),
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE.name,
      locale: locale === "ro" ? "ro_RO" : "en_US",
      alternateLocale: [alternateLocale],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}
