import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe, Headphones, CreditCard, Lock } from "lucide-react";
import remoteAsset from "@/assets/remote-work-dubai.png";
import teamAsset from "@/assets/bsb-team-meeting.png";

const badges = [
  { icon: ShieldCheck, label: "Verified Listings", desc: "Every listing is screened so you deal with real people and real offers." },
  { icon: Lock, label: "Secure Payments", desc: "Protected checkout and escrow-style safeguards on every transaction." },
  { icon: Clock, label: "24/7 Access", desc: "Post, browse and close deals at any hour, from any device." },
  { icon: Globe, label: "Global Reach", desc: "Trade locally in your city or reach buyers across the world." },
  { icon: Headphones, label: "Customer Support", desc: "A responsive support team ready whenever you need a hand." },
  { icon: CreditCard, label: "Easy Transactions", desc: "Simple, transparent flows from first message to final payment." },
];

const stats = [
  { value: "120K+", label: "Active listings" },
  { value: "45K+", label: "Verified sellers" },
  { value: "30+", label: "Countries served" },
  { value: "4.8/5", label: "Average rating" },
];

const TrustSection = () => (
  <section className="py-10 sm:py-24 bg-card border-y border-border/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-6 sm:mb-10"
      >
        <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 sm:mb-3">
          Trust &amp; Safety
        </span>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">
          Why people trust BSB Market
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground">
          A marketplace built on verified people, protected payments and support that answers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden"
        style={{ boxShadow: "var(--card-shadow-hover)" }}
      >
        <img
          src={teamAsset}
          alt="Business team meeting beside a Bsb Market brand banner"
          className="w-full h-52 sm:h-[420px] object-cover"
          loading="lazy"
        />
      </motion.div>


      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group relative bg-background rounded-2xl border border-border/60 p-4 sm:p-7 transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center mb-3 sm:mb-5 transition-colors group-hover:bg-primary">
              <b.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-foreground mb-1 sm:mb-2">{b.label}</h3>
            <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Global business band */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 sm:mt-16 grid md:grid-cols-2 gap-5 sm:gap-12 items-center"
      >
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden" style={{ boxShadow: "var(--card-shadow-hover)" }}>
          <img
            src={remoteAsset}
            alt="Entrepreneur working remotely on a laptop overlooking a modern city skyline"
            className="w-full h-48 sm:h-[380px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="text-left">
          <h3 className="text-base sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-4">Do business from anywhere</h3>
          <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
            Whether you're trading from home, the office, or halfway across the world, BSB Market keeps your
            listings, clients, and opportunities in one place — locally and globally.
          </p>
        </div>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border/60"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-background py-4 sm:py-7 text-center">
            <div className="text-lg sm:text-3xl font-bold text-primary">{s.value}</div>
            <div className="text-[10px] sm:text-sm text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
