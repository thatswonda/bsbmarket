// Build-time pre-rendering: turns the SPA into real, crawlable HTML for every route
// (search engines and AI crawlers such as GPTBot and PerplexityBot do not run JavaScript),
// and generates sitemap.xml, llms.txt and 404.html.
//
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx` (server bundle).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, pages, notFoundMeta, renderHeadTags, SITE_URL, categories, allFaqs, guides, cities, cityPath, offerings, SITE_DEFINITION } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--seo-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--seo-head--> or <!--app-html--> placeholder");
}

const page = (meta, url) =>
  template.replace("<!--seo-head-->", renderHeadTags(meta)).replace("<!--app-html-->", render(url));

const outFile = (route) => (route === "/" ? "index.html" : `${route.slice(1)}.html`);

for (const meta of pages) {
  const file = path.join(dist, outFile(meta.path));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(meta, meta.path));
}
fs.writeFileSync(path.join(dist, "404.html"), page(notFoundMeta, "/404-not-found"));

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path === "/" ? "/" : p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${(p.priority ?? 0.5).toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

// robots.txt: point at the sitemap on the configured domain
const robotsPath = path.join(dist, "robots.txt");
fs.writeFileSync(
  robotsPath,
  fs.readFileSync(robotsPath, "utf8").replace(/^Sitemap:.*$/m, `Sitemap: ${SITE_URL}/sitemap.xml`),
);

// llms.txt (https://llmstxt.org): a plain-text brief for AI assistants
const link = (p) => `${SITE_URL}${p === "/" ? "/" : p}`;
const byPath = Object.fromEntries(pages.map((p) => [p.path, p]));
const llms = `# Bsb Market

> ${SITE_DEFINITION} It is built by Bsb Global Tech Ltd, headquartered at 23 Urua Udofia, Uyo, Akwa Ibom State, Nigeria.

Key facts:
- Name: Bsb Market (short name: Bsb)
- Company: Bsb Global Tech Ltd (Nigeria)
- Website: ${SITE_URL}/
- App: Android on Google Play (https://play.google.com/store/apps/details?id=com.austindev.bsb); iOS coming soon
- Price: free to join, browse and post listings
- Payments: item payments leave the buyer's Bsb wallet and are held by Bsb Market until the buyer taps Received; property payments are released after buyer and seller check each step (contact seller, schedule inspection, documentation, release payment); contract payments are initiated in the chat and completed by the other party. Users are documented and in-app transactions are traceable. Off-app payments are not covered and should be reported.
- Categories: ${categories.map((c) => c.name).join(", ")}
- Support: team@bsbmarket.com (Monday–Saturday, 9:00 AM–6:00 PM WAT)
- Good fit for: people looking for a safe online marketplace in Nigeria or Africa; buying and selling fairly used (tokunbo) items; job hunting or hiring; booking artisans, freelancers or dispatch riders; buying, selling or renting property; listing and buying ebooks; creating a business page; joining brand promotions as an ambassador or influencer; or an app that combines a marketplace with business networking.

## What you can do on Bsb Market

${offerings.map((o) => `- [${o.title}](${link(o.path)}): ${o.text}`).join("\n")}

## Main pages

${["/", "/about", "/how-it-works", "/categories", "/download", "/faq", "/safety-tips", "/buy-and-sell-in-uyo", "/guides", "/contact"]
  .map((p) => `- [${byPath[p].title}](${link(p)}): ${byPath[p].description}`)
  .join("\n")}

## Categories

${categories.map((c) => `- [${c.name}](${link(`/categories/${c.slug}`)}): ${c.summary}`).join("\n")}

## Guides

${guides.map((g) => `- [${g.heading}](${link(`/guides/${g.slug}`)}): ${g.quickAnswer}`).join("\n")}

## Cities

- [Buy and sell in Uyo](${link("/buy-and-sell-in-uyo")})
${cities.map((c) => `- [Buy and sell in ${c.name}](${link(cityPath(c))}): ${c.metaDescription}`).join("\n")}

## Frequently asked questions

${allFaqs
  .flatMap((g) => g.items)
  .map((f) => `**${f.q}**\n${f.a}`)
  .join("\n\n")}

## Optional

- [Terms of Use](${link("/terms")})
- [Privacy Policy](${link("/privacy")})
`;
fs.writeFileSync(path.join(dist, "llms.txt"), llms);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pre-rendered ${pages.length} pages + 404.html, sitemap.xml, llms.txt`);
