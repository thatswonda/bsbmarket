import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageLayout, DownloadCta } from "@/components/PageLayout";
import FaqList from "@/components/FaqList";
import { FEATURE_LIST, type Feature } from "@/content/features";
import { pageHead, breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";

/** Head tags (meta, canonical, Service + FAQPage + BreadcrumbList JSON-LD) for a feature page. */
export const featureHead = (f: Feature) =>
  pageHead({
    path: f.path,
    title: f.title,
    description: f.description,
    jsonLd: [
      webPageSchema({ path: f.path, name: f.title, description: f.description }),
      serviceSchema({ ...f.service, path: f.path }),
      faqSchema(f.faqs),
      breadcrumbSchema([{ name: f.navLabel, path: f.path }]),
    ],
  });

/** Records a per-feature engagement event once the reader scrolls 60% down the page. */
function useFeatureEngagement(feature: string) {
  useEffect(() => {
    trackEvent("feature_page_view", { feature });
    let sent = false;
    const onScroll = () => {
      if (sent) return;
      const scrolled =
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrolled >= 0.6) {
        sent = true;
        trackEvent("feature_page_engaged", { feature });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [feature]);
}

export const FeaturePage = ({ feature: f }: { feature: Feature }) => {
  useFeatureEngagement(f.key);
  const others = FEATURE_LIST.filter((o) => o.key !== f.key);

  return (
    <PageLayout crumbs={[{ name: f.navLabel, path: f.path }]}>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <header className="pt-6 sm:pt-10 pb-8">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            {f.h1}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{f.answer}</p>
        </header>

        <section
          aria-labelledby="key-facts"
          className="rounded-2xl bg-card p-5 sm:p-7 mb-10"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <h2 id="key-facts" className="text-lg font-bold text-foreground mb-3">
            Key facts
          </h2>
          <ul className="space-y-2">
            {f.quickFacts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-2 text-sm sm:text-base text-foreground"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="steps" className="mb-10">
          <h2 id="steps" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            {f.stepsHeading}
          </h2>
          <ol className="grid gap-3 sm:grid-cols-2">
            {f.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl bg-card p-4"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <span className="text-xs font-bold text-primary">Step {i + 1}</span>
                <h3 className="font-semibold text-foreground mt-1 mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {f.sections.map((s) => (
          <section key={s.h2} className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{s.h2}</h2>
            {s.paragraphs.map((p) => (
              <p
                key={p}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3"
              >
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className="text-sm sm:text-base text-muted-foreground mb-10">
          Every payment on Bsb Market follows the same escrow process.{" "}
          <Link to="/how-it-works" className="text-primary font-medium hover:underline">
            See how escrow payments and disputes work
          </Link>
          .
        </p>

        <section aria-labelledby="faq" className="mb-12">
          <h2 id="faq" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            {f.navLabel} FAQ
          </h2>
          <FaqList faqs={f.faqs} />
          <p className="text-sm text-muted-foreground mt-4">
            More answers on the{" "}
            <Link to="/faq" className="text-primary font-medium hover:underline">
              Bsb Market FAQ page
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="more-features" className="mb-12">
          <h2 id="more-features" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            More on Bsb Market
          </h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.key}>
                <Link
                  to={o.path}
                  className="group block h-full rounded-xl bg-card p-4 hover:ring-2 hover:ring-primary/30 transition"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <span className="flex items-center justify-between font-semibold text-foreground">
                    {o.navLabel}
                    <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="block text-sm text-muted-foreground mt-1">{o.cardSummary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <DownloadCta location={`feature_${f.key}`} />
      </article>
    </PageLayout>
  );
};
