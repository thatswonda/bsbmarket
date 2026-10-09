import type { Faq } from "@/content/categories";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  /** Bullet points, or numbered steps when `ordered` is true. */
  list?: string[];
  ordered?: boolean;
};

export type Guide = {
  slug: string;
  /** Short name used in links and breadcrumbs. */
  name: string;
  /** Visible page heading (H1). */
  heading: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  /** A direct, quotable answer shown at the top of the page (what AI overviews and featured snippets pick up). */
  quickAnswer: string;
  sections: GuideSection[];
  faqs: Faq[];
  /** Internal links shown under "Related". */
  related: { label: string; path: string }[];
  datePublished: string;
  dateModified: string;
};

export const guides: Guide[] = [
  {
    slug: "what-is-bsb-market",
    name: "What is Bsb Market?",
    heading: "What is Bsb Market?",
    metaTitle: "What Is Bsb Market? The All-in-One Marketplace App Explained",
    metaDescription:
      "Bsb Market is a free marketplace and social-business app from Nigeria for buying and selling, hiring services, finding jobs, property, cars and business networking. Here is how it works.",
    eyebrow: "Explained",
    lead: "A plain-English overview of Bsb Market: what it is, who it is for, what you can do on it and how it is different from other marketplace apps.",
    quickAnswer:
      "Bsb Market is a free, all-in-one online marketplace and social-business app built in Nigeria by Bsb Global Tech Ltd. On one app you can buy and sell goods, gadgets and cars, hire or offer services, find and post jobs, rent or buy property, find contracts and investment opportunities, and network with other businesses. It is available on Android through Google Play, with iOS coming soon.",
    sections: [
      {
        heading: "Bsb Market in one sentence",
        paragraphs: [
          "Bsb Market (often just called Bsb) is a marketplace where trade, hiring and business networking happen in the same app, so a seller can find buyers, a tradesperson can find customers and a business owner can find staff and partners without switching between different platforms.",
        ],
      },
      {
        heading: "What you can do on Bsb Market",
        list: [
          "Buy and sell new and used goods, from furniture and fashion to appliances.",
          "Buy and sell phones, laptops and other gadgets.",
          "Buy and sell cars, motorcycles and spare parts.",
          "Hire artisans and freelancers such as plumbers, electricians, designers and developers, or list your own services.",
          "Post jobs and hire staff, or find full-time, part-time, remote and freelance work.",
          "Rent, buy or sell houses, apartments, land and shops.",
          "Find contracts, promotions, business shares and ebooks.",
          "Follow and connect with businesses and professionals for networking and partnerships.",
        ],
      },
      {
        heading: "Who Bsb Market is for",
        paragraphs: [
          "Bsb Market is built for everyday buyers and sellers, small business owners, artisans, freelancers, job seekers, employers, landlords, agents and investors. It is based in Port Harcourt, Rivers State, and is open to users across Nigeria and around the world.",
        ],
      },
      {
        heading: "How Bsb Market is different",
        list: [
          "All-in-one: goods, services, jobs, property, cars, contracts and shares live in one app instead of several.",
          "Social-business features: you can follow businesses and build a professional network, not just post adverts.",
          "Local and global: browse what is near you or search further afield.",
          "Free to start: joining, browsing and posting listings cost nothing.",
        ],
      },
      {
        heading: "Who owns Bsb Market?",
        paragraphs: [
          "Bsb Market is a product of Bsb Global Tech Ltd, a technology company incorporated in Nigeria with its office in Port Harcourt, Rivers State. Support is available by email at team@bsbmarket.com, Monday to Saturday, 9:00 AM to 6:00 PM WAT.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does Bsb Market do?",
        a: "Bsb Market lets people buy and sell goods, hire and offer services, post and find jobs, trade property and cars, and network with businesses, all from one free app.",
      },
      {
        q: "Is Bsb Market free?",
        a: "Yes. Creating an account, browsing listings and posting listings on Bsb Market are free.",
      },
      {
        q: "Is Bsb Market a Nigerian company?",
        a: "Yes. Bsb Market is built by Bsb Global Tech Ltd, incorporated in Nigeria and headquartered in Port Harcourt, Rivers State.",
      },
      {
        q: "Is there a Bsb Market app?",
        a: "Yes. The Bsb Market app is available for Android on Google Play. The iOS version is coming soon.",
      },
    ],
    related: [
      { label: "How Bsb Market works", path: "/how-it-works" },
      { label: "Is Bsb Market legit?", path: "/guides/is-bsb-market-legit" },
      { label: "All categories", path: "/categories" },
      { label: "Download the app", path: "/download" },
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
  },
  {
    slug: "is-bsb-market-legit",
    name: "Is Bsb Market legit?",
    heading: "Is Bsb Market legit and safe to use?",
    metaTitle: "Is Bsb Market Legit? Company, Safety & How to Trade Safely",
    metaDescription:
      "Yes, Bsb Market is a real marketplace app run by Bsb Global Tech Ltd in Port Harcourt, Nigeria. See the company details, how the platform protects users and how to trade safely.",
    eyebrow: "Trust & safety",
    lead: "Before you download a marketplace app, it is sensible to check who runs it. Here are the facts about Bsb Market and the steps you can take to trade safely.",
    quickAnswer:
      "Yes. Bsb Market is a legitimate marketplace app operated by Bsb Global Tech Ltd, a company incorporated in Nigeria with its office in Port Harcourt, Rivers State. The app is published on Google Play, has public Terms of Use and a Privacy Policy written under Nigeria's Data Protection Act, and a support team you can reach at team@bsbmarket.com. As on any marketplace, individual users can be dishonest, so always meet in public, inspect before paying and never pay in advance to people you have not verified.",
    sections: [
      {
        heading: "Who is behind Bsb Market",
        list: [
          "Company: Bsb Global Tech Ltd, incorporated in Nigeria.",
          "Office: Port Harcourt, Rivers State, Nigeria.",
          "App: published on Google Play for Android; iOS coming soon.",
          "Support: team@bsbmarket.com, Monday to Saturday, 9:00 AM to 6:00 PM WAT.",
          "Policies: public Terms of Use and Privacy Policy on this website.",
        ],
      },
      {
        heading: "How Bsb Market protects users",
        list: [
          "Listings that break the Terms of Use can be removed, and accounts that pose a risk can be suspended.",
          "Users must be 18 or older to hold an account.",
          "You can report suspicious listings and users from the app or through the contact page.",
          "In-app chat keeps a record of what buyers and sellers agreed.",
          "Personal data is handled under the Nigeria Data Protection Act (NDPA), as set out in the Privacy Policy.",
        ],
      },
      {
        heading: "Signs of a scam to watch for",
        list: [
          "A price that is far below the market rate for the item.",
          "Pressure to pay a deposit or 'logistics fee' before you have seen the item.",
          "Requests to move the conversation off the app immediately.",
          "Anyone asking for your bank PIN, OTP or password, including people claiming to be Bsb Market staff.",
          "Employers who ask for money to give you a job or training.",
          "Fake payment alerts sent to sellers before money has actually arrived.",
        ],
      },
      {
        heading: "How to trade safely on Bsb Market",
        ordered: true,
        list: [
          "Check the seller's or provider's profile, photos and reviews.",
          "Keep your conversation inside the Bsb Market app.",
          "Meet in a busy public place during the day, and bring someone along for expensive items.",
          "Inspect and test the item before you pay.",
          "Sellers: confirm money has reached your account before releasing an item.",
          "Report anything suspicious to the Bsb Market team.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Bsb Market a real company?",
        a: "Yes. Bsb Market is run by Bsb Global Tech Ltd, a company incorporated in Nigeria with its office in Port Harcourt, Rivers State.",
      },
      {
        q: "Is Bsb Market safe?",
        a: "Bsb Market removes listings that break its rules, suspends risky accounts and lets you report suspicious users. Your safety also depends on how you trade, so meet in public, inspect before paying and never pay in advance to people you have not verified.",
      },
      {
        q: "Will Bsb Market staff ever ask for my password or OTP?",
        a: "No. Never share your password, bank PIN or OTP with anyone, including people who claim to work for Bsb Market.",
      },
      {
        q: "How do I report a scam on Bsb Market?",
        a: "Report the listing or user from the app, or contact the support team at team@bsbmarket.com with the details.",
      },
    ],
    related: [
      { label: "Safety tips", path: "/safety-tips" },
      { label: "Terms of Use", path: "/terms" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Contact support", path: "/contact" },
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
  },
  {
    slug: "how-to-sell-online-in-nigeria",
    name: "How to sell online in Nigeria",
    heading: "How to sell online in Nigeria: a step-by-step guide",
    metaTitle: "How to Sell Online in Nigeria (Step-by-Step Guide) | Bsb Market",
    metaDescription:
      "Learn how to sell online in Nigeria: choose what to sell, take good photos, price right, post a free listing on Bsb Market, chat with buyers and get paid safely.",
    eyebrow: "Seller guide",
    lead: "Whether you are clearing out items you no longer use or running a small business, this guide shows you how to start selling online in Nigeria and close deals quickly and safely.",
    quickAnswer:
      "To sell online in Nigeria: 1) decide what you will sell and check what similar items cost, 2) take clear photos in good light, 3) write a specific title and honest description, 4) set a fair price, 5) post a free listing on a marketplace app such as Bsb Market, 6) reply to buyers quickly, and 7) meet in a public place or confirm payment has reached your account before you hand over or ship the item.",
    sections: [
      {
        heading: "Step-by-step: selling on Bsb Market",
        ordered: true,
        list: [
          "Download the free Bsb Market app from Google Play and create your account.",
          "Tap 'Post' and choose the right category, such as Goods, Gadgets, Automobiles or Real Estate.",
          "Add 4 to 8 clear photos taken in daylight from different angles, including any defects.",
          "Write a specific title with brand, model, size or capacity, for example 'iPhone 13, 128GB, UK used, 88% battery'.",
          "Describe the condition honestly and include your location so nearby buyers can find you.",
          "Set your price. Check similar listings so your price is competitive.",
          "Publish the listing and reply to enquiries quickly through the in-app chat.",
          "Agree on payment and delivery, then complete the deal safely.",
        ],
      },
      {
        heading: "What sells well online in Nigeria",
        list: [
          "Phones, laptops, accessories and other gadgets.",
          "Fashion, shoes, bags and beauty products.",
          "Home appliances, furniture and kitchen items.",
          "Cars, motorcycles and spare parts.",
          "Food items, provisions and agricultural produce.",
          "Digital products such as ebooks and courses.",
          "Skills and services, from catering to web design.",
        ],
      },
      {
        heading: "Tips to sell faster",
        list: [
          "Photos sell: a clean background and natural light make a big difference.",
          "Be specific: buyers search for brand and model names, so include them in the title.",
          "Price fairly and say whether the price is negotiable.",
          "Respond within minutes when you can; fast replies win buyers.",
          "Keep your listing up to date and mark items as sold.",
          "Build trust with honest descriptions so buyers leave good reviews.",
        ],
      },
      {
        heading: "Getting paid safely",
        paragraphs: [
          "Let the buyer pay through the Bsb Market app. The money leaves their Bsb wallet and is held by Bsb Market, then credited to you as soon as the buyer receives the item and taps Received. Never accept bank transfers, cash deposits or screenshots of payment alerts outside the app: those payments can't be traced or protected. For deliveries to other cities, book a dispatch rider or courier and keep the tracking details in the order chat.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best way to sell online in Nigeria?",
        a: "Post your item on a marketplace app with good photos, a specific title, an honest description and a fair price, then reply to buyers quickly. Bsb Market lets you do this for free and also reach buyers through its business network.",
      },
      {
        q: "Is it free to sell on Bsb Market?",
        a: "Yes. Creating an account and posting listings on Bsb Market is free.",
      },
      {
        q: "Can I sell used items online in Nigeria?",
        a: "Yes. You can sell new and used items on Bsb Market. Describe the condition honestly and show any defects in your photos.",
      },
      {
        q: "How do I avoid fake payment alerts?",
        a: "Always confirm payment in your banking app or statement before you release an item. Screenshots and SMS alerts can be faked.",
      },
    ],
    related: [
      { label: "Buy and sell goods", path: "/categories/goods" },
      { label: "Sell phones and gadgets", path: "/categories/gadgets" },
      { label: "Safety tips", path: "/safety-tips" },
      { label: "How Bsb Market works", path: "/how-it-works" },
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
  },
  {
    slug: "how-to-hire-artisans-in-nigeria",
    name: "How to hire trusted artisans",
    heading: "How to find and hire trusted artisans in Nigeria",
    metaTitle: "How to Find Trusted Artisans Near You in Nigeria | Bsb Market",
    metaDescription:
      "Find reliable plumbers, electricians, carpenters, painters, AC technicians and cleaners near you. Learn how to compare artisans, agree on price and avoid bad jobs.",
    eyebrow: "Hiring guide",
    lead: "A reliable plumber, electrician or carpenter is worth a lot. Here is how to find artisans near you, check their work and agree on a fair price before the job starts.",
    quickAnswer:
      "To hire a trusted artisan in Nigeria, search a services marketplace such as Bsb Market for the trade you need in your area, compare a few providers by their photos of past work and reviews, describe the job clearly, get a quote that covers labour and materials, agree on the scope and timeline in writing in the app chat, and pay in stages as the work is completed.",
    sections: [
      {
        heading: "Artisans you can find on Bsb Market",
        list: [
          "Plumbers and borehole technicians",
          "Electricians, solar and inverter installers",
          "Carpenters, furniture makers and upholsterers",
          "Painters, POP and tiling specialists",
          "AC, fridge and generator repairers",
          "Cleaners, fumigators and laundry services",
          "Mechanics, vulcanisers and auto electricians",
          "Tailors, hairstylists, make-up artists and caterers",
        ],
      },
      {
        heading: "How to hire an artisan, step by step",
        ordered: true,
        list: [
          "Open the Services category in the Bsb Market app and search for the trade you need.",
          "Filter or browse by location to find providers near you.",
          "Compare two or three providers: look at photos of past jobs, reviews and how clearly they describe their work.",
          "Message them with details of the job, including photos of the problem if possible.",
          "Ask for a quote that separates labour from materials.",
          "Agree on the scope, timeline and price in the app chat so there is a record.",
          "For bigger jobs, pay in milestones rather than everything upfront.",
          "Check the work before the final payment and leave an honest review.",
        ],
      },
      {
        heading: "Questions to ask before you hire",
        list: [
          "Have you done this type of job before? Can I see photos?",
          "Does your price include materials and transport?",
          "How long will the job take?",
          "Do you offer any guarantee if something goes wrong after the job?",
        ],
      },
      {
        heading: "Are you an artisan? Get more customers",
        paragraphs: [
          "List your services on Bsb Market for free. Add clear photos of your best work, describe exactly what you do and the areas you cover, respond to enquiries quickly and ask happy customers to leave reviews. Good reviews are the fastest way to win more jobs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where can I find a good plumber or electrician near me?",
        a: "Open the Services category on the Bsb Market app and search for plumbers or electricians in your area. Compare providers by photos of past work and reviews before you hire.",
      },
      {
        q: "How much should I pay an artisan?",
        a: "Prices vary by job, location and materials. Ask two or three providers for a quote that separates labour from materials, and agree on the final price before work starts.",
      },
      {
        q: "Should I pay an artisan upfront?",
        a: "Pay through the Bsb Market app so the payment is secure and traceable. For contract work, one party initiates the payment inside the chat and the other completes it from their end. For larger jobs, agree on milestones in the chat, such as a part payment for materials and the balance once the work is finished and checked.",
      },
      {
        q: "Can artisans advertise on Bsb Market for free?",
        a: "Yes. Artisans and freelancers can list their services on Bsb Market for free.",
      },
    ],
    related: [
      { label: "Services category", path: "/categories/services" },
      { label: "Contracts category", path: "/categories/contracts" },
      { label: "Safety tips", path: "/safety-tips" },
      { label: "Buy and sell in Uyo", path: "/buy-and-sell-in-uyo" },
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
  },
  {
    slug: "how-to-find-jobs-in-nigeria",
    name: "How to find jobs in Nigeria",
    heading: "How to find a job in Nigeria (and avoid job scams)",
    metaTitle: "How to Find a Job in Nigeria Fast – Local & Remote | Bsb Market",
    metaDescription:
      "Practical tips to find full-time, part-time, remote and freelance jobs in Nigeria, apply directly to employers on Bsb Market and spot fake job offers.",
    eyebrow: "Job seeker guide",
    lead: "Finding work takes effort, but the right approach makes it faster. Here is how to search for jobs in Nigeria, apply directly to employers and steer clear of job scams.",
    quickAnswer:
      "To find a job in Nigeria, prepare a short, up-to-date CV, search job listings on platforms such as the Jobs category on Bsb Market, apply directly to employers with a tailored message, follow up politely, and build your network with businesses in your field. Never pay money to get a job: genuine employers do not charge application or training fees.",
    sections: [
      {
        heading: "Step-by-step: finding a job on Bsb Market",
        ordered: true,
        list: [
          "Download the free Bsb Market app and complete your profile.",
          "Open the Jobs category and browse by type (full-time, part-time, remote, freelance or internship) and location.",
          "Read each job description carefully and only apply for roles that match your skills.",
          "Message the employer directly with a short introduction and your CV.",
          "Follow businesses in your field so you see new openings first.",
          "Prepare for interviews and attend them at an official office or public place.",
        ],
      },
      {
        heading: "Jobs you can find",
        list: [
          "Sales, marketing and customer service",
          "Tech: software development, IT support, data and design",
          "Admin, accounting and office roles",
          "Drivers, security, domestic staff and hospitality",
          "Remote and freelance work you can do from anywhere",
          "Internships and part-time roles for students",
        ],
      },
      {
        heading: "Tips to get hired faster",
        list: [
          "Keep your CV to one or two pages and lead with your strongest skills.",
          "Tailor your message to each job and mention the role by name.",
          "Show proof of work: a portfolio, certificates or references.",
          "Use your network; many jobs are filled through referrals.",
          "Offer your skills as a service while you search, to earn and build experience.",
        ],
      },
      {
        heading: "How to spot a fake job offer",
        list: [
          "You are asked to pay for a form, training, uniform or 'processing'.",
          "The salary is unusually high for the role and requires no experience.",
          "The interview location is a private residence or keeps changing.",
          "The employer will not give a company name, address or official contact.",
        ],
      },
      {
        heading: "Employers: hire staff on Bsb Market",
        paragraphs: [
          "Post job openings for free in the Jobs category. List the role, location, requirements and pay range clearly, then chat with applicants directly and invite the best ones for interviews.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where can I find jobs in Nigeria?",
        a: "You can find jobs on job platforms and marketplace apps such as the Jobs category on Bsb Market, through company websites and through your professional network.",
      },
      {
        q: "Can I find remote jobs on Bsb Market?",
        a: "Yes. Bsb Market lists remote and freelance roles alongside local full-time and part-time jobs.",
      },
      {
        q: "Should I pay to get a job?",
        a: "No. Genuine employers do not ask for application, training or processing fees. Treat any such request as a warning sign and report it.",
      },
      {
        q: "Can employers post jobs for free on Bsb Market?",
        a: "Yes. Employers post job openings on Bsb Market for free and chat with candidates directly.",
      },
    ],
    related: [
      { label: "Jobs category", path: "/categories/jobs" },
      { label: "Offer your services", path: "/categories/services" },
      { label: "Safety tips", path: "/safety-tips" },
      { label: "Download the app", path: "/download" },
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
  },
  {
    slug: "how-to-buy-a-used-car-in-nigeria",
    name: "How to buy a used car safely",
    heading: "How to buy a used car in Nigeria safely",
    metaTitle: "How to Buy a Used Car in Nigeria: Checklist & Tips | Bsb Market",
    metaDescription:
      "A practical checklist for buying a used (Nigerian or foreign used) car: set a budget, inspect with a mechanic, verify papers and chassis number, and pay safely.",
    eyebrow: "Car buyer guide",
    lead: "Buying a used car is one of the biggest purchases most people make. This checklist helps you choose well, inspect properly and avoid paying for a car with problems or bad papers.",
    quickAnswer:
      "To buy a used car safely in Nigeria: set a budget that includes registration and repairs, compare listings for the same model, inspect the car in daylight with a trusted mechanic, test-drive it, verify that the vehicle papers and chassis (VIN) number match the car and the seller's identity, and pay only through the Bsb Market app after you have checked everything, so the payment is protected and traceable, with a signed sale agreement for your records.",
    sections: [
      {
        heading: "Before you look at cars",
        list: [
          "Set a total budget that covers the price, registration or change of ownership, insurance and early repairs.",
          "Decide between foreign used (tokunbo) and Nigerian used, and compare typical prices for your chosen model.",
          "Pick models with good parts availability; spare parts are easier to find for popular brands.",
        ],
      },
      {
        heading: "Inspection checklist",
        list: [
          "Inspect in daylight, not at night or in the rain.",
          "Check for rust, repainting and uneven gaps that suggest accident repairs.",
          "Look for flood damage: damp smells, rust under seats or water marks.",
          "Check the engine for leaks, smoke and unusual noises; start it from cold.",
          "Test the gearbox, brakes, steering, AC and all electrics on a test drive.",
          "Bring a trusted mechanic, and use a diagnostic scanner if possible.",
        ],
      },
      {
        heading: "Papers to verify",
        list: [
          "Proof of ownership and vehicle licence in the seller's name, or a clear chain of sale.",
          "Customs papers for foreign used cars.",
          "Chassis (VIN) and engine numbers that match the papers.",
          "Roadworthiness certificate and insurance where applicable.",
          "A signed receipt or sale agreement with both parties' details.",
        ],
      },
      {
        heading: "Buying a car on Bsb Market",
        ordered: true,
        list: [
          "Browse the Automobiles category in the Bsb Market app.",
          "Shortlist cars with clear photos, mileage, year and location.",
          "Message sellers through the app and ask for more photos or videos.",
          "Arrange an inspection in a safe, public place or at a mechanic's workshop.",
          "Verify the papers, agree on the price and pay safely.",
        ],
      },
    ],
    faqs: [
      {
        q: "What should I check before buying a used car in Nigeria?",
        a: "Check the body for accident or flood damage, the engine and gearbox, and test-drive the car with a mechanic. Verify the ownership papers, customs papers and that the chassis number matches.",
      },
      {
        q: "Is it better to buy a foreign used or Nigerian used car?",
        a: "Foreign used cars often have fewer local road miles but cost more; Nigerian used cars are usually cheaper but need closer inspection. Either can be a good buy if it passes a mechanic's inspection and the papers are genuine.",
      },
      {
        q: "Can I buy and sell cars on Bsb Market?",
        a: "Yes. The Automobiles category on Bsb Market lists cars, motorcycles and other vehicles for sale, and Panteka lists fairly used items, including used parts.",
      },
      {
        q: "How do I pay safely for a used car?",
        a: "Pay only after inspection and verification, preferably by traceable bank transfer, and get a signed receipt or sale agreement.",
      },
    ],
    related: [
      { label: "Automobiles category", path: "/categories/automobiles" },
      { label: "Panteka: fairly used items", path: "/categories/panteka" },
      { label: "Safety tips", path: "/safety-tips" },
      { label: "How to sell online", path: "/guides/how-to-sell-online-in-nigeria" },
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
  },
];

export const getGuide = (slug: string | undefined) => guides.find((g) => g.slug === slug);
