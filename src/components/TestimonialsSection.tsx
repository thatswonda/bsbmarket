import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialJames from "@/assets/testimonial-james.jpg";
import testimonialAmara from "@/assets/testimonial-amara.jpg";
import testimonialLinda from "@/assets/testimonial-linda.jpg";
import testimonialRaj from "@/assets/testimonial-raj.jpg";
import testimonialEmma from "@/assets/testimonial-emma.jpg";
import testimonialCarlos from "@/assets/testimonial-carlos.jpg";
import testimonialDavid from "@/assets/testimonial-david.jpg";
import testimonialMei from "@/assets/testimonial-mei.jpg";

const testimonials = [
  { name: "Sarah M.", title: "Best Experience", text: "BSB Market made it so easy to find exactly what I needed. The platform is smooth and reliable.", rating: 5, img: testimonialSarah },
  { name: "James K.", title: "Amazing Experience", text: "I sold my products within hours of listing them. Highly recommend this marketplace to everyone.", rating: 5, img: testimonialJames },
  { name: "Amara O.", title: "Great Experience", text: "Found a professional photographer for my event in minutes. The service quality was outstanding.", rating: 5, img: testimonialAmara },
  { name: "Linda T.", title: "Super Convenient", text: "The variety of services available is incredible. I found a reliable plumber the same day I searched.", rating: 5, img: testimonialLinda },
  { name: "Raj P.", title: "Highly Recommend", text: "As a seller, BSB Market gave me access to thousands of buyers. My business grew 3x in just months.", rating: 5, img: testimonialRaj },
  { name: "Emma W.", title: "Love This Platform", text: "Clean interface, fast transactions, and great customer support. Everything you need in a marketplace.", rating: 5, img: testimonialEmma },
  { name: "Carlos R.", title: "Game Changer", text: "I landed my dream freelance gig through BSB Market. The job listings are top quality and well-curated.", rating: 5, img: testimonialCarlos },
  { name: "David A.", title: "Trusted & Reliable", text: "Every transaction I've made has been secure and hassle-free. BSB Market truly cares about its users.", rating: 5, img: testimonialDavid },
  { name: "Mei L.", title: "Fantastic Service", text: "From browsing to buying, the experience is seamless. I've recommended it to all my friends and family.", rating: 5, img: testimonialMei },
];

const PAGE_SIZE = 3;
const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);

const TestimonialsSection = () => {
  const [activePage, setActivePage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activePage < totalPages - 1) setActivePage(p => p + 1);
      if (diff < 0 && activePage > 0) setActivePage(p => p - 1);
    }
  };

  const currentTestimonials = testimonials.slice(
    activePage * PAGE_SIZE,
    (activePage + 1) * PAGE_SIZE
  );

  const prev = () => setActivePage(p => Math.max(0, p - 1));
  const next = () => setActivePage(p => Math.min(totalPages - 1, p + 1));

  return (
    <section className="py-6 sm:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground"
          >
            Testimonials
          </motion.h2>
          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              disabled={activePage === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={activePage === totalPages - 1}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop: 3 column paginated grid */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-8"
            >
              {currentTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="p-6 bg-card rounded-[20px] transition-shadow duration-300"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{t.title}</h4>
                      <p className="text-xs text-muted-foreground">{t.name}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          {/* Desktop dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activePage ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: swipeable card pages */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3"
            >
              {currentTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="p-3 bg-card rounded-2xl"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-sm font-bold text-foreground">{t.title}</h4>
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, j) => (
                            <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{t.text}</p>
                      <p className="text-[10px] text-muted-foreground/70 mt-0.5 font-medium">— {t.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePage(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === activePage ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
