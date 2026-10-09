import { BookOpen, Briefcase, Bike, Car, Home, Megaphone, ShieldCheck, Smartphone, Store, Wrench } from "lucide-react";

const items = [
  { icon: Smartphone, label: "Fairly used phones" },
  { icon: Car, label: "Cars & SUVs" },
  { icon: Home, label: "Houses, flats & land" },
  { icon: Briefcase, label: "Jobs & hiring" },
  { icon: Wrench, label: "Book services" },
  { icon: Bike, label: "Dispatch riders" },
  { icon: BookOpen, label: "Ebooks" },
  { icon: Store, label: "Business pages" },
  { icon: Megaphone, label: "Brand promotions" },
  { icon: ShieldCheck, label: "Secure in-app payments" },
];

/** Contained ticker bar that joins the hero to the "Buy. Sell. Connect." block. */
const TradeTicker = () => (
  <div className="relative flow-root bg-[#05164f] px-4 pb-4 sm:px-8" aria-label="What you can do on Bsb Market">
    {/* hero glow fading into the band */}
    <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-[#05164f]" />
    <div className="relative z-10 -mt-7 mx-auto max-w-[1320px] overflow-hidden rounded-full border border-white/10 bg-white/[0.05] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-sky/80 to-transparent" />
      <div className="overflow-hidden py-3.5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max animate-marquee motion-reduce:animate-none">
          {[...items, ...items].map(({ icon: Icon, label }, i) => (
            <li
              key={i}
              aria-hidden={i >= items.length}
              className="flex shrink-0 items-center gap-2.5 pr-8 text-sm font-semibold text-white/85"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/25 ring-1 ring-brand-sky/30">
                <Icon className="h-3.5 w-3.5 text-brand-sky" />
              </span>
              {label}
              <span className="ml-5 h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default TradeTicker;
