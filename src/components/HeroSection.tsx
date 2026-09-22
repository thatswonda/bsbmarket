import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import brandBanner from "@/assets/bsb-banner.png";

import sellIcon from "@/assets/sell-icon.png";
import buyIcon from "@/assets/buy-icon.png";
import servicesIcon from "@/assets/services-icon.png";
import hireIcon from "@/assets/hire-icon.png";
import jobsIcon from "@/assets/jobs-icon.png";
import networkIcon from "@/assets/network-icon.png";
import phoneMockup from "@/assets/phone-mockup-bsb.png";
import { Check, Eye, Heart, Share2 } from "lucide-react";
import AppStoreButton from "@/components/AppStoreButton";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Reuse listing images from categories
import listingGoods1 from "@/assets/listing-goods-1.jpg";
import listingGoods2 from "@/assets/listing-goods-2.jpg";
import listingGoods3 from "@/assets/listing-goods-3.jpg";
import listingGoods4 from "@/assets/listing-goods-4.jpg";
import listingGadgets1 from "@/assets/listing-gadgets-1.jpg";
import listingGadgets2 from "@/assets/listing-gadgets-2.jpg";
import listingGadgets3 from "@/assets/listing-gadgets-3.jpg";
import listingGadgets4 from "@/assets/listing-gadgets-4.jpg";
import listingJobs1 from "@/assets/listing-jobs-1.jpg";
import listingJobs2 from "@/assets/listing-jobs-2.jpg";
import listingJobs3 from "@/assets/listing-jobs-3.jpg";
import listingJobs4 from "@/assets/listing-jobs-4.jpg";
import listingServices1 from "@/assets/listing-services-1.jpg";
import listingServices2 from "@/assets/listing-services-2.jpg";
import listingServices3 from "@/assets/listing-services-3.jpg";
import listingServices4 from "@/assets/listing-services-4.jpg";
import listingContracts1 from "@/assets/listing-contracts-1.jpg";
import listingContracts2 from "@/assets/listing-contracts-2.jpg";
import listingContracts3 from "@/assets/listing-contracts-3.jpg";
import listingContracts4 from "@/assets/listing-contracts-4.jpg";
import listingShares1 from "@/assets/listing-shares-1.jpg";
import listingShares2 from "@/assets/listing-shares-2.jpg";
import listingShares3 from "@/assets/listing-shares-3.jpg";
import listingShares4 from "@/assets/listing-shares-4.jpg";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";

type Listing = { title: string; desc: string; views: string; img: string };

const featureListings: Record<string, Listing[]> = {
  Sell: [
    { title: "Electronics Bundle", desc: "Sell your used electronics — phones, tablets and laptops.", price: "$ 250", views: "8,340", img: listingGoods1 },
    { title: "Furniture Set", desc: "Premium dining table and chairs set in great condition.", price: "$ 400", views: "5,120", img: listingGoods2 },
    { title: "Clothing Collection", desc: "Designer clothing items ready for resale at great prices.", price: "$ 120", views: "6,780", img: listingGoods3 },
    { title: "Home Appliances", desc: "Washing machine, microwave and blender in working order.", price: "$ 350", views: "4,560", img: listingGoods4 },
  ],
  Buy: [
    { title: "iPhone 15 Pro", desc: "Brand new sealed iPhone 15 Pro Max, 256GB storage.", price: "$ 1,100", views: "25,400", img: listingGadgets1 },
    { title: "HP Laptop", desc: "Core i7 laptop with 16GB RAM and 512GB SSD.", price: "$ 650", views: "18,300", img: listingGadgets2 },
    { title: "Wireless Earbuds", desc: "AirPods Pro with active noise cancellation.", price: "$ 180", views: "14,200", img: listingGadgets3 },
    { title: "Smart Watch", desc: "Samsung Galaxy Watch with health tracking features.", price: "$ 220", views: "10,800", img: listingGadgets4 },
  ],
  "Get Jobs": [
    { title: "Software Developer", desc: "Remote full-stack developer role with competitive salary.", price: "$ 2,000/mo", views: "15,620", img: listingJobs1 },
    { title: "Sales Representative", desc: "Field sales position with commission-based earnings.", price: "$ 800/mo", views: "9,430", img: listingJobs2 },
    { title: "Graphic Designer", desc: "Creative designer needed for branding and marketing.", price: "$ 1,200/mo", views: "7,890", img: listingJobs3 },
    { title: "Driver Needed", desc: "Experienced driver for executive transport services.", price: "$ 400/mo", views: "11,200", img: listingJobs4 },
  ],
  "Offer Services": [
    { title: "Home Cleaning", desc: "Professional deep cleaning services for home or office.", price: "$ 50", views: "9,320", img: listingServices1 },
    { title: "Plumbing Repair", desc: "Expert plumbing solutions for leaks and installations.", price: "$ 40", views: "5,812", img: listingServices2 },
    { title: "Electrical Work", desc: "Licensed electricians for wiring and repairs.", price: "$ 60", views: "7,105", img: listingServices3 },
    { title: "Painting Service", desc: "Interior and exterior painting by skilled professionals.", price: "$ 80", views: "4,230", img: listingServices4 },
  ],
  "Hire Services": [
    { title: "Electrician", desc: "Certified electrician for all residential and commercial work.", price: "$ 55", views: "8,100", img: listingContracts1 },
    { title: "Interior Designer", desc: "Transform your space with professional interior design.", price: "$ 200", views: "6,340", img: listingContracts2 },
    { title: "Private Driver", desc: "Reliable personal driver for daily commute or trips.", price: "$ 30/day", views: "9,780", img: listingContracts3 },
    { title: "House Cleaner", desc: "Regular house cleaning with flexible scheduling.", price: "$ 25", views: "7,450", img: listingContracts4 },
  ],
  Network: [
    { title: "Business Groups", desc: "Join exclusive business networking groups in your area.", price: "Free", views: "12,500", img: listingShares1 },
    { title: "Meetups", desc: "Attend industry meetups and connect with professionals.", price: "Free", views: "8,900", img: listingShares2 },
    { title: "Partnerships", desc: "Find business partners for joint ventures and projects.", price: "Free", views: "6,340", img: listingShares3 },
    { title: "Mentorship", desc: "Get paired with experienced mentors in your field.", price: "Free", views: "10,200", img: listingShares4 },
  ],
};

