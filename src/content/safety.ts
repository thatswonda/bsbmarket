/** How payments work in the app. Shared by the home page trust section and the /safety-tips page. */
export type PaymentFlow = {
  key: "items" | "property" | "contracts";
  label: string;
  title: string;
  summary: string;
  steps: string[];
  note?: string;
};

export const paymentFlows: PaymentFlow[] = [
  {
    key: "items",
    label: "Buying items",
    title: "Money held until you tap Received",
    summary:
      "When you buy an item, the payment leaves your Bsb wallet but is not credited to the seller. Bsb Market holds it until you receive the item and tap Received.",
    steps: [
      "You pay from your Bsb wallet",
      "Bsb Market holds the payment. The seller isn't credited yet",
      "Your item arrives and you tap Received",
      "The seller is credited",
    ],
  },
  {
    key: "property",
    label: "Property",
    title: "Four steps, checked by both sides",
    summary:
      "Buying property follows a set process. The buyer and the seller each check every step in the app, and payment is released only at the end.",
    steps: ["Contact the seller", "Schedule an inspection", "Complete the documentation", "Release payment"],
    note: "Buyer and seller each tick every step before payment moves.",
  },
  {
    key: "contracts",
    label: "Contracts",
    title: "Payments that live in the chat",
    summary:
      "For contracts, one party initiates the payment inside the chat and the other party completes it from their end, so the payment is tied to the conversation where the deal was agreed.",
    steps: [
      "Agree on the job and price in the chat",
      "One party initiates the payment in the chat",
      "The other party completes it from their end",
    ],
    note: "Every contract payment stays on record with the conversation.",
  },
];

export const safetyTips: { heading: string; tips: string[] }[] = [
  {
    heading: "Tips for buyers",
    tips: [
      "Pay only inside the Bsb Market app, from your Bsb wallet. Never pay a seller by bank transfer, cash deposit or another app.",
      "Tap Received only when the item is in your hands and matches the listing. Tapping Received is what credits the seller.",
      "Keep every conversation in the app chat so there is a record of what was agreed.",
      "For phones and laptops, check the device works and isn't iCloud or Google locked before you tap Received.",
    ],
  },
  {
    heading: "Tips for sellers",
    tips: [
      "Only send items for orders paid in the app. A screenshot, SMS alert or transfer outside the app is not a Bsb Market payment.",
      "You are credited as soon as the buyer taps Received, so describe the item honestly and package it well to avoid disputes.",
      "Book a dispatch rider through the app so the delivery is recorded alongside the order.",
      "Never share your PIN, OTP or password with anyone, including people claiming to be Bsb Market staff.",
    ],
  },
  {
    heading: "Property",
    tips: [
      "Follow all four steps in the app: contact the seller, schedule the inspection, complete the documentation, then release payment.",
      "Only tick the inspection step after you have physically visited the property.",
      "Only tick the documentation step after you have checked the title documents, survey plan and receipts.",
    ],
  },
  {
    heading: "Contracts, jobs and services",
    tips: [
      "Agree on the scope, timeline and price in the chat before work starts.",
      "Initiate or complete contract payments only inside the chat, never through a separate transfer.",
      "Genuine employers don't charge application or training fees. Report any job post that asks for money to hire you.",
    ],
  },
];
