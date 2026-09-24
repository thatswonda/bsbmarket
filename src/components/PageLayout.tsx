import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";
import type { Crumb } from "@/lib/seo";

/** Shell for content pages: fixed navbar, visible breadcrumb trail, main content, footer. */
export const PageLayout = ({ crumbs, children }: { crumbs?: Crumb[]; children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-14 sm:pt-16">
      {crumbs && crumbs.length > 0 && <Breadcrumbs crumbs={crumbs} />}
      {children}
    </main>
    <Footer />
    <BackToTop />
  </div>
);

const Breadcrumbs = ({ crumbs }: { crumbs: Crumb[] }) => {
  const trail = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-muted-foreground">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />}
              {last ? (
                <span aria-current="page" className="text-foreground font-medium">
                  {c.name}
                </span>
              ) : (
                <Link to={c.path} className="hover:text-primary">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

/** App download call-to-action used at the end of content pages. */
export const DownloadCta = ({ location, heading }: { location: string; heading?: string }) => (
  <section className="rounded-2xl bg-primary text-primary-foreground p-6 sm:p-10 text-center">
    <h2 className="text-xl sm:text-2xl font-bold mb-2">
      {heading ?? "Get started with Bsb Market"}
    </h2>
    <p className="text-sm sm:text-base opacity-90 mb-5 max-w-xl mx-auto">
      Download the free Bsb Market app on Google Play to buy, sell, get hired, book rides and book
      services — with payments protected by escrow.
    </p>
    <a
      href={PLAY_STORE_URL}
      onClick={openPlayStore}
      data-location={location}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-card text-foreground font-semibold hover:opacity-90 transition-opacity"
    >
      Get it on Google Play
    </a>
  </section>
);
