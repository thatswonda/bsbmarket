import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import tradeGadgets from "@/assets/home/trade-gadgets.webp";
import tradeCarShowroom from "@/assets/home/trade-car-showroom.webp";
import tradeProperty from "@/assets/home/trade-property.webp";
import tradeJobs from "@/assets/home/trade-jobs.webp";
import tradeServices from "@/assets/home/trade-services.webp";
import tradePromo from "@/assets/home/trade-promo.webp";

const cards = [
  { label: "Fairly used items", slug: "goods", img: tradeGadgets, alt: "Fairly used iPhones, MacBooks, AirPods and smartwatches" },
  { label: "Cars", slug: "automobiles", img: tradeCarShowroom, alt: "White Omoda C5 SUV on display in a car showroom" },
  { label: "Property", slug: "real-estate", img: tradeProperty, alt: "Modern two-storey house with a paved driveway" },
  { label: "Jobs", slug: "jobs", img: tradeJobs, alt: "Laptop and notebook on an office desk" },
  { label: "Services", slug: "services", img: tradeServices, alt: "Artisan's tool bag with screwdrivers and a wrench" },
  { label: "Brand Promotions", slug: "promotions", img: tradePromo, alt: "Shipping box printed with Small Business, Big Dreams" },
];

const more = [
  { label: "Dispatch & delivery", slug: "dispatch" },
  { label: "Phones & Gadgets", slug: "gadgets" },
  { label: "Spare parts (Panteka)", slug: "panteka" },
  { label: "Contracts", slug: "contracts" },
  { label: "Ebooks", slug: "ebooks" },
  { label: "Business shares", slug: "shares" },
];

/** Block 4: six photo cards, one per way to trade. */
const EveryKindOfTrade = () => (
  <section className="relative overflow-hidden bg-[radial-gradient(60%_60%_at_80%_20%,rgba(40,120,255,0.35)_0%,transparent_70%),linear-gradient(180deg,#0a2a95_0%,#0b2d9e_50%,#08237f_100%)] py-20 sm:py-28">
    <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">More ways to trade</p>
        <h2 className="mt-7 text-[48px] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-[76px]">
          One app.
          <br />
          <span className="text-gradient-sky">Every kind of trade.</span>
        </h2>
      </motion.div>

      <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="w-[44%] shrink-0 snap-start sm:w-auto"
          >
            <Link
              to={`/categories/${c.slug}`}
              className="group relative block aspect-[0.54] overflow-hidden rounded-2xl ring-1 ring-white/25 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1.5 hover:ring-brand-sky/80"
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% via-[#071d6b]/70 to-[#05155a]" />
              <ArrowUpRight className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/15 p-1.5 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-4 bottom-5">
                <h3 className="text-lg font-bold leading-tight text-white sm:text-[19px] lg:text-[17px] xl:text-[20px]">{c.label}</h3>
                <span className="mt-3 block h-[3px] w-8 rounded-full bg-brand-sky transition-all duration-300 group-hover:w-14" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <span className="mr-1 text-sm font-medium text-white/60">Also on Bsb Market:</span>
        {more.map((m) => (
          <Link
            key={m.slug}
            to={`/categories/${m.slug}`}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-brand-sky hover:text-white"
          >
            {m.label}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default EveryKindOfTrade;