const features = [
  { icon: sellIcon, label: "Sell" },
  { icon: buyIcon, label: "Buy" },
  { icon: jobsIcon, label: "Get Jobs" },
  { icon: servicesIcon, label: "Offer Services" },
  { icon: hireIcon, label: "Hire Services" },
  { icon: networkIcon, label: "Network" },
];

const floatAnimation = (delay: number, x: number, y: number) => ({
  initial: { opacity: 0, scale: 0.5, x: x * 0.5, y: y * 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: [0, -10, 0],
    transition: {
      opacity: { duration: 0.6, delay },
      scale: { duration: 0.6, delay },
      x: { duration: 0.6, delay },
      y: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 0.6 },
    },
  },
});

const leftItems = ["Sell anything", "Buy anything", "Hire services", "Offer services"];
const rightItems = ["Get jobs", "Network", "All about business within your location and globally"];

const mobileIconPositions = [
  { top: "0%", left: "1%", x: -30, y: -20 },
  { top: "40%", left: "-2%", x: -40, y: 0 },
  { bottom: "0%", left: "1%", x: -30, y: 20 },
  { top: "0%", right: "1%", x: 30, y: -20 },
  { top: "40%", right: "-2%", x: 40, y: 0 },
  { bottom: "0%", right: "1%", x: 30, y: 20 },
];

const desktopIconPositions = [
  { top: "4%", left: "-14%", x: -30, y: -20 },
  { top: "38%", left: "-18%", x: -40, y: 0 },
  { bottom: "4%", left: "-14%", x: -30, y: 20 },
  { top: "4%", right: "-14%", x: 30, y: -20 },
  { top: "38%", right: "-18%", x: 40, y: 0 },
  { bottom: "4%", right: "-14%", x: 30, y: 20 },
];

