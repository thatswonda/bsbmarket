import { motion } from "framer-motion";
import { Check } from "lucide-react";

const leftItems = [
  "Sell anything",
  "Buy anything",
  "Hire services",
  "Offer services",
];

const rightItems = [
  "Get jobs",
  "Network",
  "All about business within your location and globally",
];

const ChecklistSection = () => (
  <section className="py-6 sm:py-24" style={{ background: "var(--hero-gradient)" }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl sm:rounded-[24px] p-5 sm:p-12"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        {/* Desktop: centered heading */}
        <h2 className="hidden sm:block text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
          Everything you need, one platform
        </h2>

        {/* Mobile: 2 column checklist (no heading, matching reference) */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:gap-4">
          <div className="flex flex-col gap-2.5">
            {leftItems.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-xs sm:text-base text-foreground font-medium leading-tight">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            {rightItems.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-xs sm:text-base text-foreground font-medium leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ChecklistSection;
