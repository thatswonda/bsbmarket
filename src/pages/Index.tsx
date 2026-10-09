import Navbar from "@/components/Navbar";
import HeroTrade from "@/components/home/HeroTrade";
import MoreThanMarketplace from "@/components/home/MoreThanMarketplace";
import DigitalizingTrade from "@/components/home/DigitalizingTrade";
import EveryKindOfTrade from "@/components/home/EveryKindOfTrade";
import StartTrading from "@/components/home/StartTrading";
import TrustAndCities from "@/components/home/TrustAndCities";
import HomeFaq from "@/components/home/HomeFaq";
import DownloadCta from "@/components/home/DownloadCta";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <main>
      <HeroTrade />
      <MoreThanMarketplace />
      <DigitalizingTrade />
      <EveryKindOfTrade />
      <StartTrading />
      <TrustAndCities />
      <HomeFaq />
      <DownloadCta />
    </main>
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
