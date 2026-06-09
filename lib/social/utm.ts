import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";

type UtmParams = {
  source: string;
  medium?: string;
  campaign: string;
  content?: string;
};

export function buildUtmUrl(
  path: string,
  locale: Locale,
  { source, medium = "social", campaign, content }: UtmParams
): string {
  const base = `${SITE.url}/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
  });
  if (content) params.set("utm_content", content);
  return `${base}?${params.toString()}`;
}

export const SOCIAL_HANDLE = SITE.social.handle;

export const SOCIAL_URLS = {
  facebook: SITE.social.facebook,
  instagram: SITE.social.instagram,
  tiktok: SITE.social.tiktok,
} as const;
