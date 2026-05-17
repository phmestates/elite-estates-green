/**
 * scripts/generate-sitemap.mjs
 *
 * Generates /public/sitemap.xml at build time by fetching live property IDs
 * from Sanity so every listing gets its own <url> entry.
 *
 * Run via: node scripts/generate-sitemap.mjs
 * Or add to package.json "build" script:  "npm run sitemap && vite build"
 */

import { createClient } from "@sanity/client";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://www.phmestates.com";
const TODAY = new Date().toISOString().split("T")[0];

// ─── Sanity client ────────────────────────────────────────────────────────────
const client = createClient({
  projectId: "tbv1669u",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── Static pages ─────────────────────────────────────────────────────────────
const staticRoutes = [
  { loc: "/",           priority: "1.0", changefreq: "weekly"  },
  { loc: "/buying",     priority: "0.9", changefreq: "daily"   },
  { loc: "/renting",    priority: "0.9", changefreq: "daily"   },
  { loc: "/selling",    priority: "0.8", changefreq: "weekly"  },
  { loc: "/finance",    priority: "0.7", changefreq: "monthly" },
  { loc: "/about",      priority: "0.6", changefreq: "monthly" },
  { loc: "/contact",    priority: "0.6", changefreq: "monthly" },
  { loc: "/reviews",    priority: "0.6", changefreq: "monthly" },
  { loc: "/blog",       priority: "0.7", changefreq: "weekly"  },
  { loc: "/property",   priority: "0.8", changefreq: "daily"   },
];

// ─── Build sitemap ─────────────────────────────────────────────────────────────
async function generate() {
  console.log("🗺  Fetching property IDs from Sanity...");
  const ids = await client.fetch(`*[_type == "property"]{ "id": _id, _updatedAt }`);
  console.log(`   Found ${ids.length} properties.`);

  const urlEntries = [
    // Static pages
    ...staticRoutes.map(
      ({ loc, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    ),
    // Dynamic property pages
    ...ids.map(
      ({ id, _updatedAt }) => `
  <url>
    <loc>${BASE_URL}/property/${id}</loc>
    <lastmod>${_updatedAt ? _updatedAt.split("T")[0] : TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
${urlEntries.join("\n")}
</urlset>`;

  const outPath = resolve(__dirname, "../public/sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  console.log(`✅  sitemap.xml written to ${outPath}`);
  console.log(`   ${staticRoutes.length} static + ${ids.length} property pages`);
}

generate().catch((err) => {
  console.error("❌  Sitemap generation failed:", err);
  process.exit(1);
});
