import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
};

export function buildMetadata({ title, description, path, locale }: PageMeta): Metadata {
  const url = `${SITE.url}/${locale}${path === "/" ? "" : path}`;

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
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
