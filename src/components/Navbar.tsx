import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import logoAsset from "@/assets/bsb-logo.png";
import SiteSearch from "@/components/SiteSearch";
import { AppStoreBadge, GooglePlayButton } from "@/components/StoreButtons";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/guides" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "bg-navy-950/85 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] border-b border-white/[0.06]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1320px] items-center justify-between px-4 sm:px-8 transition-all duration-300",
            scrolled ? "h-16 sm:h-[72px]" : "h-[72px] sm:h-24",
          )}
        >
          <Link to="/" className="flex items-center gap-3" aria-label="Bsb Market home">
            <img
              src={logoAsset}
              alt="Bsb Market logo"
              width={56}
              height={56}
              className={cn(
                "rounded-xl object-contain ring-1 ring-white/10 shadow-[0_6px_20px_-6px_rgba(48,140,255,0.6)] transition-all",
                scrolled ? "h-10 w-10" : "h-11 w-11 sm:h-14 sm:w-14",
              )}
            />
            <span className="leading-none">
              <span className="block text-xl sm:text-[28px] font-extrabold tracking-tight text-white">
                Bsb <span className="text-gradient-sky">Market</span>
              </span>
              <span className="mt-1 block text-[10px] sm:text-xs font-medium text-white/80 tracking-wide">
                Buy, Sell &amp; Connect
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative py-2 text-[15px] font-medium transition-colors",
                    isActive ? "text-brand-sky" : "text-white/90 hover:text-white",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:rounded-full after:bg-brand-sky after:transition-all",
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full text-white/90 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Search Bsb Market"
            >
              <Search className="h-[22px] w-[22px]" strokeWidth={1.8} />
            </button>
            <div className="hidden md:flex items-center gap-3">
              <AppStoreBadge size="compact" variant="outline" />
              <GooglePlayButton size="compact" variant="solid" />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 px-4 sm:px-8 pb-6 pt-2">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    end={link.href === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block border-b border-white/[0.06] py-3.5 text-base font-semibold",
                        isActive ? "text-brand-sky" : "text-white/90",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3 md:hidden">
              <GooglePlayButton size="compact" />
              <AppStoreBadge size="compact" />
            </div>
          </div>
        )}
      </nav>
      <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Navbar;
