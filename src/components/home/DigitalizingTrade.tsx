import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, ShoppingCart, Users } from "lucide-react";
import DeviceShowcase from "@/components/home/DeviceShowcase";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";
import africaTile from "@/assets/home/africa-tile.webp";

const pillars = [
  { icon: ShoppingCart, title: "Buy & Sell", text: "Find what you need or reach new customers." },
  { icon: Users, title: "Connect", text: "Build relationships and expand your network." },
  { icon: ShieldCheck, title: "Safe & Secure", text: "Trade with confidence on a trusted platform." },
  { icon: Globe2, title: "Global Reach", text: "Local opportunities. Worldwide connections." },
];

/** Block 3: "Bsb Market, Digitalizing Trade in Africa" with device mockups and the four pillars. */
const DigitalizingTrade = () => (
  <section className="bg-white">
    <div className="relative overflow-hidden bg-[radial-gradient(70%_80%_at_75%_40%,rgba(30,110,255,0.6)_0%,transparent_70%),linear-gradient(180deg,#04165a_0%,#0a2c9c_100%)]">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:3px_3px]" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-4 pb-20 pt-20 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:pb-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-sky sm:text-[13px]">Welcome to Bsb Market</p>
          <h2 className="mt-5 text-[44px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[64px]">
            Bsb Market,
            <br />
            <span className="text-gradient-sky">
              Digitalizing Trade
              <br />
              in Africa
            </span>
          </h2>
          <p className="mt-7 max-w-[28rem] text-lg leading-relaxed text-white/85">
            A social trade platform that connects buyers, sellers and businesses — locally and globally.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href={PLAY_STORE_URL}
              onClick={openPlayStore}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[60px] items-center gap-3 rounded-full bg-white px-9 text-[17px] font-bold text-navy-900 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/categories"
              className="border-b-2 border-brand-sky pb-1.5 text-[16px] font-semibold text-white transition-colors hover:text-brand-sky"
            >
              Explore Marketplace
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <DeviceShowcase />
        </motion.div>
      </div>
    </div>

    {/* Pillars */}
    <div className="mx-auto max-w-[1320px] px-4 pb-16 pt-16 sm:px-8 sm:pt-20">
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center text-center"
          >
            <span className="grid h-[76px] w-[76px] place-items-center rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/70 shadow-[0_10px_24px_-14px_rgba(21,112,255,0.6)]">
              <Icon className="h-9 w-9 text-brand" strokeWidth={2} fill={title === "Safe & Secure" ? "currentColor" : "none"} />
            </span>
            <h3 className="mt-6 text-xl font-bold text-navy-900 sm:text-[22px]">{title}</h3>
            <p className="mt-3 max-w-[15rem] text-[15px] leading-relaxed text-slate-500 sm:text-base">{text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/80 to-slate-50 p-6 sm:flex-row sm:items-center sm:p-8">
        <img src={africaTile} alt="" className="h-16 w-16 rounded-2xl" width={70} height={70} />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-navy-900 sm:text-xl">Supporting African Businesses</h3>
          <p className="mt-1.5 text-[15px] text-slate-500">
            We're building a stronger, more connected trade ecosystem across Africa and beyond.
          </p>
        </div>
        <a
          href={PLAY_STORE_URL}
          onClick={openPlayStore}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-14 items-center gap-3 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-[0_12px_26px_-10px_rgba(21,112,255,0.8)] transition-colors hover:bg-brand-bright"
        >
          Join Bsb Market
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
);

export default DigitalizingTrade;
