import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/bsb-logo.png";
import { AppStoreBadge, GooglePlayButton } from "@/components/StoreButtons";
import { ADDRESS, COMPANY_NAME, SUPPORT_EMAIL } from "@/lib/site";

const columns = [
  {
    title: "Marketplace",
    links: [
      { label: "Fairly used items (Panteka)", to: "/categories/panteka" },
      { label: "Phones & gadgets", to: "/categories/gadgets" },
      { label: "Cars", to: "/categories/automobiles" },
      { label: "Property", to: "/categories/real-estate" },
      { label: "Jobs", to: "/categories/jobs" },
      { label: "Services", to: "/categories/services" },
      { label: "Dispatch & delivery", to: "/categories/dispatch" },
      { label: "Ebooks", to: "/categories/ebooks" },
      { label: "All categories", to: "/categories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", to: "/about" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Blog & guides", to: "/guides" },
      { label: "Safety tips", to: "/safety-tips" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-navy-950 text-white">
    <div className="mx-auto max-w-[1320px] px-4 pb-10 pt-16 sm:px-8 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(2,1fr)]">
        <div>
          <Link to="/" className="flex items-center gap-3" aria-label="Bsb Market home">
            <img src={logoAsset} alt="Bsb Market logo" className="h-12 w-12 rounded-xl ring-1 ring-white/10" loading="lazy" />
            <span className="leading-none">
              <span className="block text-2xl font-extrabold">
                Bsb <span className="text-gradient-sky">Market</span>
              </span>
              <span className="mt-1 block text-xs text-white/70">Buy, Sell &amp; Connect</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/60">
            The digital marketplace and social business app to buy, sell, find jobs, book services and dispatch, trade property and grow your business across Africa and beyond.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <GooglePlayButton size="compact" />
            <AppStoreBadge size="compact" />
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[15px] text-white/80 transition-colors hover:text-brand-sky">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {ADDRESS.city}, {ADDRESS.region}, {ADDRESS.countryName}
          </span>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" /> {SUPPORT_EMAIL}
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span>
            &copy; {new Date().getFullYear()} Bsb Market, a product of {COMPANY_NAME}.
          </span>
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
