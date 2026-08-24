import { motion } from "framer-motion";
import { Target, Eye, Shield, Users } from "lucide-react";
import aboutAsset from "@/assets/handshake-deal.png";

const values = [
  { icon: Target, title: "Our Mission", desc: "To simplify trade and business by connecting people with the goods, services, and opportunities they need — locally and globally." },
  { icon: Eye, title: "Our Vision", desc: "To become Africa's leading digital marketplace, empowering millions of entrepreneurs and professionals." },
  { icon: Shield, title: "Trust & Safety", desc: "We prioritize secure transactions, verified listings, and a safe environment for every user." },
  { icon: Users, title: "Community First", desc: "Built by the community, for the community. We grow when our users succeed." },
];

const AboutSection = () => (
  <section className="py-8 sm:py-24 bg-background" id="about-us">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-16"
      >
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">About BSB Market</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          We're building the future of commerce — one connection at a time.
        </p>
      </motion.div>

      {/* Desktop: image + values grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
          style={{ boxShadow: "var(--card-shadow-hover)" }}
        >
          <img src={aboutAsset} alt="Two professionals sealing a business deal with a handshake" className="w-full h-[360px] object-cover" loading="lazy" />
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 bg-card rounded-2xl"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-3">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1.5">{v.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: photo + compact cards */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:hidden rounded-2xl overflow-hidden mb-4"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        <img
          src={aboutAsset}
          alt="Two professionals sealing a business deal with a handshake"
          className="w-full h-40 object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="grid grid-cols-2 gap-3 md:hidden">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-3 bg-card rounded-xl"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center mb-2">
              <v.icon className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-xs font-bold text-foreground mb-1">{v.title}</h3>
            <p className="text-[10px] text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
