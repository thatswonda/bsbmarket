import { useRef } from "react";
import { motion } from "framer-motion";
import { Eye, Heart, Share2 } from "lucide-react";
import photoImg from "@/assets/service-photography.jpg";
import webdevImg from "@/assets/service-webdev.jpg";
import spaImg from "@/assets/service-spa.jpg";
import fitnessImg from "@/assets/service-fitness.jpg";
import eventImg from "@/assets/service-event-coverage.jpg";
import appDesignImg from "@/assets/service-app-design.jpg";

const services = [
  { img: photoImg, title: "Professional Photography" },
  { img: webdevImg, title: "Website Development" },
  { img: spaImg, title: "Luxury Spa Treatment" },
  { img: fitnessImg, title: "Fitness Coaching" },
  { img: eventImg, title: "Event Coverage" },
  { img: appDesignImg, title: "Mobile App Design" },
];

const ExploreServices = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -180 : 180, behavior: "smooth" });
  };

  return (
    <section className="py-6 sm:py-24 bg-card" id="hire">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2"
        >
          Explore Our Services
        </motion.h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-12 max-w-2xl">
          From creative professionals to wellness experts — explore a wide range of services tailored to your needs.
        </p>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-[20px] overflow-hidden transition-shadow duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="relative h-36">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-sm font-bold text-primary-foreground leading-tight">{s.title}</h3>
                  <p className="text-xs text-primary-foreground/80 font-medium">{s.price}</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 px-3 py-2.5">
                <Eye className="w-4 h-4 text-primary" />
                <Heart className="w-4 h-4 text-primary" />
                <Share2 className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory md:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl overflow-hidden snap-start flex-shrink-0 w-[150px]"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="relative h-28">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5">
                  <h3 className="text-xs font-bold text-primary-foreground leading-tight">{s.title}</h3>
                  <p className="text-[10px] text-primary-foreground/80 font-medium">{s.price}</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1.5 px-2.5 py-2">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <Heart className="w-3.5 h-3.5 text-primary" />
                <Share2 className="w-3.5 h-3.5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default ExploreServices;
