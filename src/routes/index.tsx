import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import PopularOffers from "@/components/PopularOffers";
import CategoriesSection from "@/components/CategoriesSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import NewsletterSection from "@/components/NewsletterSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FeatureLinksSection from "@/components/FeatureLinksSection";
import { HOME_FAQS } from "@/content/faqs";
import { faqSchema, pageHead, softwareApplicationSchema, webPageSchema } from "@/lib/seo";

const TITLE = "BSB Market – Digital Marketplace & Business App in Nigeria";
const DESCRIPTION =
  "Buy, sell and hire on BSB Market, Nigeria's escrow payment app. Find jobs and gigs, book rides and dispatch, and take service bookings — all in one app.";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        webPageSchema({ path: "/", name: TITLE, description: DESCRIPTION }),
        softwareApplicationSchema(),
        faqSchema(HOME_FAQS),
      ],
    }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
      <HeroSection />
      <FeatureLinksSection />
      {/* Desktop: About before Trust */}
      <div className="hidden sm:block">
        <AboutSection />
        <TrustSection />
      </div>
      {/* Mobile: HowItWorks before Trust */}
      <div className="sm:hidden">
        <HowItWorks />
        <TrustSection />
      </div>
      {/* Desktop: HowItWorks before Popular listings */}
      <div className="hidden sm:block">
        <HowItWorks />
      </div>
      <PopularOffers />
      <div className="sm:hidden">
        <CategoriesSection />
      </div>
      <div className="hidden sm:block">
        <CategoriesSection />
      </div>
      <div className="sm:hidden">
        <AboutSection />
      </div>
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
      <NewsletterSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
