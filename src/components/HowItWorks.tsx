import { motion } from "framer-motion";
import { Search, ShoppingCart, Handshake, Star } from "lucide-react";
import appUserAsset from "@/assets/bsb-app-user-cutout.png";

const steps = [
  { icon: Search, title: "Browse & Discover", desc: "Explore thousands of listings across goods, services, jobs, and more in your area or globally." },
  { icon: ShoppingCart, title: "Choose & Connect", desc: "Find exactly what you need and connect directly with sellers, service providers, or employers." },
  { icon: Handshake, title: "Deal & Transact", desc: "Negotiate, agree on terms, and complete your transaction safely and conveniently." },
  { icon: Star, title: "Rate & Review", desc: "Share your experience to help the community and build trust across the marketplace." },
];

const HowItWorks = () => (
  <section className="py-8 sm:py-24 bg-card">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-16"
      >
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">How It Works</h2>
        <p className="text-xs sm:text-base text-muted-foreground max-w-xl mx-auto">Get started in four simple steps and unlock the full power of BSB Market.</p>
      </motion.div>

      <div className="relative">
        {/* Cut-out app user: top half visible, bottom half blurs into the steps */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center">
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={appUserAsset}
              alt="Woman holding a smartphone showing the Bsb Market app"
              className="select-none h-72 sm:h-[600px] w-auto object-contain"
              loading="lazy"
            />
            {/* Blur + fade the lower part that runs behind the steps */}
            <div className="absolute inset-x-0 bottom-0 h-[30%] backdrop-blur-md bg-gradient-to-b from-transparent via-card/70 to-card" />
          </div>
        </div>

        {/* Desktop: 4-col with connecting line */}
        <div className="hidden md:grid grid-cols-4 gap-8 relative z-10 pt-[340px]">
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-border z-0 mt-[340px]" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center mb-6" style={{ boxShadow: "var(--card-shadow)" }}>
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary mb-2">Step {i + 1}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden relative z-10 pt-44">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-3 bg-card/90 backdrop-blur-sm rounded-xl flex flex-col items-center text-center"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-2">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[9px] font-bold text-primary mb-1">Step {i + 1}</span>
              <h3 className="text-xs font-bold text-foreground mb-1">{step.title}</h3>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default HowItWorks;
