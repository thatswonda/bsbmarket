import { PLAY_STORE_URL } from "@/lib/appLinks";

/**
 * Canonical public origin of the website (no trailing slash).
 * Override at build time with VITE_SITE_URL if the site moves to another domain.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://bsbmarket.com").replace(/\/$/, "");

export const SITE_NAME = "BSB Market";
export const SITE_TAGLINE = "Buy, Sell, Hire & Connect";
export const COMPANY_NAME = "BSB Global Tech Ltd";
export const SUPPORT_EMAIL = "team@bsbmarket.com";
export const LOGO_PATH = "/logo.png";
export const OG_IMAGE_PATH = "/og-image.png";

export const ADDRESS = {
  street: "23 Urua Udofia",
  city: "Uyo",
  region: "Akwa Ibom State",
  country: "NG",
  countryName: "Nigeria",
};

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "/" : path}`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["BSB", "Bsb Market", "BSB Marketplace"],
  legalName: COMPANY_NAME,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}${LOGO_PATH}`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}${OG_IMAGE_PATH}`,
  description:
    "BSB Market is an all-in-one online marketplace and social-business app from Nigeria for buying and selling goods, hiring and offering services, finding jobs, real estate, cars, contracts and business networking.",
  email: SUPPORT_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    addressCountry: ADDRESS.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SUPPORT_EMAIL,
    areaServed: "NG",
    availableLanguage: ["English"],
  },
  areaServed: ["Nigeria", "Africa", "Worldwide"],
  sameAs: [PLAY_STORE_URL.split("&")[0]],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["Bsb Market", "BSB Marketplace"],
  url: `${SITE_URL}/`,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const mobileAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: "BSB Market",
  operatingSystem: "Android",
  applicationCategory: "ShoppingApplication",
  description:
    "Free marketplace app to buy and sell goods, hire or offer services, find jobs, rent or buy property, trade cars and network with businesses in Nigeria and beyond.",
  downloadUrl: PLAY_STORE_URL.split("&")[0],
  installUrl: PLAY_STORE_URL.split("&")[0],
  image: `${SITE_URL}${LOGO_PATH}`,
  offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
  publisher: { "@id": `${SITE_URL}/#organization` },
};
