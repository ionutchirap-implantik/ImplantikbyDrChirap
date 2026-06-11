#!/usr/bin/env node
/**
 * Post-cut-over redirect smoke test.
 * Usage: node scripts/test-redirects.mjs https://implantik.ro
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const wildcardSamples = [
  { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml" },
  { source: "/feed/rss", destination: "/ro" },
  { source: "/category/implantologie", destination: "/ro/ghiduri" },
  { source: "/tag/iasi", destination: "/ro/ghiduri" },
  { source: "/author/admin", destination: "/ro/echipa" },
  { source: "/blog/implant-dentar", destination: "/ro/ghiduri" },
  { source: "/index.php", destination: "/ro" },
  { source: "/index.php/about", destination: "/ro" },
];

const baseUrl = process.argv[2]?.replace(/\/$/, "");
if (!baseUrl) {
  console.error("Usage: node scripts/test-redirects.mjs <base-url>");
  console.error("Example: node scripts/test-redirects.mjs https://implantik.ro");
  process.exit(1);
}

const jsonPath = join(__dirname, "../lib/redirects/wordpress-redirects.json");
const exactPairs = JSON.parse(readFileSync(jsonPath, "utf8"));

const testCases = [
  ...exactPairs.flatMap(({ source, destination }) => [
    { source, destination },
    { source: `${source}/`, destination },
  ]),
  ...wildcardSamples,
];

function resolveLocation(location, origin) {
  if (!location) return null;
  try {
    return new URL(location, origin);
  } catch {
    return null;
  }
}

function locationPath(url) {
  return `${url.pathname}${url.search}`;
}

async function checkRedirect({ source, destination }) {
  const url = `${baseUrl}${source}`;

  try {
    const response = await fetch(url, { redirect: "manual" });
    const status = response.status;
    const locationHeader = response.headers.get("location");
    const location = resolveLocation(locationHeader, baseUrl);
    const expectedPath = destination;
    const actualPath = location ? locationPath(location) : null;

    const statusOk = status === 301 || status === 308;
    const locationOk = actualPath === expectedPath;

    let destinationStatus = null;
    let destinationOk = false;

    if (locationOk && location) {
      const finalResponse = await fetch(location.toString(), { redirect: "follow" });
      destinationStatus = finalResponse.status;
      destinationOk = finalResponse.status >= 200 && finalResponse.status < 400;
    }

    const ok = statusOk && locationOk && destinationOk;

    return {
      source,
      status,
      destination: actualPath ?? "(missing)",
      expected: expectedPath,
      destinationStatus,
      ok,
    };
  } catch (error) {
    return {
      source,
      status: "ERR",
      destination: error instanceof Error ? error.message : String(error),
      expected: destination,
      destinationStatus: null,
      ok: false,
    };
  }
}

console.log(`Testing ${testCases.length} redirects against ${baseUrl}\n`);

const results = [];
for (const testCase of testCases) {
  results.push(await checkRedirect(testCase));
}

const col = (value, width) => String(value).padEnd(width);
const header = `${col("SOURCE", 42)} ${col("STATUS", 8)} ${col("LOCATION", 28)} ${col("DEST", 6)} ${col("OK", 6)}`;
console.log(header);
console.log("-".repeat(header.length));

let passed = 0;
for (const row of results) {
  if (row.ok) passed += 1;
  console.log(
    `${col(row.source, 42)} ${col(row.status, 8)} ${col(row.destination, 28)} ${col(row.destinationStatus ?? "-", 6)} ${col(row.ok ? "OK" : "FAIL", 6)}`
  );
}

console.log(`\n${passed}/${results.length} passed`);

if (passed !== results.length) {
  const failed = results.filter((row) => !row.ok);
  console.error("\nFailed redirects:");
  for (const row of failed) {
    console.error(`  ${row.source} → expected ${row.expected}, got ${row.destination} (${row.status})`);
  }
  process.exit(1);
}
