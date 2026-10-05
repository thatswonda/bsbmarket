import { categories, type Faq } from "@/content/categories";
import { allFaqs, uyoFaqs } from "@/content/faqs";
import { guides } from "@/content/guides";
import { cities, cityPath } from "@/content/cities";
import {
  COMPANY_NAME,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  mobileAppJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/site";

type JsonLd = Record<string, unknown>;

export type Crumb = { name: string; path: string };

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  breadcrumbs?: Crumb[];
  /** Questions answered on the page; marks the page up as an FAQPage. */
  faqs?: Faq[];
  jsonLd?: JsonLd[];
  /** Sitemap priority (0.0 – 1.0). */
  priority?: number;
};

const HOME: Crumb = { name: "Home", path: "/" };

const breadcrumbJsonLd = (crumbs: Crumb[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

const webPageJsonLd = (meta: PageMeta): JsonLd => ({
  "@context": "https://schema.org",
  "@type": meta.faqs ? "FAQPage" : "WebPage",
  "@id": `${absoluteUrl(meta.path)}#webpage`,
  url: absoluteUrl(meta.path),
  name: meta.title,
  description: meta.description,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  ...(meta.faqs && {
    mainEntity: meta.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }),
});

const staticPages: PageMeta[] = [
  {
    path: "/",
    title: "Bsb Market | Buy, Sell, Hire & Connect – Online Marketplace App",
    description:
      "Bsb Market is a free all-in-one marketplace app from Nigeria. Buy and sell goods, gadgets and cars, hire or offer services, find jobs, rent property and network with businesses.",
    priority: 1.0,
    jsonLd: [organizationJsonLd, websiteJsonLd, mobileAppJsonLd],
  },
  {
    path: "/about",
    title: "About Bsb Market – The Social-Business Marketplace App",
    description:
      "Learn about Bsb Market, the social-business marketplace built by Bsb Global Tech Ltd in Uyo, Nigeria, to make trade, hiring and business networking easier for everyone.",
    breadcrumbs: [HOME, { name: "About", path: "/about" }],
    priority: 0.8,
  },
  {
    path: "/how-it-works",
    title: "How Bsb Market Works – Buy, Sell & Hire in 4 Steps",
    description:
      "See how to use Bsb Market: download the free app, create an account, post or browse listings, and connect directly with buyers, sellers, employers and service providers.",
    breadcrumbs: [HOME, { name: "How it works", path: "/how-it-works" }],
    priority: 0.8,
  },
  {
    path: "/categories",
    title: "Marketplace Categories – Goods, Services, Jobs, Cars & More | Bsb Market",
    description:
      "Browse every Bsb Market category: services, goods, contracts, jobs, real estate, automobiles, promotions, Panteka spare parts, gadgets, ebooks and business shares.",
    breadcrumbs: [HOME, { name: "Categories", path: "/categories" }],
    priority: 0.9,
  },
  {
    path: "/faq",
    title: "Bsb Market FAQ – Answers About Buying, Selling & the App",
    description:
      "Answers to common questions about Bsb Market: is it free, how to post a listing, how to sell fast, safety, jobs, services, the app download and support.",
    breadcrumbs: [HOME, { name: "FAQ", path: "/faq" }],
    priority: 0.7,
    faqs: allFaqs.flatMap((g) => g.items),
  },
  {
    path: "/safety-tips",
    title: "Safe Buying & Selling Tips – Avoid Online Scams | Bsb Market",
    description:
      "Practical safety tips for buying and selling online in Nigeria: how to meet safely, inspect items, pay securely, spot scams and report suspicious listings on Bsb Market.",
    breadcrumbs: [HOME, { name: "Safety tips", path: "/safety-tips" }],
    priority: 0.6,
  },
  {
    path: "/download",
    title: "Download the Bsb Market App for Android – Free",
    description:
      "Get the free Bsb Market app on Google Play to buy, sell, hire, find jobs and network from your phone. iOS version coming soon.",
    breadcrumbs: [HOME, { name: "Download the app", path: "/download" }],
    priority: 0.8,
    jsonLd: [mobileAppJsonLd],
  },
  {
    path: "/buy-and-sell-in-uyo",
    title: "Buy & Sell in Uyo, Akwa Ibom – Local Online Marketplace | Bsb Market",
    description:
      "Bsb Market is Uyo's home-grown marketplace. Buy and sell goods, find artisans, jobs, houses for rent and cars in Uyo and across Akwa Ibom State.",
    breadcrumbs: [HOME, { name: "Buy & sell in Uyo", path: "/buy-and-sell-in-uyo" }],
    priority: 0.7,
    faqs: uyoFaqs,
  },
  {
    path: "/contact",
    title: "Contact Bsb Market – Customer Support",
    description:
      "Contact the Bsb Market team by email at team@bsbmarket.com or visit our office at 23 Urua Udofia, Uyo, Akwa Ibom State. Support Monday to Saturday.",
    breadcrumbs: [HOME, { name: "Contact", path: "/contact" }],
    priority: 0.5,
  },
  {
    path: "/terms",
    title: "Terms of Use | Bsb Market",
    description: `The terms that govern your use of the Bsb Market app and website, operated by ${COMPANY_NAME}.`,
    breadcrumbs: [HOME, { name: "Terms of Use", path: "/terms" }],
    priority: 0.3,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Bsb Market",
    description: `How ${COMPANY_NAME} collects, uses and protects your personal data when you use Bsb Market.`,
    breadcrumbs: [HOME, { name: "Privacy Policy", path: "/privacy" }],
    priority: 0.3,
  },
];

const categoryPages: PageMeta[] = categories.map((c) => ({
  path: `/categories/${c.slug}`,
  title: c.metaTitle,
  description: c.metaDescription,
  breadcrumbs: [HOME, { name: "Categories", path: "/categories" }, { name: c.name, path: `/categories/${c.slug}` }],
  priority: 0.8,
  faqs: c.faqs,
}));

const cityPages: PageMeta[] = cities.map((c) => ({
  path: cityPath(c),
  title: c.metaTitle,
  description: c.metaDescription,
  breadcrumbs: [HOME, { name: `Buy & sell in ${c.name}`, path: cityPath(c) }],
  priority: 0.7,
  faqs: c.faqs,
}));

const guidesHub: PageMeta = {
  path: "/guides",
  title: "Guides – Buying, Selling, Hiring & Jobs in Nigeria | Bsb Market",
  description:
    "Step-by-step guides to selling online in Nigeria, hiring trusted artisans, finding jobs, buying a used car safely, and everything you need to know about Bsb Market.",
  breadcrumbs: [HOME, { name: "Guides", path: "/guides" }],
  priority: 0.7,
};

const guidePages: PageMeta[] = guides.map((g) => {
  const path = `/guides/${g.slug}`;
  return {
    path,
    title: g.metaTitle,
    description: g.metaDescription,
    breadcrumbs: [HOME, { name: "Guides", path: "/guides" }, { name: g.name, path }],
    priority: 0.8,
    faqs: g.faqs,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${absoluteUrl(path)}#article`,
        headline: g.heading,
        description: g.metaDescription,
        abstract: g.quickAnswer,
        url: absoluteUrl(path),
        mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
        image: `${SITE_URL}${OG_IMAGE_PATH}`,
        datePublished: g.datePublished,
        dateModified: g.dateModified,
        inLanguage: "en",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
});

export const notFoundMeta: PageMeta = {
  path: "/404",
  title: "Page not found | Bsb Market",
  description: "The page you are looking for does not exist.",
  noindex: true,
};

/** Every indexable route, used for pre-rendering and the sitemap. */
export const pages: PageMeta[] = [...staticPages, ...categoryPages, ...cityPages, guidesHub, ...guidePages];

export const getPageMeta = (path: string): PageMeta => {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  const found = pages.find((p) => p.path === clean);
  return found ?? notFoundMeta;
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const toAbsolute = (src: string) => (/^https?:\/\//.test(src) ? src : `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`);

/** Head tags for a page. Every tag carries data-seo so the client can swap them on navigation. */
export const renderHeadTags = (meta: PageMeta): string => {
  const url = absoluteUrl(meta.path);
  const image = toAbsolute(meta.image ?? OG_IMAGE_PATH);
  const imageAlt = meta.imageAlt ?? "Bsb Market logo – Buy, Sell, Hire & Connect";
  const ld: JsonLd[] = [];
  if (!meta.noindex) {
    ld.push(webPageJsonLd(meta));
    if (meta.breadcrumbs) ld.push(breadcrumbJsonLd(meta.breadcrumbs));
    ld.push(...(meta.jsonLd ?? []));
  }

  const tags = [
    `<title data-seo>${esc(meta.title)}</title>`,
    `<meta data-seo name="description" content="${esc(meta.description)}" />`,
    `<meta data-seo name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}" />`,
    ...(meta.noindex ? [] : [`<link data-seo rel="canonical" href="${url}" />`]),
    `<meta data-seo property="og:type" content="website" />`,
    `<meta data-seo property="og:site_name" content="${SITE_NAME}" />`,
    `<meta data-seo property="og:locale" content="en_NG" />`,
    `<meta data-seo property="og:title" content="${esc(meta.title)}" />`,
    `<meta data-seo property="og:description" content="${esc(meta.description)}" />`,
    `<meta data-seo property="og:url" content="${url}" />`,
    `<meta data-seo property="og:image" content="${image}" />`,
    `<meta data-seo property="og:image:alt" content="${esc(imageAlt)}" />`,
    ...(meta.image ? [] : [`<meta data-seo property="og:image:width" content="1200" />`, `<meta data-seo property="og:image:height" content="630" />`]),
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta data-seo name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta data-seo name="twitter:image" content="${image}" />`,
    `<meta data-seo name="twitter:image:alt" content="${esc(imageAlt)}" />`,
    ...ld.map((j) => `<script data-seo type="application/ld+json">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`),
  ];
  return tags.join("\n    ");
};
