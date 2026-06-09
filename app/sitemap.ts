import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { locales } from "@/lib/i18n/config";

const paths = [
  "",
  "/implantologie",
  "/implant-all-on-4-iasi",
  "/sinus-lift-iasi",
  "/reabilitari-complexe",
  "/chirurgie-orala",
  "/estetica-faciala",
  "/estetica-dentara",
  "/ortodontie",
  "/stomatologie",
  "/turism-dentar",
  "/preturi",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: `${SITE.url}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.includes("implantologie") || path.includes("contact") ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE.url}/${l}${path}`])
          ),
        },
      });
    }
  }

  return entries;
}
