import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Eye, Landmark, MapPin, MessageSquareLock } from "lucide-react";
import { cities, cityPath } from "@/content/cities";

const tips = [
  { icon: Landmark, title: "Meet in public", text: "Inspect items in busy, well-lit places such as malls, banks or filling stations." },
  { icon: Eye, title: "Inspect before you pay", text: "Check the item, papers and receipts. Never pay for goods you haven't seen." },
  { icon: MessageSquareLock, title: "Keep chats in the app", text: "Agree on price and terms in Bsb Market chat so there's a clear record." },
  { icon: BadgeCheck, title: "Report anything off", text: "Spot a fake listing or a pushy seller? Report the profile from the app." },
];

const allCities = [
  { name: "Uyo", state: "Akwa Ibom · HQ", path: "/buy-and-sell-in-uyo" },
  ...cities.map((c) => ({ name: c.name, state: c.state, path: cityPath(c) })),
];

/** Safety habits + city pages on a navy band. */
const TrustAndCities = () => (
  <section className="relative overflow-hidden bg-[linear-gradient(180deg,#041650_0%,#03114a_100%)] py-20 sm:py-28">
    <div className="pointer-events-none absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-brand/30 blur-[140px]" />
    <div className="relative mx-auto grid max-w-[1320px] gap-16 px-4 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <p className="eyebrow">Trade safely</p>
        <h2 className="mt-6 text-[38px] font-extrabold leading-[1.05] text-white sm:text-[52px]">
          Good deals start with <span className="text-gradient-sky">good habits.</span>
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {tips.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <Icon className="h-7 w-7 text-brand-sky" />
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/65">{text}</p>
            </motion.div>
          ))}
        </div>
        <Link to="/safety-tips" className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-sky">
          Read all safety tips
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div>
        <p className="eyebrow">Near you</p>
        <h2 className="mt-6 text-[38px] font-extrabold leading-[1.05] text-white sm:text-[52px]">
          Built in Uyo. <span className="text-gradient-sky">Trading nationwide.</span>
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
          See what people buy, sell and hire in your city, from fairly used phones in Ikeja to apartments in Wuse.
        </p>
        <ul className="mt-9 divide-y divide-white/10 border-y border-white/10">
          {allCities.map((c) => (
            <li key={c.path}>
              <Link to={c.path} className="group flex items-center gap-4 py-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] text-brand-sky ring-1 ring-white/10">
                  <MapPin className="h-[18px] w-[18px]" />
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-bold text-white">{c.name}</span>
                  <span className="block text-sm text-white/55">{c.state}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-brand-sky" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TrustAndCities;
