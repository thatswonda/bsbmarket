import type { Faq } from "@/content/categories";

export type City = {
  slug: string;
  name: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  intro: string[];
  /** Popular areas used in the copy so local searches match. */
  areas: string[];
  /** What people commonly trade in this city. */
  highlights: string[];
  meetingTips: string;
  faqs: Faq[];
};

/** City landing pages, served at /buy-and-sell-in-<slug>. Uyo has its own page (src/pages/Uyo.tsx). */
export const cities: City[] = [
  {
    slug: "lagos",
    name: "Lagos",
    state: "Lagos State",
    metaTitle: "Buy & Sell in Lagos – Online Marketplace, Jobs & Services | Bsb Market",
    metaDescription:
      "Buy and sell phones, cars, furniture and more in Lagos, hire artisans, find jobs and rent apartments on Bsb Market. Free to join, from Ikeja and Lekki to Yaba and Ikorodu.",
    lead: "Buy and sell goods, hire artisans, find jobs, rent apartments and trade cars across Lagos, from your phone and for free.",
    intro: [
      "Lagos is Nigeria's busiest commercial city, and finding the right buyer, seller or service provider can take time. Bsb Market brings it all into one app: post a listing in minutes, browse what is near you and chat directly with people across the Mainland and the Island.",
      "Whether you are selling a fairly used phone, looking for an electrician in Surulere, hiring sales staff for your shop in Ikeja or searching for a self-contained apartment in Yaba, Bsb Market connects you with the right people.",
    ],
    areas: ["Ikeja", "Lekki", "Victoria Island", "Yaba", "Surulere", "Ajah", "Ikorodu", "Festac", "Gbagada", "Magodo"],
    highlights: [
      "Phones, laptops and accessories",
      "Cars, motorcycles and spare parts",
      "Apartments for rent, shops and land",
      "Artisans: electricians, plumbers, AC repairers, cleaners",
      "Jobs in sales, tech, logistics and hospitality",
      "Fashion, beauty and home goods",
    ],
    meetingTips:
      "Meet in busy public places during the day, such as shopping malls or bank premises, and avoid isolated areas. For expensive items, bring someone with you and inspect before you pay.",
    faqs: [
      {
        q: "Can I use Bsb Market in Lagos?",
        a: "Yes. Bsb Market is available across Lagos, including Ikeja, Lekki, Victoria Island, Yaba, Surulere, Ajah and Ikorodu. You can browse and post listings for free.",
      },
      {
        q: "What can I buy and sell in Lagos on Bsb Market?",
        a: "Phones and gadgets, cars and spare parts, furniture and home goods, fashion, property for rent or sale, and services from artisans and freelancers. You can also post and find jobs.",
      },
      {
        q: "Is it free to post an ad in Lagos?",
        a: "Yes. Posting listings on Bsb Market is free anywhere in Nigeria, including Lagos.",
      },
    ],
  },
  {
    slug: "abuja",
    name: "Abuja",
    state: "Federal Capital Territory",
    metaTitle: "Buy & Sell in Abuja – Online Marketplace, Jobs & Services | Bsb Market",
    metaDescription:
      "Buy and sell gadgets, cars, furniture and property in Abuja, hire artisans and find jobs on Bsb Market. Free to join, from Wuse and Garki to Gwarinpa and Kubwa.",
    lead: "Buy and sell, hire service providers, find jobs and rent property across Abuja and the FCT with the free Bsb Market app.",
    intro: [
      "From Wuse and Garki to Gwarinpa, Kubwa and Lugbe, people in Abuja use Bsb Market to buy and sell, find reliable service providers and connect with businesses.",
      "Post a listing in minutes, browse what is close to you and chat directly with buyers, sellers, employers and artisans through the app.",
    ],
    areas: ["Wuse", "Garki", "Maitama", "Asokoro", "Gwarinpa", "Kubwa", "Lugbe", "Jabi", "Utako", "Lokogoma"],
    highlights: [
      "Apartments and houses for rent or sale",
      "Phones, laptops and office equipment",
      "Cars and spare parts",
      "Cleaners, electricians, solar installers and other artisans",
      "Office, admin, tech and driving jobs",
      "Contracts and business services",
    ],
    meetingTips:
      "Meet at busy, well-known public places during the day, such as shopping plazas or bank premises. Inspect items and property in person before paying anything.",
    faqs: [
      {
        q: "Can I use Bsb Market in Abuja?",
        a: "Yes. Bsb Market is available across Abuja and the FCT, including Wuse, Garki, Maitama, Gwarinpa, Kubwa and Lugbe.",
      },
      {
        q: "Can I find houses for rent in Abuja on Bsb Market?",
        a: "Yes. The Real Estate category lists apartments, houses, shops and land. Always inspect the property and verify documents before paying any fee.",
      },
      {
        q: "Is Bsb Market free in Abuja?",
        a: "Yes. Joining, browsing and posting listings on Bsb Market are free.",
      },
    ],
  },
  {
    slug: "port-harcourt",
    name: "Port Harcourt",
    state: "Rivers State",
    metaTitle: "Buy & Sell in Port Harcourt – Marketplace, Jobs & Services | Bsb Market",
    metaDescription:
      "Buy and sell in Port Harcourt on Bsb Market: phones, cars, furniture, property, artisans and jobs. Free to join, from GRA and Rumuola to Trans-Amadi and Choba.",
    lead: "Trade goods, hire artisans, find jobs and rent property across Port Harcourt and Rivers State with the free Bsb Market app.",
    intro: [
      "Port Harcourt has a busy trading culture, and Bsb Market makes it easier to reach buyers and sellers across the city, from GRA and Rumuola to Trans-Amadi, Rumuokoro and Choba.",
      "Sell what you no longer need, find a technician for your generator or AC, hire staff for your business or discover contracts and services, all in one app.",
    ],
    areas: ["GRA", "Rumuola", "Trans-Amadi", "Rumuokoro", "Choba", "Eliozu", "Woji", "Rumuibekwe", "D-Line", "Diobu"],
    highlights: [
      "Phones, gadgets and electronics",
      "Cars, motorcycles and spare parts",
      "Generators, inverters and solar equipment",
      "Artisans and technicians for homes and offices",
      "Jobs in logistics, sales, hospitality and tech",
      "Houses and apartments for rent",
    ],
    meetingTips:
      "Choose busy public places during daylight hours, bring someone with you for expensive items and never pay in advance to people you have not met or verified.",
    faqs: [
      {
        q: "Can I use Bsb Market in Port Harcourt?",
        a: "Yes. Bsb Market is available across Port Harcourt and Rivers State, including GRA, Rumuola, Trans-Amadi, Rumuokoro and Choba.",
      },
      {
        q: "Can I hire a technician in Port Harcourt on Bsb Market?",
        a: "Yes. The Services category lists electricians, plumbers, AC and generator technicians and other artisans. Compare their past work and reviews before you hire.",
      },
      {
        q: "Is it free to sell in Port Harcourt on Bsb Market?",
        a: "Yes. Posting listings on Bsb Market is free.",
      },
    ],
  },
  {
    slug: "calabar",
    name: "Calabar",
    state: "Cross River State",
    metaTitle: "Buy & Sell in Calabar – Online Marketplace, Jobs & Services | Bsb Market",
    metaDescription:
      "Buy and sell in Calabar with Bsb Market: gadgets, cars, furniture, property, artisans and jobs. Free to join, a home-grown marketplace from neighbouring Akwa Ibom.",
    lead: "Buy and sell, hire artisans, find jobs and rent houses across Calabar and Cross River State with the free Bsb Market app.",
    intro: [
      "Bsb Market was built next door in Uyo, Akwa Ibom State, and Calabar is one of our closest neighbours. People in Calabar use Bsb Market to buy and sell goods, find service providers and connect with businesses across the South-South and beyond.",
      "Post a listing in minutes, browse what is close to you and chat directly with buyers, sellers, employers and artisans through the app.",
    ],
    areas: ["Calabar Municipality", "Calabar South", "Marian", "Satellite Town", "State Housing", "Akim", "Ekorinim", "Big Qua"],
    highlights: [
      "Phones, gadgets and electronics",
      "Fashion, beauty and home goods",
      "Houses and apartments for rent",
      "Artisans, caterers and event services",
      "Jobs in hospitality, sales and services",
      "Cars and spare parts",
    ],
    meetingTips:
      "Meet in busy public places during the day, inspect items before paying and keep your conversation inside the Bsb Market app so there is a record.",
    faqs: [
      {
        q: "Can I use Bsb Market in Calabar?",
        a: "Yes. Bsb Market is available across Calabar and Cross River State. You can browse and post listings for free.",
      },
      {
        q: "Can I trade between Calabar and Uyo on Bsb Market?",
        a: "Yes. You can browse listings in Calabar, Uyo and other cities and contact sellers directly. Agree on delivery or meet halfway in a safe public place.",
      },
      {
        q: "Is Bsb Market free in Calabar?",
        a: "Yes. Joining, browsing and posting listings on Bsb Market are free.",
      },
    ],
  },
];

export const cityPath = (c: City) => `/buy-and-sell-in-${c.slug}`;
