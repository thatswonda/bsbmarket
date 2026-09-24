import type { Faq } from "@/lib/seo";
import { FEATURES } from "@/content/features";

/** Answers are 40–60 words and open with a direct answer so they can be quoted verbatim. */
export const GENERAL_FAQS: Faq[] = [
  {
    q: "What is Bsb Market?",
    a: "Bsb Market is a social-business space and digital marketplace app from Port Harcourt, Nigeria. In one app you can connect with people and businesses, buy and sell with escrow-protected payments, find jobs, book rides and dispatch, and book services. It is on Android via Google Play; iOS is coming soon.",
  },
  {
    q: "How does Bsb Market protect payments?",
    a: "Bsb Market protects payments with escrow. When you pay in the app, the money is held by Bsb Market instead of going straight to the seller or provider. It is released only after you confirm delivery. If there is a problem, Bsb Market Support reviews evidence from both sides first.",
  },
  {
    q: "Is Bsb Market free to use?",
    a: "Yes, signing up and browsing are free. During early-bird registration, posting product listings and applying for jobs cost 0 credits, and business profile verification is free. Bsb Market earns a commission or transaction fee on completed in-app payments, and the fee is always shown before you confirm a transaction.",
  },
  {
    q: "What can I sell on Bsb Market?",
    a: "You can sell any legal physical or digital product you own or are authorised to sell, including phones, gadgets, household goods, cars, spare parts, real estate, ebooks, contracts and business shares. Counterfeit, illegal, hazardous or infringing items are prohibited, and listings that break the Terms of Use are removed.",
  },
  {
    q: "Can I find a job on Bsb Market?",
    a: FEATURES.jobs.faqs[0]!.a,
  },
  {
    q: "How do rides and dispatch work on Bsb Market?",
    a: FEATURES.rides.faqs[1]!.a,
  },
  {
    q: "How do I get bookings for my business on Bsb Market?",
    a: FEATURES.bookings.faqs[1]!.a,
  },
  {
    q: "How do I book a service on Bsb Market?",
    a: FEATURES.bookings.faqs[0]!.a,
  },
  {
    q: "Is my data safe on Bsb Market?",
    a: "Bsb Market processes personal data in line with the Nigeria Data Protection Act 2023 and uses encryption and security controls to protect accounts. Passwords are stored encrypted, and you can request permanent account deletion at any time. The Privacy Policy explains what data is collected and why.",
  },
  {
    q: "Is Bsb Market available on iPhone?",
    a: "Bsb Market is currently available for Android on Google Play. The iOS app for iPhone is in development and coming soon. Until it launches, iPhone users can learn about the platform on bsbmarket.com and contact the team at team@bsbmarket.com with any questions.",
  },
  {
    q: "Who owns Bsb Market?",
    a: "Bsb Market is owned and operated by BSB Global Tech Ltd, a technology company incorporated in Nigeria and based in Port Harcourt. The company's mission is to make trade and business easier by connecting people with the goods, services, jobs and transport they need.",
  },
];

/** Short list shown on the homepage. */
export const HOME_FAQS: Faq[] = GENERAL_FAQS.slice(0, 8);
