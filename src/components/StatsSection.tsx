import { motion } from "framer-motion";
import { Users, ShoppingBag, Briefcase, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Active Users" },
  { icon: ShoppingBag, value: "120K+", label: "Listings Posted" },
  { icon: Briefcase, value: "15K+", label: "Deals Completed" },
  { icon: Globe, value: "30+", label: "Cities Covered" },
];

const StatsSection = () => (
  <section className="hidden md:block py-20" style={{ background: "var(--hero-gradient)" }}>
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            className="flex flex-col items-center text-center p-8 bg-card rounded-2xl"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
              <stat.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-3xl font-bold text-foreground mb-1">{stat.value}</span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
