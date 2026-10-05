import { Route, Routes } from "react-router-dom";
import Seo from "@/components/Seo";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import HowItWorksPage from "./pages/HowItWorksPage.tsx";
import Categories from "./pages/Categories.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import SafetyTips from "./pages/SafetyTips.tsx";
import Download from "./pages/Download.tsx";
import Uyo from "./pages/Uyo.tsx";
import Guides from "./pages/Guides.tsx";
import GuidePage from "./pages/GuidePage.tsx";
import CityPage from "./pages/CityPage.tsx";
import { cities, cityPath } from "@/content/cities";

/** Route table shared by the browser app and the build-time pre-renderer. */
const AppRoutes = () => (
  <>
    <Seo />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:slug" element={<CategoryPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/safety-tips" element={<SafetyTips />} />
      <Route path="/download" element={<Download />} />
      <Route path="/buy-and-sell-in-uyo" element={<Uyo />} />
      {cities.map((c) => (
        <Route key={c.slug} path={cityPath(c)} element={<CityPage city={c} />} />
      ))}
      <Route path="/guides" element={<Guides />} />
      <Route path="/guides/:slug" element={<GuidePage />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default AppRoutes;
