/**
 * Everything people can do on Bsb Market, written for both readers and search/AI engines.
 * Used by the home page "Everything you can do" section, llms.txt and structured data.
 */
export type Offering = {
  title: string;
  /** Short answer-style description, one or two sentences. */
  text: string;
  path: string;
};

export const SITE_DEFINITION =
  "Bsb Market is a digital marketplace and social business app for Nigeria and Africa. In one app you can buy and sell new and fairly used items, find jobs, book services and dispatch riders, buy or rent property, list and buy ebooks, run a business page and join brand promotions. Payments made in the app are held by Bsb Market until the buyer confirms delivery, every user is documented, and every transaction is traceable.";

export const offerings: Offering[] = [
  {
    title: "Buy and sell anything",
    text: "List phones, fashion, furniture, appliances and more for free, and reach buyers anywhere in Nigeria and beyond.",
    path: "/categories/goods",
  },
  {
    title: "Fairly used items (Panteka)",
    text: "Buy and sell fairly used phones, laptops, furniture, appliances and fashion on Panteka, with your payment held until you tap Received.",
    path: "/categories/panteka",
  },
  {
    title: "Real estate",
    text: "Buy, sell or rent houses, flats, land, shops and offices through a checked process: contact the seller, schedule inspection, complete documentation, then release payment.",
    path: "/categories/real-estate",
  },
  {
    title: "Cars and vehicles",
    text: "Buy and sell new and used cars, SUVs, buses, motorcycles and tricycles, and pay safely inside the app.",
    path: "/categories/automobiles",
  },
  {
    title: "Job hunting and hiring",
    text: "Search full-time, part-time, remote and freelance jobs, or post vacancies for free and chat with applicants directly.",
    path: "/categories/jobs",
  },
  {
    title: "Book services",
    text: "Book plumbers, electricians, cleaners, photographers, tutors, developers and other professionals, and pay them through the app.",
    path: "/categories/services",
  },
  {
    title: "Dispatch and delivery",
    text: "Book dispatch riders and courier companies to pick up and deliver packages, orders and documents.",
    path: "/categories/dispatch",
  },
  {
    title: "Ebooks and digital products",
    text: "List your ebooks and guides for sale, or buy business, finance and self-development titles for instant download.",
    path: "/categories/ebooks",
  },
  {
    title: "Business pages",
    text: "Create a business page to showcase your products and services, post updates, gain followers and connect with other businesses.",
    path: "/download",
  },
  {
    title: "Brand promotions",
    text: "Join brand promotions as an ambassador or influencer and get paid, or find people to promote your own brand.",
    path: "/categories/promotions",
  },
  {
    title: "Contracts and partnerships",
    text: "Find construction, supply and catering contracts, business shares and partners, with contract payments started and completed inside the chat.",
    path: "/categories/contracts",
  },
];
