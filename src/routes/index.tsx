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
import EarlyBirdBanner from "@/components/EarlyBirdBanner";

const TITLE = "BSB Market | Buy, Sell, Hire & Connect";
const DESCRIPTION =
  "BSB Market makes trade and business easier — buy, sell, offer or hire services, find jobs and network locally and globally.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <EarlyBirdBanner />
      <Navbar />
      <HeroSection />
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
      <Footer />
      <BackToTop />
    </div>
  );
}
