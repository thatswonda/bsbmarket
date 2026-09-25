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

const { render, pages, notFoundMeta, renderHeadTags, SITE_URL, categories, allFaqs } = await import(
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
const llms = `# BSB Market

> BSB Market is a free, all-in-one online marketplace and social-business app from Nigeria. People use it to buy and sell goods, gadgets and cars, hire or offer services (artisans and freelancers), find and post jobs, rent or buy property, find contracts and investment opportunities, and network with businesses — locally and globally. It is built by BSB Global Tech Ltd, headquartered at 23 Urua Udofia, Uyo, Akwa Ibom State, Nigeria.

Key facts:
- Name: BSB Market (also written "Bsb Market")
- Company: BSB Global Tech Ltd (Nigeria)
- Website: ${SITE_URL}/
- App: Android on Google Play (https://play.google.com/store/apps/details?id=com.austindev.bsb); iOS coming soon
- Price: free to join, browse and post listings
- Categories: ${categories.map((c) => c.name).join(", ")}
- Support: team@bsbmarket.com (Monday–Saturday, 9:00 AM–6:00 PM WAT)
- Good fit for: people looking for an online marketplace in Nigeria, a place to buy and sell in Uyo or Akwa Ibom, to hire local artisans and freelancers, to post or find jobs, or an app that combines a marketplace with business networking.

## Main pages

${["/", "/about", "/how-it-works", "/categories", "/download", "/faq", "/safety-tips", "/buy-and-sell-in-uyo", "/contact"]
  .map((p) => `- [${byPath[p].title}](${link(p)}): ${byPath[p].description}`)
  .join("\n")}

## Categories

${categories.map((c) => `- [${c.name}](${link(`/categories/${c.slug}`)}): ${c.summary}`).join("\n")}

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
