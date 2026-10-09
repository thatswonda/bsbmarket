import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Heart, LayoutGrid, MapPin, Search } from "lucide-react";
import { categories } from "@/content/categories";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";
import highlander from "@/assets/home/listing-highlander.webp";
import duplex from "@/assets/home/listing-duplex.webp";
import ebook from "@/assets/home/listing-ebook.webp";

/** Search words people actually type, mapped to the category page that covers them. */
const keywordMap: [RegExp, string][] = [
  [/\b(dispatch|delivery|deliver|rider|courier|logistics|parcel|package)s?\b/i, "dispatch"],
  [/\b(car|cars|toyota|lexus|benz|honda|camry|corolla|highlander|suv|bus|keke|tricycle|okada|motorcycle|bike|tokunbo)\b/i, "automobiles"],
  [/\b(phone|iphone|samsung|tecno|infinix|laptop|macbook|tablet|ipad|airpods|earbuds|watch|gadget)s?\b/i, "gadgets"],
  [/\b(house|duplex|bungalow|flat|apartment|self.?con|land|plot|shop|office|rent|lease|property|estate)s?\b/i, "real-estate"],
  [/\b(job|jobs|vacancy|vacancies|hiring|work|intern|internship|salary|cv)\b/i, "jobs"],
  [/\b(plumber|electrician|cleaner|cleaning|painter|photographer|tutor|makeup|barber|caterer|mechanic|developer|designer|service)s?\b/i, "services"],
  [/\b(ebook|book|pdf|guide|course)s?\b/i, "ebooks"],
  [/\b(spare|part|parts|generator|tools?|hardware|fittings?|panteka)\b/i, "panteka"],
  [/\b(contract|tender|supply|construction)s?\b/i, "contracts"],
  [/\b(share|shares|equity|invest|investment|partner|partnership)\b/i, "shares"],
  [/\b(promo|promotion|influencer|ambassador|advert|ads?)\b/i, "promotions"],
  [/\b(furniture|chair|bed|fridge|tv|appliance|cloth|clothes|shoe|bag|fashion|used)s?\b/i, "goods"],
];

const resolveSearch = (category: string, query: string) => {
  if (category) return `/categories/${category}`;
  const q = query.trim();
  if (!q) return "/categories";
  const hit = keywordMap.find(([re]) => re.test(q));
  if (hit) return `/categories/${hit[1]}`;
  const byName = categories.find((c) => c.name.toLowerCase().includes(q.toLowerCase()));
  return byName ? `/categories/${byName.slug}` : "/categories";
};

type CardProps = {
  img: string;
  alt: string;
  badge: string;
  badgeClass: string;
  title: string;
  meta: string;
  metaIcon: "pin" | "download";
  className?: string;
  imgClass?: string;
  delay: number;
  float: number;
};

