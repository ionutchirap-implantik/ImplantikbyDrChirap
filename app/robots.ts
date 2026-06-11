import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const isProduction =
  process.env.VERCEL_ENV === "production" ||
  (process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV);

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
