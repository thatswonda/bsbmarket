import type { Faq } from "@/lib/seo";

/**
 * Copy for the dedicated feature landing pages (/marketplace, /jobs, /rides, /bookings).
 *
 * Writing rules (these pages are written to be quoted by Google AI Overviews and LLMs):
 *  - The first sentence under every heading directly answers the heading.
 *  - State facts plainly; avoid superlatives and marketing filler.
 *  - Payment, refund and fee facts must match src/routes/terms.tsx.
 *
 * REVIEW: the ride/dispatch and bookings flows describe the in-app experience at a high
 * level. Confirm every step matches the live app before relying on it.
 */

export type FeatureKey = "marketplace" | "jobs" | "rides" | "bookings";

export type FeatureSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Feature = {
  key: FeatureKey;
  path: `/${FeatureKey}`;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  /** One or two sentence direct answer shown directly under the H1. */
  answer: string;
  quickFacts: string[];
  stepsHeading: string;
  steps: { title: string; text: string }[];
  sections: FeatureSection[];
  faqs: Faq[];
  service: { name: string; serviceType: string; description: string };
  cardSummary: string;
};

export const FEATURES: Record<FeatureKey, Feature> = {
  marketplace: {
    key: "marketplace",
    path: "/marketplace",
    navLabel: "Marketplace",
    title: "Buy & Sell Online in Nigeria with Escrow | Bsb Market",
    description:
      "Buy and sell gadgets, goods, cars, property and digital products on Bsb Market, the Nigerian digital marketplace with escrow payments that protect both sides.",
    h1: "Bsb Market Marketplace: buy and sell in Nigeria with escrow-protected payments",
    answer:
      "The Bsb Market marketplace is a mobile app where people and businesses in Nigeria list and buy physical goods and digital products. Payments are made inside the app and held in escrow until the buyer confirms the order, so sellers get paid and buyers are protected.",
    quickFacts: [
      "Categories include gadgets, goods, automobiles, real estate, spare parts (Panteka), ebooks, contracts and business shares.",
      "All payments must go through the in-app payment system; off-platform payments are not protected.",
      "Buyers can report a problem within 3 days of receiving a product.",
      "Listing products costs 0 credits during early-bird registration.",
    ],
    stepsHeading: "How buying and selling works on Bsb Market",
    steps: [
      {
        title: "Post a listing",
        text: "Sellers tap Post, add photos, a price, a description and a location, then publish.",
      },
      {
        title: "Buyer pays in-app",
        text: "The buyer pays through Bsb Market. The money is held in escrow, not sent to the seller yet.",
      },
      {
        title: "Seller delivers",
        text: "The seller ships, dispatches or hands over the item as described in the listing.",
      },
      {
        title: "Buyer confirms, seller is paid",
        text: "Once the buyer confirms receipt, the funds are released to the seller's Bsb Market wallet.",
      },
    ],
    sections: [
      {
        h2: "What can I sell on Bsb Market?",
        paragraphs: [
          "You can sell any legal physical or digital product you own or are authorised to sell. Popular categories are phones and gadgets, home goods, cars and auto parts, real estate, generator and plumbing parts, ebooks, business contracts and equity shares.",
          "Counterfeit, illegal, hazardous or infringing products are prohibited, and Bsb Market removes listings that break its Terms of Use without notice.",
        ],
      },
      {
        h2: "How does Bsb Market protect buyers and sellers?",
        paragraphs: [
          "Bsb Market protects both sides by holding the buyer's payment in escrow until the order is confirmed. The seller can see that the buyer has paid before sending anything, and the buyer knows the seller only receives the money after delivery.",
          "Listings are screened, sellers can verify their business profile, and every buyer can rate and review the seller after a transaction.",
        ],
        bullets: [
          "Pay only inside the app — Bsb Market cannot help with money sent outside the platform.",
          "Check the seller's ratings, reviews and verification badge before you buy.",
          "Report a faulty or not-as-described product within 3 days of receiving it.",
        ],
      },
      {
        h2: "What happens if an item is not as described?",
        paragraphs: [
          "If a product is defective or not as described, the buyer reports it to Bsb Market Support within 3 days of receipt, with photos or other evidence. If Support approves the refund, it issues a Refund Tag (RF-TAG).",
          "The buyer then returns the unused item in its original packaging within 5 days of receiving the RF-TAG and receives 80% of the purchase price back to their Bsb Market wallet or original payment method. The remaining 20% covers the platform handling and processing fee.",
        ],
      },
      {
        h2: "How much does it cost to sell on Bsb Market?",
        paragraphs: [
          "Registering and posting listings is free during early-bird registration (0 credits per listing). Bsb Market charges a commission or transaction fee on completed in-app sales, and the fee is shown before the transaction is confirmed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Bsb Market a safe place to buy and sell in Nigeria?",
        a: "Yes, when you pay inside the app. Bsb Market holds the buyer's payment in escrow and only releases it to the seller after the buyer confirms delivery. Listings are screened, sellers can be verified and rated, and problems can be reported to Bsb Market Support within 3 days of receiving a product.",
      },
      {
        q: "What can I sell on Bsb Market?",
        a: "You can sell legal physical and digital products you own, including phones, gadgets, household goods, cars, spare parts, real estate, ebooks, contracts and business shares. Counterfeit, illegal, hazardous or copyright-infringing items are prohibited, and listings that break the Terms of Use are removed.",
      },
      {
        q: "How do I get paid as a seller on Bsb Market?",
        a: "The buyer pays through the Bsb Market app and the money is held in escrow. After you deliver and the buyer confirms receipt, the payment, minus Bsb Market's disclosed commission, is released to your Bsb Market wallet. Never accept payment outside the app, because those transactions are not protected.",
      },
      {
        q: "Can I get a refund on Bsb Market?",
        a: "Yes, for product purchases. Report the issue to Bsb Market Support within 3 days of receiving the item. If approved, you get a Refund Tag (RF-TAG), return the unused item within 5 days, and receive 80% of the price back. The other 20% is a non-refundable handling fee.",
      },
    ],
    service: {
      name: "Bsb Market Marketplace",
      serviceType: "Online marketplace with escrow payments",
      description:
        "Mobile marketplace in Nigeria for buying and selling physical and digital products, with in-app escrow payments released to the seller after the buyer confirms delivery.",
    },
    cardSummary:
      "Buy and sell goods, gadgets, cars, property and digital products with escrow-protected payments.",
  },

  jobs: {
    key: "jobs",
    path: "/jobs",
    navLabel: "Jobs",
    title: "Find Jobs Online in Nigeria & Hire Talent | Bsb Market Jobs",
    description:
      "Find jobs and gig work in Nigeria on Bsb Market. Apply free for full-time, part-time and remote roles, or post vacancies and hire contractors paid via escrow.",
    h1: "Bsb Market Jobs: find jobs and gig work in Nigeria, or hire talent",
    answer:
      "Bsb Market Jobs is the part of the Bsb Market app where businesses post job vacancies and job seekers apply for them. It also lets skilled workers offer freelance and gig services that clients pay for through escrow, so they are paid once the work is done.",
    quickFacts: [
      "Applying for jobs costs 0 credits during early-bird registration.",
      "Employers must post genuine, accurate vacancies; misleading or scam listings are removed.",
      "Freelancers and contractors are paid through the in-app payment system.",
      "Roles include full-time, part-time, remote, sales, driving, design and technical work.",
    ],
    stepsHeading: "How finding a job on Bsb Market works",
    steps: [
      {
        title: "Create your profile",
        text: "Add your skills, experience, qualifications, location and a short portfolio.",
      },
      {
        title: "Search vacancies",
        text: "Browse jobs near you or remote roles, filtered by category and location.",
      },
      {
        title: "Apply in the app",
        text: "Apply directly and message the employer inside Bsb Market.",
      },
      {
        title: "Get hired or paid",
        text: "Employers contact shortlisted candidates; gig clients pay through escrow when the job is done.",
      },
    ],
    sections: [
      {
        h2: "Can I find a job on Bsb Market?",
        paragraphs: [
          "Yes. Businesses and individuals post job vacancies on Bsb Market, and you can apply from the app. Listings cover full-time, part-time and remote roles such as software development, sales, graphic design, driving, cleaning and skilled trades.",
          "During early-bird registration, applying for jobs costs 0 credits.",
        ],
      },
      {
        h2: "How are job posts checked on Bsb Market?",
        paragraphs: [
          "Every employer agrees that its vacancy is genuine, accurate and lawful before posting, and must handle applicant data under Nigerian data protection law. Bsb Market screens listings and removes vacancies that are misleading, fraudulent or used for unlawful recruitment.",
          "A legitimate employer will never ask you to pay to be hired. If one does, report the listing in the app.",
        ],
      },
      {
        h2: "Is Bsb Market a gig work app?",
        paragraphs: [
          "Yes. Skilled workers can register as contractors and offer services such as plumbing, electrical work, cleaning, design, photography and web development. Clients hire them in the app and pay through the in-app payment system, which holds the money until the job is completed.",
          "Contractors must describe their skills honestly and deliver work professionally and on time. Clients rate contractors after each job, so good work builds a visible track record.",
        ],
      },
      {
        h2: "How do I hire on Bsb Market?",
        paragraphs: [
          "To hire, post a vacancy with the role, location, pay and requirements, or search contractor profiles and message them directly. Payments for contract work must be made inside Bsb Market to stay protected.",
        ],
        bullets: [
          "Post permanent roles as job vacancies.",
          "Hire contractors for one-off or short-term gigs.",
          "Check ratings, reviews and verification before you hire.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I find a job on Bsb Market?",
        a: "Yes. Businesses post full-time, part-time and remote vacancies on Bsb Market, and you apply directly in the app. During early-bird registration, applying for jobs costs 0 credits. You can also offer freelance or gig services and get paid through Bsb Market's protected in-app payments.",
      },
      {
        q: "Are jobs on Bsb Market real?",
        a: "Employers must confirm every vacancy is genuine, accurate and lawful before posting. Bsb Market screens listings and removes misleading or fraudulent ones. A real employer will never ask you to pay to be hired; if anyone does, report the listing in the app and stop contact.",
      },
      {
        q: "How do freelancers get paid on Bsb Market?",
        a: "Clients pay for contract work through Bsb Market's in-app payment system. The payment is held until the job is completed, then released to the contractor's Bsb Market wallet minus the disclosed commission. Payments made outside the app are not protected and Bsb Market cannot recover them.",
      },
      {
        q: "How do I post a job on Bsb Market?",
        a: "Open the Bsb Market app, tap Post, choose Jobs, and enter the job title, location, pay, requirements and how to apply. Your listing must be genuine and accurate. Applicants can then apply and message you inside the app, and you can review their profiles and ratings.",
      },
    ],
    service: {
      name: "Bsb Market Jobs",
      serviceType: "Job board and gig work marketplace",
      description:
        "Job vacancy listings and freelance gig marketplace in Nigeria, where employers post roles, job seekers apply for free during early-bird registration, and contractors are paid through escrow.",
    },
    cardSummary:
      "Apply for jobs and gig work for free, or post vacancies and hire verified contractors.",
  },

  rides: {
    key: "rides",
    path: "/rides",
    navLabel: "Rides & Dispatch",
    title: "Ride Booking & Dispatch Delivery App in Nigeria | Bsb Market",
    description:
      "Book rides and dispatch riders in Nigeria with Bsb Market. Request a trip or a package delivery, confirm the price, pay in-app and track it to completion.",
    h1: "Bsb Market Rides & Dispatch: book a ride or send a package in Nigeria",
    answer:
      "Bsb Market Rides & Dispatch lets you book a driver for a trip or a dispatch rider to deliver a package from inside the Bsb Market app. You enter pickup and drop-off points, confirm the price, and pay in-app, and the payment is completed when the trip or delivery is done.",
    quickFacts: [
      "One app for passenger rides and package dispatch.",
      "Sellers on the Bsb Market marketplace can use dispatch to deliver orders to buyers.",
      "Payments are made in-app, not in cash to unknown parties.",
      "Drivers and riders are rated after every trip.",
    ],
    stepsHeading: "How booking a ride or dispatch works",
    steps: [
      {
        title: "Enter pickup and drop-off",
        text: "Choose Ride for yourself or Dispatch for a package, then set both addresses.",
      },
      {
        title: "Confirm the price",
        text: "Review the trip or delivery price and details before you confirm the request.",
      },
      {
        title: "Driver or rider accepts",
        text: "A nearby driver or dispatch rider accepts and heads to the pickup point.",
      },
      {
        title: "Complete and rate",
        text: "The payment completes when the trip or delivery is done, and you rate the driver or rider.",
      },
    ],
    sections: [
      {
        h2: "Does Bsb Market offer ride or dispatch booking?",
        paragraphs: [
          "Yes. Bsb Market includes ride booking for people and dispatch booking for packages in the same app you use to buy, sell and hire. You do not need a separate ride-hailing or courier app.",
        ],
      },
      {
        h2: "How do dispatch deliveries work on Bsb Market?",
        paragraphs: [
          "To send a package, choose Dispatch, enter the pickup and delivery addresses and a short description of the item, then confirm the price. A dispatch rider collects the package and delivers it to the recipient.",
          "Marketplace sellers can book dispatch for an order so the buyer receives it quickly, and the buyer then confirms receipt to release the seller's escrow payment.",
        ],
      },
      {
        h2: "How are drivers and riders kept accountable?",
        paragraphs: [
          "Drivers and dispatch riders operate under Bsb Market's Terms of Use, and customers rate them after every trip or delivery. Payment happens in the app, so there is a record of every job that Bsb Market Support can review if something goes wrong.",
        ],
        bullets: [
          "Only pay through the app so the trip is recorded.",
          "Check the driver or rider's rating before the trip starts.",
          "Report safety or delivery issues to Bsb Market Support in the app or at team@bsbmarket.com.",
        ],
      },
      {
        h2: "Can I earn as a driver or dispatch rider on Bsb Market?",
        paragraphs: [
          "Yes. Drivers and riders can offer their services on Bsb Market and receive trip and delivery requests from customers and marketplace sellers. Earnings are paid through the in-app payment system after each completed job, minus the disclosed platform fee.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Bsb Market offer ride or dispatch booking?",
        a: "Yes. Bsb Market lets you book a ride for yourself or a dispatch rider for a package inside the same app you use to buy, sell and hire. Enter the pickup and drop-off addresses, confirm the price, pay in-app, and rate the driver or rider when the trip or delivery is complete.",
      },
      {
        q: "How do rides and dispatch work on Bsb Market?",
        a: "Choose Ride or Dispatch, set pickup and drop-off points, and confirm the price. A nearby driver or rider accepts the request and completes the trip or delivery. Payment is handled in the app, which keeps a record of every job that Bsb Market Support can review if there is a problem.",
      },
      {
        q: "Can Bsb Market sellers use dispatch to deliver orders?",
        a: "Yes. Marketplace sellers can book a dispatch rider to deliver an order to the buyer. When the buyer receives the item and confirms it matches the listing, the escrow payment for the order is released to the seller's Bsb Market wallet.",
      },
      {
        q: "Can I work as a driver or dispatch rider on Bsb Market?",
        a: "Yes. Drivers and dispatch riders can offer their services on Bsb Market and receive requests from customers and marketplace sellers. Earnings are paid through the in-app payment system after each completed job, minus the platform fee shown in the app.",
      },
    ],
    service: {
      name: "Bsb Market Rides & Dispatch",
      serviceType: "Ride booking and dispatch delivery",
      description:
        "In-app ride booking and package dispatch delivery in Nigeria, with prices confirmed before booking and payments handled inside the Bsb Market app.",
    },
    cardSummary:
      "Book a ride or a dispatch rider for packages and marketplace orders, paid in-app.",
  },

  bookings: {
    key: "bookings",
    path: "/bookings",
    navLabel: "Bookings",
    title: "Service Booking App for Nigerian Businesses | Bsb Market",
    description:
      "Book local services or take paid bookings for your business in Nigeria with Bsb Market. Customers pick a service and time, pay in-app, and you manage it all.",
    h1: "Bsb Market Bookings: book services and get bookings for your business in Nigeria",
    answer:
      "Bsb Market Bookings lets customers in Nigeria book services from businesses and professionals — such as salons, spas, photographers, fitness trainers, cleaners and technicians — inside the Bsb Market app. Businesses list their services and prices, receive booking requests, and get paid through the in-app payment system.",
    quickFacts: [
      "Business profile verification is free during early-bird registration.",
      "Customers pay in-app when they book, so businesses see confirmed, paid bookings.",
      "Popular categories: beauty and spa, photography and events, fitness, home services and tech.",
      "Customers rate the business after every completed booking.",
    ],
    stepsHeading: "How a service booking works on Bsb Market",
    steps: [
      {
        title: "Choose a service",
        text: "Browse businesses by category and location, and compare prices and reviews.",
      },
      {
        title: "Pick a date and time",
        text: "Select an available slot and add any notes for the business.",
      },
      {
        title: "Pay in-app",
        text: "Pay through Bsb Market; the booking is sent to the business as confirmed.",
      },
      {
        title: "Get served and review",
        text: "The business delivers the service, the payment is released, and you leave a review.",
      },
    ],
    sections: [
      {
        h2: "How do I book a service on Bsb Market?",
        paragraphs: [
          "Open the Bsb Market app, search or browse for the service you need, choose a business, pick an available date and time, and pay in the app. The business receives your booking and you can message them directly about details.",
        ],
      },
      {
        h2: "How do I get bookings for my business on Bsb Market?",
        paragraphs: [
          "Create a business profile, verify it (free during early-bird registration), and list each service with a price, duration and description. Customers find your business by category and location, book an available slot and pay in-app.",
          "Every completed booking can earn a rating and review, which helps your business rank higher and win more customers.",
        ],
        bullets: [
          "Accept, reschedule or decline booking requests from one place.",
          "Message customers before the appointment to confirm details.",
          "Receive payments in your Bsb Market wallet after the service is completed.",
        ],
      },
      {
        h2: "Which businesses can take bookings on Bsb Market?",
        paragraphs: [
          "Any legitimate service business or independent professional can take bookings on Bsb Market. Common examples are hair and beauty salons, spas, photographers and event coverage, fitness trainers, cleaners, plumbers, electricians, app designers and web developers.",
        ],
      },
      {
        h2: "How are booking payments protected?",
        paragraphs: [
          "Customers pay when they book, through Bsb Market's in-app payment system, so businesses do not chase payments and customers do not pay strangers directly. Payments made outside the app are not protected, and Bsb Market cannot mediate them.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I book a service on Bsb Market?",
        a: "Open the Bsb Market app, find the service by category or location, choose a business based on price and reviews, pick an available date and time, and pay in-app. The business receives a confirmed booking, and you can message them about details. After the service, you leave a rating and review.",
      },
      {
        q: "How do I get bookings for my business on Bsb Market?",
        a: "Create a business profile, verify it for free during early-bird registration, and list each service with its price and duration. Customers in your area find your business, book an available slot and pay in-app. You manage requests in the app and receive payment in your Bsb Market wallet.",
      },
      {
        q: "What kinds of services can be booked on Bsb Market?",
        a: "Customers can book beauty and spa treatments, photography and event coverage, fitness sessions, home cleaning, plumbing, electrical work, interior design, app design and web development. Any legitimate service business or independent professional in Nigeria can list services and take bookings on Bsb Market.",
      },
      {
        q: "Is it free for businesses to list services on Bsb Market?",
        a: "Creating an account is free, and business profile verification is free during early-bird registration. Bsb Market charges a commission or transaction fee on completed in-app payments, and the applicable fee is always shown before a transaction is confirmed or in your account settings.",
      },
    ],
    service: {
      name: "Bsb Market Bookings",
      serviceType: "Online service booking for businesses",
      description:
        "Service booking platform in Nigeria where customers book and pay for services from salons, spas, photographers, trainers and other professionals, and businesses manage bookings in the Bsb Market app.",
    },
    cardSummary:
      "Book salons, spas, photographers and pros — or take paid bookings for your business.",
  },
};

export const FEATURE_LIST: Feature[] = [
  FEATURES.marketplace,
  FEATURES.jobs,
  FEATURES.rides,
  FEATURES.bookings,
];
