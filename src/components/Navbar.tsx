import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoAsset from "@/assets/bsb-logo.png";


const navLinks = [
  { label: "Home", mobileLabel: "Home", href: "/" },
  { label: "Categories", mobileLabel: "Explore", href: "/categories" },
  { label: "About Us", mobileLabel: "About", href: "/about" },
  { label: "FAQ", mobileLabel: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-card/80 backdrop-blur-xl border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <Link to="/" className="flex items-center gap-2" aria-label="BSB Market home">
          <img src={logoAsset} alt="BSB Market logo" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-contain" />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground whitespace-nowrap">
            Bsb <span className="text-primary">Market</span>
          </span>
        </Link>


        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/download"
            className="px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Download App
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="flex sm:hidden items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {link.mobileLabel}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
