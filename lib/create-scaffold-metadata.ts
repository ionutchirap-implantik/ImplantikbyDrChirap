import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n/config";

export function createScaffoldMetadata(
  locale: Locale,
  slug: string,
  titleRo: string,
  titleEn: string,
  descRo?: string,
  descEn?: string
): Metadata {
  const title = locale === "ro" ? titleRo : titleEn;
  const description =
    (locale === "ro" ? descRo : descEn) ||
    (locale === "ro"
      ? `${title} — clinică stomatologică Iași.`
      : `${title} — dental clinic in Iași.`);

  return buildMetadata({ title: `${title} — Iași`, description, path: `/${slug}`, locale });
}
