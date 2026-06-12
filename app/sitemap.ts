import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { locales, type Locale } from "@/lib/i18n/config";
import { pricingPath } from "@/lib/i18n/pricing/paths";

const paths = [
  "",
  "/implantologie",
  "/implant-all-on-4-iasi",
  "/reabilitari-complexe",
  "/chirurgie-orala",
  "/protetica-dentara",
  "/estetica-faciala",
  "/estetica-dentara",
  "/ortodontie",
  "/stomatologie",
  "/turism-dentar",
  "/echipa",
  "/echipa/dr-ionut-chirap",
  "/cazuri-clinice",
  "/stomatologie-fara-bariere",
  "/ghiduri",
  "/ghiduri/implant-dentar-ghid",
  "/ghiduri/prima-vizita",
  "/ghiduri/ingrijire-post-operator",
  "/contact",
  "/programare",
  "/social",
  "/confidentialitate",
  "/cookies",
  "/termeni",
];

function pathForLocale(locale: Locale, path: string): string {
  if (path === "/preturi") {
    return pricingPath(locale);
  }
  return path;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const siteUrl = getSiteUrl();
  const allPaths = [...paths, "/preturi"];

  for (const locale of locales) {
    for (const path of allPaths) {
      const localizedPath = pathForLocale(locale, path);
      entries.push({
        url: `${siteUrl}/${locale}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.includes("implantologie") || path.includes("contact") ? 0.9 : 0.7,
        alternates: {
          languages:
            path === "/preturi"
              ? { ro: `${siteUrl}/ro/preturi`, en: `${siteUrl}/en/prices` }
              : Object.fromEntries(
                  locales.map((l) => [l, `${siteUrl}/${l}${path === "/" ? "" : path}`])
                ),
        },
      });
    }
  }

  return entries;
}
