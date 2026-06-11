import wordpressRedirects from "./wordpress-redirects.json";

type MigrationRedirect = {
  source: string;
  destination: string;
  permanent: true;
  has?: { type: "query"; key: string }[];
};

type RedirectPair = {
  source: string;
  destination: string;
};

/** Exact path pairs from the WordPress → Next.js migration map (canonical list for tests). */
export const WORDPRESS_REDIRECT_PAIRS: RedirectPair[] = wordpressRedirects as RedirectPair[];

/** Sample URLs for wildcard redirect rules (used by the post-cut-over test script). */
export const WORDPRESS_REDIRECT_WILDCARD_SAMPLES: RedirectPair[] = [
  { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml" },
  { source: "/feed/rss", destination: "/ro" },
  { source: "/category/implantologie", destination: "/ro/ghiduri" },
  { source: "/tag/iasi", destination: "/ro/ghiduri" },
  { source: "/author/admin", destination: "/ro/echipa" },
  { source: "/blog/implant-dentar", destination: "/ro/ghiduri" },
  { source: "/index.php", destination: "/ro" },
  { source: "/index.php/about", destination: "/ro" },
];

const WILDCARD_REDIRECTS: RedirectPair[] = [
  { source: "/wp-sitemap-:file", destination: "/sitemap.xml" },
  { source: "/feed/:rest*", destination: "/ro" },
  { source: "/category/:slug*", destination: "/ro/ghiduri" },
  { source: "/tag/:slug*", destination: "/ro/ghiduri" },
  { source: "/author/:slug*", destination: "/ro/echipa" },
  { source: "/blog/:slug*", destination: "/ro/ghiduri" },
  { source: "/index.php", destination: "/ro" },
  { source: "/index.php/:path*", destination: "/ro" },
];

function hasDynamicSegment(source: string): boolean {
  return source.includes(":") || source.includes("*");
}

/**
 * Builds Next.js redirect rules with trailing-slash variants for static paths
 * so old WordPress URLs resolve in a single 301 hop.
 */
export function buildWordPressRedirects(): MigrationRedirect[] {
  const rules: MigrationRedirect[] = [];

  for (const { source, destination } of WORDPRESS_REDIRECT_PAIRS) {
    rules.push({ source, destination, permanent: true });
    if (!hasDynamicSegment(source) && !source.endsWith("/")) {
      rules.push({ source: `${source}/`, destination, permanent: true });
    }
  }

  for (const { source, destination } of WILDCARD_REDIRECTS) {
    rules.push({ source, destination, permanent: true });
  }

  rules.push(
    {
      source: "/",
      has: [{ type: "query", key: "p" }],
      destination: "/ro",
      permanent: true,
    },
    {
      source: "/",
      has: [{ type: "query", key: "page_id" }],
      destination: "/ro",
      permanent: true,
    }
  );

  return rules;
}
