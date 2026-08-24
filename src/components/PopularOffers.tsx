import { motion } from "framer-motion";
import { Eye, Heart, Share2 } from "lucide-react";
import spaAsset from "@/assets/service-spa.jpg";
import photoAsset from "@/assets/service-photography.webp";
import webdevAsset from "@/assets/service-webdev.jpg";
import fitnessAsset from "@/assets/service-fitness.webp";

const offers = [
  { img: spaAsset, title: "Luxury Spa", desc: "Relax and rejuvenate with our premium spa treatments and wellness packages.", views: "17,223" },
  { img: fitnessAsset, title: "Fitness Workshop", desc: "Get in shape with guided workout sessions from certified fitness coaches.", views: "17,223" },
  { img: photoAsset, title: "Professional Photography", desc: "Capture your special moments with expert photographers.", views: "8,450" },
  { img: webdevAsset, title: "Website Development", desc: "Modern, responsive websites built by professional developers.", views: "12,891" },
];

const PopularOffers = () => (
  <section className="py-6 sm:py-24 bg-card" id="services">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2"
      >
        Popular Listings
      </motion.h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-12 max-w-2xl">
        Discover the most sought-after listings loved by our community — handpicked for quality and value.
      </p>

      {/* Desktop: card grid (all 4) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-card rounded-[20px] overflow-hidden transition-shadow duration-300"
            style={{ boxShadow: "var(--card-shadow)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
          >
            <div className="relative overflow-hidden">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{offer.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{offer.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-lg">{offer.price}</span>
                <span className="text-xs text-muted-foreground">{offer.views} views</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile: horizontal list items */}
      <div className="flex flex-col gap-4 md:hidden">
        {offers.slice(0, 2).map((offer, i) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 p-3 bg-card rounded-2xl"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <img
              src={offer.img}
              alt={offer.title}
              className="w-28 h-24 object-cover rounded-xl flex-shrink-0"
            />
            <div className="flex-1 min-w-0 py-1">
              <h3 className="text-sm font-bold text-foreground mb-1">{offer.title}</h3>
              <p className="text-[11px] text-muted-foreground mb-2 leading-relaxed line-clamp-2">{offer.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground text-[11px]">{offer.views}</span>
                  <span className="text-primary font-bold text-sm">{offer.price}</span>
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
    </div>
  </section>
);

export default PopularOffers;
