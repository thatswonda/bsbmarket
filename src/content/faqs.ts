import type { Faq } from "@/content/categories";

/** Shown on the home page. */
export const homeFaqs: Faq[] = [
  {
    q: "What is Bsb Market?",
    a: "Bsb Market is a digital marketplace and social business app for Nigeria and Africa. In one app you can buy and sell new and fairly used items, find jobs, book services and dispatch riders, buy or rent property, list and buy ebooks, run a business page and join brand promotions.",
  },
  {
    q: "Is Bsb Market safe and legit?",
    a: "Yes. Bsb Market is built by Bsb Global Tech Ltd, a company registered in Nigeria. Every user is documented, every transaction in the app is traceable, and payments for items are held by Bsb Market until the buyer confirms they received what they ordered.",
  },
  {
    q: "How do payments work on Bsb Market?",
    a: "When you buy an item, the money leaves your Bsb wallet but is not credited to the seller. Bsb Market holds it until you receive the item and tap Received. For property, payment is released only after both buyer and seller check each step: contacting the seller, scheduling an inspection and completing documentation. For contracts, one party initiates the payment in the chat and the other completes it.",
  },
  {
    q: "Can I find a job or hire staff on Bsb Market?",
    a: "Yes. Job seekers can search full-time, part-time, remote and freelance roles, and employers can post vacancies for free and chat with applicants directly in the app.",
  },
  {
    q: "Can I book services and dispatch riders on Bsb Market?",
    a: "Yes. You can book artisans, freelancers and professionals such as plumbers, electricians, photographers and tutors, as well as dispatch riders and courier companies to deliver packages.",
  },
  {
    q: "Can I sell ebooks on Bsb Market?",
    a: "Yes. Authors and creators can list ebooks and digital guides for sale, and buyers get an instant download after paying in the app.",
  },
  {
    q: "What are business pages and brand promotions?",
    a: "A business page lets you showcase your products and services, post updates and gain followers. Brand promotions connect businesses with ambassadors and influencers who get paid to promote them.",
  },
  {
    q: "Is Bsb Market free, and where do I get it?",
    a: "Yes. Downloading the app, creating an account and posting listings are free. Get Bsb Market on Google Play or the App Store and trade with anyone, from anywhere.",
  },
];

/** Full list for the /faq page (home questions first). */
export const allFaqs: { group: string; items: Faq[] }[] = [
  { group: "Getting started", items: homeFaqs },
  {
    group: "Buying and selling",
    items: [
      {
        q: "What can I buy and sell on Bsb Market?",
        a: "Goods (furniture, appliances, fashion), gadgets (phones, laptops), cars and motorcycles, spare parts and hardware (Panteka), real estate, ebooks, business shares, contracts, services and jobs.",
      },
      {
        q: "Does Bsb Market charge commission on sales?",
        a: "Downloading the app, creating an account, browsing and posting listings on Bsb Market are free. When a buyer pays for an item, the money moves from their Bsb wallet and is held by Bsb Market until they tap Received, then it is credited to the seller.",
      },
      {
        q: "How do I sell fast on Bsb Market?",
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
        q: "Can I find artisans and freelancers on Bsb Market?",
        a: "Yes. The Services category lists plumbers, electricians, cleaners, painters, photographers, designers, developers, tutors and many other professionals.",
      },
      {
        q: "Can employers post jobs on Bsb Market?",
        a: "Yes. Employers post full-time, part-time, remote and freelance jobs for free and chat with applicants directly.",
      },
      {
        q: "What is the networking feature on Bsb Market?",
        a: "Bsb Market is a social-business app. Besides trading, you can follow and connect with other businesses and professionals, join business groups and find partners.",
      },
    ],
  },
  {
    group: "App, safety and support",
    items: [
      {
        q: "Where can I download the Bsb Market app?",
        a: "The Bsb Market app is available for Android on Google Play. The iOS version is coming soon.",
      },
      {
        q: "How do I stay safe when trading on Bsb Market?",
        a: "Keep every chat and payment inside the Bsb Market app. In-app payments are held by Bsb Market until the buyer confirms delivery, every user is documented and every transaction is traceable. Payments made outside the app can't be traced, so report anyone who asks you to pay off the app. See our safety tips page for more.",
      },
      {
        q: "Who owns Bsb Market?",
        a: "Bsb Market is a product of Bsb Global Tech Ltd, a technology company registered in Nigeria with its office at 23 Urua Udofia, Uyo, Akwa Ibom State.",
      },
      {
        q: "How do I contact Bsb Market support?",
        a: "Email team@bsbmarket.com or use the contact form on our website. Support is available Monday to Saturday, 9:00 AM to 6:00 PM WAT.",
      },
    ],
  },
];

/** Local questions for the Uyo landing page. */
export const uyoFaqs: Faq[] = [
  {
    q: "Is Bsb Market based in Uyo?",
    a: "Yes. Bsb Market is built by Bsb Global Tech Ltd, headquartered at 23 Urua Udofia, Uyo, Akwa Ibom State, Nigeria.",
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