const ListingCard = ({ img, alt, badge, badgeClass, title, meta, metaIcon, className, imgClass, delay, float }: CardProps) => (
  <div className={className}>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: [0, -float, 0] }}
    transition={{
      opacity: { duration: 0.7, delay },
      y: { duration: 6, delay: delay + 0.7, repeat: Infinity, ease: "easeInOut" },
    }}
  >
    <div className="rounded-[22px] bg-white/95 p-2.5 pb-4 shadow-[0_0_0_1.5px_rgba(120,190,255,0.55),0_0_40px_-4px_rgba(70,150,255,0.75),0_30px_60px_-20px_rgba(0,8,40,0.8)] backdrop-blur">
      <div className="relative overflow-hidden rounded-[16px]">
        <img src={img} alt={alt} className={imgClass ?? "aspect-[16/10] w-full object-cover"} loading="eager" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold shadow-sm ${badgeClass}`}>{badge}</span>
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-navy-900 shadow">
          <Heart className="h-4 w-4" strokeWidth={2.2} />
        </span>
      </div>
      <div className="px-2.5 pt-3">
        <p className="text-[12px] sm:text-[15px] font-bold leading-tight text-navy-900">{title}</p>
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          {metaIcon === "pin" ? <MapPin className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
          {meta}
        </p>
      </div>
    </div>
  </motion.div>
  </div>
);

const HeroTrade = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(resolveSearch(category, query));
  };

  return (
    <section id="home" className="relative overflow-hidden bg-navy-hero">
      {/* fine grain + light streaks */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:3px_3px]" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-brand/40 blur-[140px]" />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-4 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-[1.05fr_1fr] lg:pb-32 lg:pt-44">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[56px] font-extrabold leading-[0.95] tracking-[-0.045em] text-white sm:text-[84px] xl:text-[100px]"
          >
            <span className="sr-only">Bsb Market, the digital marketplace and social business app to buy, sell, find jobs, book services and property in Nigeria and Africa: </span>
            Trade without
            <br />
            <span className="text-gradient-sky">borders.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-7 max-w-[30rem] text-lg leading-relaxed text-white/80 sm:text-[21px]"
          >
            Connect with buyers and sellers across Africa and beyond — made simple, safe and fast.
          </motion.p>

          <motion.form
            onSubmit={onSubmit}
            role="search"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-10 flex max-w-[730px] flex-col gap-2 rounded-[28px] bg-white p-2 shadow-[0_0_0_4px_rgba(255,255,255,0.12),0_0_50px_-6px_rgba(90,170,255,0.7)] sm:flex-row sm:items-center sm:rounded-full"
          >
            <label className="relative flex items-center gap-3 rounded-full px-4 py-3 text-navy-900 sm:w-[210px] sm:shrink-0 sm:border-r sm:border-slate-200 sm:rounded-none">
              <LayoutGrid className="h-5 w-5 shrink-0 text-slate-500" strokeWidth={1.8} />
              <span className="sr-only">Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full cursor-pointer appearance-none bg-transparent pr-6 text-[15px] font-medium outline-none"
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-slate-500" />
            </label>
            <label className="flex flex-1 items-center gap-3 px-4 py-3 sm:py-0">
              <Search className="h-5 w-5 shrink-0 text-slate-500" strokeWidth={1.8} />
              <span className="sr-only">What are you looking for?</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full bg-transparent text-[15px] text-navy-900 placeholder:text-slate-400 outline-none"
              />
            </label>
            <button
              type="submit"
              className="h-14 shrink-0 rounded-full bg-brand px-10 text-base font-semibold text-white transition-colors hover:bg-brand-bright"
            >
              Search
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href={PLAY_STORE_URL}
              onClick={openPlayStore}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[60px] items-center gap-3 rounded-full bg-brand px-11 text-[17px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(21,112,255,0.9)] transition-colors hover:bg-brand-bright"
            >
              Start selling
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/categories"
              className="inline-flex h-[60px] items-center rounded-full border-[1.5px] border-brand-bright/80 px-11 text-[17px] font-semibold text-white transition-colors hover:bg-white/5"
            >
              Explore market
            </Link>
          </motion.div>
        </div>

        {/* Floating listing cards */}
        <div className="relative mx-auto h-[440px] w-full max-w-[360px] sm:h-[600px] sm:max-w-[640px] lg:h-[640px] lg:max-w-none" aria-hidden="true">
          <div className="absolute inset-[10%] rounded-full bg-brand/50 blur-[90px]" />
          <ListingCard
            img={highlander}
            alt="Dark blue 2021 Toyota Highlander"
            badge="Featured"
            badgeClass="bg-emerald-400 text-emerald-950"
            title="Toyota Highlander 2021"
            meta="Lagos, Nigeria"
            metaIcon="pin"
            delay={0.3}
            float={10}
            className="absolute left-0 top-0 w-[56%] [transform:perspective(1200px)_rotateY(14deg)_rotateZ(-7deg)] sm:left-[2%] sm:w-[58%]"
          />
          <ListingCard
            img={duplex}
            alt="Modern three-bedroom duplex at dusk"
            badge="For Sale"
            badgeClass="bg-brand text-white"
            title="3 Bedroom Duplex"
            meta="Abuja, Nigeria"
            metaIcon="pin"
            imgClass="aspect-[4/3] w-full object-cover"
            delay={0.45}
            float={14}
            className="absolute right-0 top-[22%] w-[52%] [transform:perspective(1200px)_rotateY(-16deg)_rotateZ(8deg)] sm:top-[16%] sm:w-[52%]"
          />
          <ListingCard
            img={ebook}
            alt="Cover of The Business Growth Playbook ebook"
            badge="Digital"
            badgeClass="bg-violet-500 text-white"
            title="Business Growth Playbook (Ebook)"
            meta="Instant Download"
            metaIcon="download"
            imgClass="aspect-[4/3] w-full object-cover"
            delay={0.6}
            float={8}
            className="absolute bottom-0 left-[4%] w-[46%] [transform:perspective(1200px)_rotateX(8deg)_rotateZ(4deg)] sm:bottom-[2%] sm:left-[14%] sm:w-[38%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroTrade;
