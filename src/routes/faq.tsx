import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, DownloadCta } from "@/components/PageLayout";
import FaqList from "@/components/FaqList";
import { GENERAL_FAQS } from "@/content/faqs";
import { FEATURE_LIST } from "@/content/features";
import { breadcrumbSchema, faqSchema, pageHead, type Faq } from "@/lib/seo";

const PATH = "/faq";
const TITLE = "BSB Market FAQ – Escrow, Jobs, Rides & Bookings Answered";
const DESCRIPTION =
  "Direct answers about BSB Market: what it is, escrow payments, fees, selling, finding jobs, booking rides and dispatch, and service bookings in Nigeria.";

// Feature questions not already in the general list, so each question appears once.
const generalQs = new Set(GENERAL_FAQS.map((f) => f.q));
const FEATURE_GROUPS = FEATURE_LIST.map((f) => ({
  feature: f,
  faqs: f.faqs.filter((x) => !generalQs.has(x.q)),
}));
const ALL_FAQS: Faq[] = [...GENERAL_FAQS, ...FEATURE_GROUPS.flatMap((g) => g.faqs)];

export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [faqSchema(ALL_FAQS), breadcrumbSchema([{ name: "FAQ", path: PATH }])],
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PageLayout crumbs={[{ name: "FAQ", path: PATH }]}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <header className="pt-6 sm:pt-10 pb-8">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            BSB Market frequently asked questions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Short, direct answers about BSB Market — the Nigerian app to buy and sell with escrow,
            find jobs, book rides and dispatch, and book services. Can't find your answer?{" "}
            <Link to="/contact" className="text-primary font-medium hover:underline">
              Contact the team
            </Link>
            .
          </p>
        </header>

        <section aria-labelledby="general" className="mb-10">
          <h2 id="general" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            About BSB Market, payments and fees
          </h2>
          <FaqList faqs={GENERAL_FAQS} />
          <p className="text-sm text-muted-foreground mt-4">
            Step-by-step walkthrough:{" "}
            <Link to="/how-it-works" className="text-primary font-medium hover:underline">
              how escrow payments work
            </Link>
            .
          </p>
        </section>

        {FEATURE_GROUPS.map(({ feature, faqs }) => (
          <section key={feature.key} aria-labelledby={`faq-${feature.key}`} className="mb-10">
            <h2
              id={`faq-${feature.key}`}
              className="text-xl sm:text-2xl font-bold text-foreground mb-4"
            >
              {feature.navLabel}
            </h2>
            <FaqList faqs={faqs} />
            <p className="text-sm text-muted-foreground mt-4">
              Full guide:{" "}
              <Link to={feature.path} className="text-primary font-medium hover:underline">
                BSB Market {feature.navLabel}
              </Link>
              .
            </p>
          </section>
        ))}

        <DownloadCta location="faq" />
      </div>
    </PageLayout>
  );
}
