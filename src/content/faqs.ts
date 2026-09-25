import type { Faq } from "@/content/categories";

/** Shown on the home page. */
export const homeFaqs: Faq[] = [
  {
    q: "What is BSB Market?",
    a: "BSB Market is a one-stop marketplace where you can buy and sell goods, hire or offer services, find jobs, network with professionals, and explore real estate, contracts, and more — all in one platform.",
  },
  {
    q: "Is BSB Market free to use?",
    a: "Yes! Creating an account and browsing listings is completely free. You can post listings, connect with buyers and sellers, and explore all categories at no cost.",
  },
  {
    q: "How do I post a listing?",
    a: "Simply download the BSB Market app, create an account, and tap the 'Post' button. Fill in your listing details, add photos, set your price, and publish — it's that easy.",
  },
  {
    q: "Is my data safe on BSB Market?",
    a: "Absolutely. We use industry-standard encryption and security measures to protect your personal information. Read our Privacy Policy for full details on how we handle your data.",
  },
  {
    q: "Can I use BSB Market outside my city?",
    a: "Yes! BSB Market works both locally and globally. You can browse listings in your area or expand your search to other cities and regions.",
  },
  {
    q: "How do I contact a seller or service provider?",
    a: "Each listing has a contact button that lets you message or call the seller directly through the app. Communication is seamless and secure.",
  },
];

/** Full list for the /faq page (home questions first). */
export const allFaqs: { group: string; items: Faq[] }[] = [
  { group: "Getting started", items: homeFaqs },
  {
    group: "Buying and selling",
    items: [
      {
        q: "What can I buy and sell on BSB Market?",
        a: "Goods (furniture, appliances, fashion), gadgets (phones, laptops), cars and motorcycles, spare parts and hardware (Panteka), real estate, ebooks, business shares, contracts, services and jobs.",
      },
      {
        q: "Does BSB Market charge commission on sales?",
        a: "Posting and browsing listings on BSB Market is free. Buyers and sellers agree on prices and payment directly with each other.",
      },
      {
        q: "How do I sell fast on BSB Market?",
        a: "Use clear, well-lit photos, a specific title (brand, model, size), an honest description of the condition, a fair price and your location. Reply to messages quickly.",
      },
      {
        q: "Can I sell used or second-hand items?",
        a: "Yes. You can sell new and used items. Always describe the condition honestly.",
      },
    ],
  },
  {
    group: "Services, jobs and business",
    items: [
      {
        q: "Can I find artisans and freelancers on BSB Market?",
        a: "Yes. The Services category lists plumbers, electricians, cleaners, painters, photographers, designers, developers, tutors and many other professionals.",
      },
      {
        q: "Can employers post jobs on BSB Market?",
        a: "Yes. Employers post full-time, part-time, remote and freelance jobs for free and chat with applicants directly.",
      },
      {
        q: "What is the networking feature on BSB Market?",
        a: "BSB Market is a social-business app. Besides trading, you can follow and connect with other businesses and professionals, join business groups and find partners.",
      },
    ],
  },
  {
    group: "App, safety and support",
    items: [
      {
        q: "Where can I download the BSB Market app?",
        a: "The BSB Market app is available for Android on Google Play. The iOS version is coming soon.",
      },
      {
        q: "How do I stay safe when trading on BSB Market?",
        a: "Meet in busy public places, inspect items before paying, never send money in advance to people you have not verified, and report suspicious listings. See our safety tips page for more.",
      },
      {
        q: "Who owns BSB Market?",
        a: "BSB Market is a product of BSB Global Tech Ltd, a technology company registered in Nigeria with its office at 23 Urua Udofia, Uyo, Akwa Ibom State.",
      },
      {
        q: "How do I contact BSB Market support?",
        a: "Email team@bsbmarket.com or use the contact form on our website. Support is available Monday to Saturday, 9:00 AM to 6:00 PM WAT.",
      },
    ],
  },
];

/** Local questions for the Uyo landing page. */
export const uyoFaqs: Faq[] = [
  {
    q: "Is BSB Market based in Uyo?",
    a: "Yes. BSB Market is built by BSB Global Tech Ltd, headquartered at 23 Urua Udofia, Uyo, Akwa Ibom State, Nigeria.",
  },
  {
    q: "Can I buy and sell in other parts of Akwa Ibom and Nigeria?",
    a: "Yes. Listings are available across Akwa Ibom, including Eket, Ikot Ekpene and Oron, and across Nigeria and beyond. You can browse locally or search further afield.",
  },
  {
    q: "Where should I meet buyers and sellers in Uyo?",
    a: "Choose busy, public places during the day, such as shopping malls, banks or well-known public spaces, and never go alone for expensive items.",
  },
];
