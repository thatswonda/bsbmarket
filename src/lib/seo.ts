import type { JSX } from "react";
import { PLAY_STORE_URL } from "@/lib/appLinks";

/** Canonical production origin. Every canonical URL, sitemap entry and schema @id uses it. */
export const SITE_URL = "https://bsbmarket.com";
export const SITE_NAME = "BSB Market";
export const LEGAL_NAME = "BSB Global Tech Ltd";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LOGO_URL = `${SITE_URL}/logo-512.png`;
export const CONTACT_EMAIL = "team@bsbmarket.com";

/** Single source of truth for NAP (name, address, contact) — keep in sync with the footer. */
export const ADDRESS = {
  streetAddress: "23 Urua Udofia",
  addressLocality: "Uyo",
  addressRegion: "Akwa Ibom State",
  addressCountry: "NG",
} as const;
export const ADDRESS_TEXT = "23 Urua Udofia, Uyo, Akwa Ibom State, Nigeria";

export const SOCIAL_PROFILES = [
  "https://www.tiktok.com/@bsbmarketapp",
  "https://www.facebook.com/share/1QLffXiTcg/",
  "https://x.com/bsbmarketapp",
  "https://play.google.com/store/apps/details?id=com.austindev.bsb",
];

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

type JsonLd = Record<string, unknown>;
type MetaTag = JSX.IntrinsicElements["meta"];

/**
 * JSON-LD entry for a route's `head().meta`. The router renders `script:ld+json` as an escaped
 * <script type="application/ld+json">, but head()'s type only lists <meta> props, hence the cast.
 */
export const ldJsonMeta = (data: JsonLd) => ({ "script:ld+json": data }) as unknown as MetaTag;

export const absoluteUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

type PageHeadInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: JsonLd[];
  noindex?: boolean;
};

/** Builds title, description, canonical, Open Graph, Twitter and JSON-LD tags for a route. */
export function pageHead({
  path,
  title,
  description,
  image = OG_IMAGE,
  type = "website",
  jsonLd = [],
  noindex = false,
}: PageHeadInput) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "BSB Market logo and tagline" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      ...jsonLd.map(ldJsonMeta),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/* ---------- Schema.org builders ---------- */

export const organizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  alternateName: ["BSB", "Bsb Market", "BSB Market App"],
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
  image: OG_IMAGE,
  description:
    "BSB Market is a Nigerian digital marketplace and business app by BSB Global Tech Ltd. It lets people buy and sell goods with escrow-protected payments, find and post jobs, book rides and dispatch deliveries, and book services from local businesses.",
  email: CONTACT_EMAIL,
  address: { "@type": "PostalAddress", ...ADDRESS },
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Continent", name: "Africa" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT_EMAIL,
      areaServed: "NG",
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
  ],
  sameAs: SOCIAL_PROFILES,
});

export const websiteSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "en-NG",
  publisher: { "@id": ORG_ID },
});

export const softwareApplicationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": APP_ID,
  name: SITE_NAME,
  operatingSystem: "Android",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Marketplace",
  description:
    "All-in-one Nigerian app to buy and sell with escrow-protected payments, find jobs and gigs, book rides and dispatch deliveries, and book services from businesses.",
  url: `${SITE_URL}/`,
  downloadUrl: PLAY_STORE_URL,
  installUrl: PLAY_STORE_URL,
  image: LOGO_URL,
  inLanguage: "en",
  countriesSupported: "NG",
  offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
  publisher: { "@id": ORG_ID },
  featureList: [
    "Buy and sell goods and digital products",
    "Escrow-protected in-app payments",
    "Job listings and hiring",
    "Ride booking and dispatch delivery",
    "Service and business bookings",
    "Business networking and brand promotions",
  ],
});

export const localBusinessSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: `${SITE_URL}/`,
  image: LOGO_URL,
  logo: LOGO_URL,
  email: CONTACT_EMAIL,
  address: { "@type": "PostalAddress", ...ADDRESS },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  parentOrganization: { "@id": ORG_ID },
  sameAs: SOCIAL_PROFILES,
});

export type Crumb = { name: string; path: string };

export const breadcrumbSchema = (crumbs: Crumb[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

export type Faq = { q: string; a: string };

export const faqSchema = (faqs: Faq[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = (s: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(s.path)}#service`,
  name: s.name,
  serviceType: s.serviceType,
  description: s.description,
  url: absoluteUrl(s.path),
  provider: { "@id": ORG_ID },
  brand: { "@type": "Brand", name: SITE_NAME },
  areaServed: { "@type": "Country", name: "Nigeria" },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: PLAY_STORE_URL,
    name: "BSB Market Android app",
  },
});

export const webPageSchema = (p: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": p.type ?? "WebPage",
  "@id": `${absoluteUrl(p.path)}#webpage`,
  url: absoluteUrl(p.path),
  name: p.name,
  description: p.description,
  inLanguage: "en-NG",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
});
