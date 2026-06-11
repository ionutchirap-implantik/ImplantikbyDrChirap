/** Canonical production domain (after DNS cut-over). */
export const CANONICAL_SITE_URL = "https://implantik.ro";

/**
 * Absolute site origin for metadata, OG images, sitemap, and JSON-LD.
 * Resolves to the live deployment host on Vercel until implantik.ro points here.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim().replace(/\/$/, "");
  if (production) return `https://${production}`;

  const vercel = process.env.VERCEL_URL?.trim().replace(/\/$/, "");
  if (vercel) return `https://${vercel}`;

  return CANONICAL_SITE_URL;
}
