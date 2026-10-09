import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Crumb } from "@/lib/seo";

interface PageLayoutProps {
  breadcrumbs?: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
}

/** Shared shell for content pages: navbar, breadcrumbs, page header, footer. */
const PageLayout = ({ breadcrumbs, eyebrow, title, lead, children }: PageLayoutProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <header className="bg-navy-hero pt-28 sm:pt-40 pb-12 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-white/60">
              {breadcrumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />}
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-white font-medium">{c.name}</span>
                  ) : (
                    <Link to={c.path} className="hover:text-white transition-colors">{c.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-brand-sky mb-4">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.035em] text-white text-balance [&_.text-primary]:text-brand-sky">{title}</h1>
        {lead && <p className="mt-4 text-base sm:text-lg text-white/75 max-w-3xl leading-relaxed">{lead}</p>}
      </div>
    </header>
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">{children}</main>
    <Footer />
    <BackToTop />
  </div>
);

export default PageLayout;
