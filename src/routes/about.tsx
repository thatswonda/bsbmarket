import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Building2 } from "lucide-react";
import { PageLayout, DownloadCta } from "@/components/PageLayout";
import { FEATURE_LIST } from "@/content/features";
import {
  ADDRESS_TEXT,
  CONTACT_EMAIL,
  LEGAL_NAME,
  SOCIAL_PROFILES,
  breadcrumbSchema,
  localBusinessSchema,
  pageHead,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/seo";

const PATH = "/about";
const TITLE = "About BSB Market – BSB Global Tech Ltd, Uyo, Nigeria";
const DESCRIPTION =
  "BSB Market is built by BSB Global Tech Ltd in Uyo, Nigeria: one app to buy and sell with escrow, find jobs, book rides and dispatch, and book services.";

/**
 * Leadership shown on the page. Add real people only (name, role, short bio, optional
 * LinkedIn/X URL) — the section is hidden while this list is empty.
 */
const TEAM: { name: string; role: string; bio: string; url?: string }[] = [];

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        webPageSchema({ path: PATH, name: TITLE, description: DESCRIPTION, type: "AboutPage" }),
        localBusinessSchema(),
        softwareApplicationSchema(),
        breadcrumbSchema([{ name: "About", path: PATH }]),
      ],
    }),
  component: AboutPage,
});

const PROFILE_LABELS: Record<string, string> = {
  "tiktok.com": "TikTok",
  "facebook.com": "Facebook",
  "x.com": "X (Twitter)",
  "play.google.com": "Google Play",
};

function AboutPage() {
  return (
    <PageLayout crumbs={[{ name: "About", path: PATH }]}>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <header className="pt-6 sm:pt-10 pb-8">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            About BSB Market
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            BSB Market is a Nigerian all-in-one marketplace and business app built by {LEGAL_NAME},
            a technology company incorporated in Nigeria and based in Uyo, Akwa Ibom State. It
            brings buying and selling, jobs, rides and dispatch, and service bookings into one app,
            with payments protected by escrow.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Why BSB Market exists
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            BSB Market was created to make trade and business easier and safer in Nigeria. Buyers,
            sellers, job seekers, drivers and service businesses usually rely on separate apps,
            social media and direct bank transfers, where it is hard to know who to trust and money
            sent to the wrong person is rarely recovered.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            BSB Market solves this by putting these activities in one app and routing payments
            through escrow: the money is held until the buyer confirms delivery. Listings are
            screened, businesses can be verified, and every transaction can be rated and reviewed.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Mission and vision</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            <strong className="text-foreground">Mission:</strong> to simplify trade and business by
            connecting people with the goods, services, jobs and opportunities they need — locally
            and globally.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Vision:</strong> to become Africa's leading digital
            marketplace, empowering millions of entrepreneurs and professionals.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            What you can do on BSB Market
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
          <p className="text-sm text-muted-foreground mt-4">
            Learn{" "}
            <Link to="/how-it-works" className="text-primary font-medium hover:underline">
              how escrow payments work
            </Link>{" "}
            or read the{" "}
            <Link to="/faq" className="text-primary font-medium hover:underline">
              FAQ
            </Link>
            .
          </p>
        </section>

        {TEAM.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Leadership</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {TEAM.map((m) => (
                <li
                  key={m.name}
                  className="rounded-xl bg-card p-4"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <h3 className="font-semibold text-foreground">
                    {m.url ? (
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        {m.name}
                      </a>
                    ) : (
                      m.name
                    )}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-1">{m.role}</p>
                  <p className="text-sm text-muted-foreground">{m.bio}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Company information
          </h2>
          <dl
            className="rounded-2xl bg-card p-5 sm:p-7 space-y-3 text-sm sm:text-base"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-foreground">Legal name</dt>
                <dd className="text-muted-foreground">{LEGAL_NAME}, incorporated in Nigeria</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-foreground">Address</dt>
                <dd className="text-muted-foreground">{ADDRESS_TEXT}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                    {CONTACT_EMAIL}
                  </a>{" "}
                  <span className="text-muted-foreground">(Monday – Saturday, 9am – 6pm)</span>
                </dd>
              </div>
            </div>
          </dl>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Find BSB Market online
          </h2>
          <ul className="flex flex-wrap gap-2">
            {SOCIAL_PROFILES.map((url) => {
              const host = new URL(url).hostname.replace(/^www\./, "");
              return (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {PROFILE_LABELS[host] ?? host}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Read our{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Use
            </Link>
            , or{" "}
            <Link to="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            .
          </p>
        </section>

        <DownloadCta location="about" />
      </article>
    </PageLayout>
  );
}
