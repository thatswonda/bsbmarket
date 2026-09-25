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
    <header className="pt-20 sm:pt-28 pb-8 sm:pb-14" style={{ background: "var(--hero-gradient)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-muted-foreground">
              {breadcrumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />}
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-foreground font-medium">{c.name}</span>
                  ) : (
                    <Link to={c.path} className="hover:text-primary transition-colors">{c.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-primary mb-3">{eyebrow}</p>}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">{title}</h1>
        {lead && <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">{lead}</p>}
      </div>
    </header>
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">{children}</main>
    <Footer />
    <BackToTop />
  </div>
);

export default PageLayout;