const HeroSection = () => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const iconPositions = isMobile ? mobileIconPositions : desktopIconPositions;
  const selectedFeature = features.find(f => f.label === selectedLabel);
  const listings = selectedLabel ? featureListings[selectedLabel] || [] : [];

  // Preload all listing images on mount
  useEffect(() => {
    Object.values(featureListings).flat().forEach(l => {
      const img = new Image();
      img.src = l.img;
    });
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative pt-20 sm:pt-32 pb-6 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          {/* Banner + intro text side by side on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-10 lg:mb-14 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center lg:text-left"
          >
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden mx-auto lg:mx-0 max-w-md lg:max-w-none"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <img
                src={brandBanner}
                alt="Bsb Market — Buy, Sell & Connect"
                className="w-full h-auto object-cover"
                width={540}
                height={263}
              />
            </div>
            <div className="hidden lg:block">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Your Social-Business APP
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Buy, sell, hire, and connect with trusted people and businesses — locally and around the world. BSB Market makes trade and business easier for everyone.
              </p>
            </div>
          </motion.div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center lg:text-left">
          <div className="lg:col-start-1 lg:row-start-1">

          <motion.h1

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-3 sm:mb-6 text-balance"
          >
            Get <span className="text-primary">everything</span> you{" "}
            <span className="text-primary">need</span>
            <br />
            in one place
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground text-xs sm:text-lg mb-8 sm:mb-16 lg:mb-0 max-w-xl mx-auto lg:mx-0"
          >
            <span className="text-primary font-semibold">Making trade and business easier</span>
          </motion.p>
          </div>

          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">


          {/* Phone mockup with floating icons */}
          <div className="relative mx-auto w-[340px] sm:w-[520px] py-12 sm:py-0 mb-8 sm:mb-16" style={{ perspective: "1200px" }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
              className="relative z-10 mx-auto w-[120px] sm:w-[220px]"
            >
              <img
                src={phoneMockup}
                alt="BSB Market app onboarding screen on a smartphone"
                className="w-full h-auto"
                width={526}
                height={1039}
              />
            </motion.div>

            {features.map((feature, i) => {
              const pos = iconPositions[i];
              return (
                <motion.button
                  key={feature.label}
                  {...floatAnimation(0.5 + i * 0.12, pos.x, pos.y)}
                  onClick={() => setSelectedLabel(feature.label)}
                  className="absolute z-20 flex flex-col items-center gap-1 cursor-pointer"
                  style={{
                    top: pos.top,
                    bottom: (pos as any).bottom,
                    left: pos.left,
                    right: (pos as any).right,
                  }}
                >
                  <div
                    className="bg-card rounded-xl p-1 sm:p-3 flex flex-col items-center gap-0.5 sm:gap-1 hover:scale-110 transition-transform duration-200"
                    style={{ boxShadow: "var(--card-shadow)" }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.label}
                      className="w-6 h-6 sm:w-12 sm:h-12 object-contain"
                    />
                    <span className="text-[7px] sm:text-xs font-semibold text-foreground whitespace-nowrap leading-tight">
                      {feature.label}
                    </span>
                  </div>
                </motion.button>
              );
            })}

            <svg className="absolute -inset-x-[25%] inset-y-0 w-[150%] h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[
                { d: "M7 8 Q22 20 36 30", delay: 1 },
                { d: "M4 46 Q20 48 36 50", delay: 1.15 },
                { d: "M7 88 Q22 80 36 70", delay: 1.3 },
                { d: "M93 8 Q78 20 64 30", delay: 1.45 },
                { d: "M96 46 Q80 48 64 50", delay: 1.6 },
                { d: "M93 88 Q78 80 64 70", delay: 1.75 },
              ].map((p) => (
                <motion.path
                  key={p.d}
                  d={p.d}
                  stroke="hsl(var(--primary) / 0.35)"
                  strokeWidth="0.4"
                  strokeDasharray="1.5 1.5"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: p.delay }}
                />
              ))}
            </svg>

          </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2">


          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <h3 className="text-sm sm:text-lg font-bold text-foreground mb-3 text-left">You can</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <div className="flex flex-col gap-2.5">
                {leftItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-xs sm:text-base text-foreground font-medium leading-tight text-left">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                {rightItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-xs sm:text-base text-foreground font-medium leading-tight text-left">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            <AppStoreButton
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-foreground text-card rounded-lg sm:rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.97 5.08 20.18 6.88C20.07 6.95 17.7 8.32 17.73 11.16C17.76 14.56 20.67 15.65 20.7 15.66C20.67 15.74 20.22 17.33 19.11 18.97L18.71 19.5ZM13.05 4.24C13.78 3.38 14.25 2.19 14.12 1C13.09 1.04 11.85 1.69 11.1 2.55C10.42 3.31 9.85 4.53 10 5.69C11.14 5.78 12.31 5.1 13.05 4.24Z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] sm:text-[10px] opacity-80">Download on the</div>
                <div className="text-[11px] sm:text-sm font-semibold -mt-0.5">App Store</div>
              </div>
            </AppStoreButton>
            <a
              href={PLAY_STORE_URL}
              onClick={openPlayStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-foreground text-card rounded-lg sm:rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302L21.884 12l-1.884 1.19-2.302-2.302L19.884 12l-2.186-1.492zM5.864 2.658L16.8 8.99l-2.302 2.303L5.864 2.658z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] sm:text-[10px] opacity-80">Get it on</div>
                <div className="text-[11px] sm:text-sm font-semibold -mt-0.5">Google Play</div>
              </div>
            </a>
          </motion.div>
          </div>
          </div>
        </div>
      </div>

      {/* Feature listings dialog — same style as Categories */}
      <Dialog open={!!selectedLabel} onOpenChange={() => setSelectedLabel(null)}>
        <DialogContent className="max-w-lg sm:max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-lg sm:text-2xl font-bold">
              {selectedFeature && (
                <img src={selectedFeature.icon} alt={selectedFeature.label} className="w-8 h-8 object-contain" />
              )}
              {selectedFeature?.label}
            </DialogTitle>
            <DialogDescription>Browse listings in this category</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-4">
            {listings.map((listing, i) => (
              <motion.div
                key={listing.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-3 bg-card rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <img
                  src={listing.img}
                  alt={listing.title}
                  className="w-28 h-24 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0 py-1">
                  <h3 className="text-sm font-bold text-foreground mb-1">{listing.title}</h3>
                  <p className="text-[11px] text-muted-foreground mb-2 leading-relaxed line-clamp-2">{listing.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-muted-foreground text-[11px]">{listing.views}</span>
                      <span className="text-primary font-bold text-sm">{listing.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-primary" />
                      <Heart className="w-3.5 h-3.5 text-primary" />
                      <Share2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
