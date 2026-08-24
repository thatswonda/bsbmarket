import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import bannerImg from "@/assets/banner-1.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  { img: bannerImg, title: "Making", subtitle: "NEW MEMORIES" },
  { img: heroBg, title: "Discover", subtitle: "NEW PLACES" },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].img}
              alt={slides[current].subtitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
            <div className="absolute bottom-6 left-5">
              <p className="text-primary-foreground/90 text-sm font-medium">
                {slides[current].title}
              </p>
              <h2 className="text-primary-foreground text-2xl sm:text-3xl font-extrabold tracking-wide uppercase">
                {slides[current].subtitle}
              </h2>
            </div>
            <div className="absolute bottom-5 right-5 w-8 h-8 rounded-lg bg-card/80 flex items-center justify-center">
              <Camera className="w-4 h-4 text-foreground" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <button
          onClick={prev}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          PREVIOUS
        </button>
        <span className="text-xs text-muted-foreground font-medium">
          {current + 1}/{slides.length}
        </span>
        <button
          onClick={next}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          NEXT
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
