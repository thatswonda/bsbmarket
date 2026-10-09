import { BookOpen, Briefcase, Car, Home, Megaphone, ShieldCheck, Smartphone, Wrench } from "lucide-react";

const items = [
  { icon: Smartphone, label: "Fairly used phones" },
  { icon: Car, label: "Cars & SUVs" },
  { icon: Home, label: "Duplexes, flats & land" },
  { icon: Briefcase, label: "Jobs & gigs" },
  { icon: Wrench, label: "Artisans & services" },
  { icon: BookOpen, label: "Ebooks" },
  { icon: Megaphone, label: "Brand promotions" },
  { icon: ShieldCheck, label: "Escrow-protected payments" },
];

/** Glowing ticker band that joins the hero to the "Buy. Sell. Connect." block. */
const TradeTicker = () => (
  <div className="relative bg-[#05164f]" aria-label="What people trade on Bsb Market">
    {/* hero glow fading into the band */}
    <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-[#05164f]" />
    <div className="h-px bg-gradient-to-r from-transparent via-brand-sky/70 to-transparent" />
    <div className="relative overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <ul className="flex w-max animate-marquee gap-3 motion-reduce:animate-none">
        {[...items, ...items].map(({ icon: Icon, label }, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/85"
          >
            <Icon className="h-4 w-4 text-brand-sky" />
            {label}
          </li>
        ))}
      </ul>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  </div>
);

export default TradeTicker;
