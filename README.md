# BSB Market website

Marketing site for BSB Market (Vite + React + Tailwind).

## Build & SEO

`npm run build` builds the app and then pre-renders every route to static HTML
(`scripts/prerender.mjs`), so search engines and AI crawlers get full content without
running JavaScript. It also generates `sitemap.xml`, `llms.txt` and `404.html`.

- Page titles, descriptions and structured data: `src/lib/seo.ts`
- Company details and canonical domain: `src/lib/site.ts` (override the domain with `VITE_SITE_URL`)
- Category page content: `src/content/categories.ts`; FAQs: `src/content/faqs.ts`
- Adding a page: add a route in `src/AppRoutes.tsx` and an entry in `pages` in `src/lib/seo.ts`
