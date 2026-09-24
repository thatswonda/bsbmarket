import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, DownloadCta } from "@/components/PageLayout";
import FaqList from "@/components/FaqList";
import { FEATURE_LIST } from "@/content/features";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  pageHead,
  webPageSchema,
  type Faq,
} from "@/lib/seo";

const PATH = "/how-it-works";
const TITLE = "How Bsb Market Escrow Payments Work (Step by Step)";
const DESCRIPTION =
  "How escrow works on Bsb Market, Nigeria's escrow payment app: Bsb Market holds your payment until delivery is confirmed. Disputes, refunds and fees explained.";

const STEPS = [
  {
    name: "Agree on the deal in the app",
    text: "The buyer finds a product, job, ride or service on Bsb Market and agrees the price and details with the seller or provider through in-app chat.",
  },
  {
    name: "The buyer pays Bsb Market, not the seller",
    text: "The buyer pays through the Bsb Market in-app payment system. Bsb Market holds the money in escrow. The seller or provider can see the order is paid, but cannot withdraw the money yet.",
  },
  {
    name: "The seller delivers",
    text: "The seller ships or dispatches the product, or the provider performs the job, ride or booked service, as described in the listing.",
  },
  {
    name: "The buyer confirms delivery",
    text: "The buyer checks that the item or service matches the listing and confirms in the app. If something is wrong, the buyer reports it to Bsb Market Support instead of confirming.",
  },
  {
    name: "Bsb Market releases the payment",
    text: "After confirmation, Bsb Market releases the payment to the seller's Bsb Market wallet, minus the commission or transaction fee that was disclosed before the buyer paid.",
  },
  {
    name: "Both sides leave a review",
    text: "Buyer and seller rate each other. Ratings and reviews are public on profiles and help everyone decide who to trust.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What is an escrow payment app?",
    a: "An escrow payment app holds a buyer's money with a neutral third party until the seller delivers what was agreed. On Bsb Market, Bsb Market is that third party: it keeps the payment until the buyer confirms delivery, then releases it to the seller's wallet, which protects both sides from fraud.",
  },
  {
    q: "How does escrow payment work on Bsb Market?",
    a: "The buyer pays inside the Bsb Market app and the money is held in escrow. The seller delivers the product or service. When the buyer confirms it matches the listing, Bsb Market releases the payment to the seller's wallet, minus the disclosed fee. Problems are reported to Support before any release.",
  },
  {
    q: "How are escrow disputes resolved on Bsb Market?",
    a: "The buyer reports the problem to Bsb Market Support with evidence such as photos. Support reviews both sides. For product purchases reported within 3 days, an approved claim gets a Refund Tag (RF-TAG); the buyer returns the item within 5 days and receives 80% of the price. Unresolved disputes go to mediation.",
  },
  {
    q: "What if I pay a seller outside Bsb Market?",
    a: "Payments made outside Bsb Market are not protected by escrow. BSB Global Tech Ltd accepts no liability for losses from off-platform transactions and will not mediate them. Always pay through the in-app payment system so your money is held until you confirm delivery.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How escrow payments work on Bsb Market",
  description: DESCRIPTION,
  totalTime: "PT10M",
  step: STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `${absoluteUrl(PATH)}#step-${i + 1}`,
  })),
};

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        webPageSchema({ path: PATH, name: TITLE, description: DESCRIPTION }),
        howToSchema,
        faqSchema(FAQS),
        breadcrumbSchema([{ name: "How It Works", path: PATH }]),
      ],
    }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <PageLayout crumbs={[{ name: "How It Works", path: PATH }]}>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <header className="pt-6 sm:pt-10 pb-8">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            How Bsb Market works: escrow payments explained step by step
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Bsb Market uses escrow to protect every in-app payment. The buyer pays Bsb Market, BSB
            Market holds the money while the seller delivers, and the seller is paid only after the
            buyer confirms the order matches what was agreed.
          </p>
        </header>

        <section aria-labelledby="escrow-steps" className="mb-10">
          <h2 id="escrow-steps" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            The Bsb Market escrow payment flow in 6 steps
          </h2>
          <ol className="space-y-3">
            {STEPS.map((s, i) => (
              <li
                key={s.name}
                id={`step-${i + 1}`}
                className="rounded-xl bg-card p-4 sm:p-5 flex gap-4"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            How are disputes resolved on Bsb Market?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            Disputes are handled by Bsb Market Support before any money is released. The buyer
            reports the issue in the app or by email with photos or other evidence, and Support
            reviews information from both the buyer and the seller.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-muted-foreground mb-3">
            <li>Product problems must be reported within 3 days of receiving the item.</li>
            <li>
              If the refund is approved, Support issues a Refund Tag (RF-TAG), the official code
              that authorises the return.
            </li>
            <li>
              The buyer returns the unused item in its original packaging within 5 days of receiving
              the RF-TAG.
            </li>
            <li>
              The buyer receives 80% of the purchase price to their Bsb Market wallet or original
              payment method; 20% is retained as a non-refundable handling and processing fee.
            </li>
          </ul>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            If a dispute is not resolved through good-faith negotiation within 30 days, it is
            referred to mediation or arbitration under Nigeria's Arbitration and Mediation Act,
            2023. Full details are in the{" "}
            <Link to="/terms" className="text-primary font-medium hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            What does Bsb Market charge?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Bsb Market charges a commission or transaction fee on completed in-app transactions. The
            fee is shown before you confirm a transaction and in your account settings. Signing up
            is free, and during early-bird registration listing products and applying for jobs cost
            0 credits.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Why you should never pay outside the app
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Escrow only protects payments made through Bsb Market. If a seller asks you to transfer
            money directly, decline and report the listing. BSB Global Tech Ltd accepts no liability
            for losses from off-platform payments and cannot mediate them.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Where escrow applies on Bsb Market
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {FEATURE_LIST.map((f) => (
              <li
                key={f.key}
                className="rounded-xl bg-card p-4"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <Link to={f.path} className="font-semibold text-primary hover:underline">
                  {f.navLabel}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">{f.cardSummary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="faq" className="mb-12">
          <h2 id="faq" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Escrow FAQ
          </h2>
          <FaqList faqs={FAQS} />
        </section>

        <DownloadCta location="how_it_works" />
      </article>
    </PageLayout>
  );
}
