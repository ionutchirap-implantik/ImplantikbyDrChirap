import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  ogImagePath?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  locale,
  ogImagePath,
}: PageMeta): Metadata {
  const url = `${SITE.url}/${locale}${path === "/" ? "" : path}`;
  const ogImage = ogImagePath
    ? `${SITE.url}${ogImagePath}`
    : `${SITE.url}/opengraph-image`;

  const alternateLocale = locale === "ro" ? "en_US" : "ro_RO";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE.url}/${l}${path === "/" ? "" : path}`])
      ),
    },
    openGraph: {
      title,
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
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
