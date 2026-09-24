import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/bsb-logo.webp";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";
import { FEATURE_NAV, COMPANY_NAV } from "@/lib/nav";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sheetLinkClass =
    "px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors";

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-card/80 backdrop-blur-xl border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <Link to="/" className="flex items-center gap-2" aria-label="BSB Market home">
          <img
            src={logoAsset}
            alt="BSB Market logo"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-contain"
            width={36}
            height={36}
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            Bsb <span className="text-primary">Market</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {[...FEATURE_NAV, COMPANY_NAV[0]].map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={PLAY_STORE_URL}
            onClick={openPlayStore}
            data-location="navbar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Download App
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 mt-6">
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Features
                </p>
                {FEATURE_NAV.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={sheetLinkClass}
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Company
                </p>
                {COMPANY_NAV.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={sheetLinkClass}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/delete-account"
                  onClick={() => setOpen(false)}
                  className={`${sheetLinkClass} mt-4`}
                >
                  Delete Account
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
