import AppStoreButton from "@/components/AppStoreButton";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/bsb-logo.png";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";

const Footer = () => (
  <footer className="py-6 sm:py-12 bg-card border-t border-border/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Desktop footer */}
      <div className="hidden md:grid grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logoAsset} alt="BSB Market logo" className="w-9 h-9 rounded-lg object-contain" loading="lazy" />
            <span className="text-xl font-bold text-foreground">Bsb <span className="text-primary">Market</span></span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">Making trade and business easier. Your one-stop marketplace for goods, services, jobs, and networking.</p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://www.tiktok.com/@bsbmarketapp?_r=1&_t=ZN-99RFQH7EAfW" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1QLffXiTcg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/bsbmarketapp" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="mailto:team@bsbmarket.com" aria-label="Email" className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Marketplace</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Buy & Sell</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Jobs</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Real Estate</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about-us" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/delete-account" className="hover:text-primary transition-colors">Delete Account</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Download App</h4>
          <div className="flex flex-col gap-2">
            <AppStoreButton className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-card rounded-lg text-sm font-medium hover:opacity-90 transition-opacity w-fit">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.97 5.08 20.18 6.88C20.07 6.95 17.7 8.32 17.73 11.16C17.76 14.56 20.67 15.65 20.7 15.66C20.67 15.74 20.22 17.33 19.11 18.97L18.71 19.5ZM13.05 4.24C13.78 3.38 14.25 2.19 14.12 1C13.09 1.04 11.85 1.69 11.1 2.55C10.42 3.31 9.85 4.53 10 5.69C11.14 5.78 12.31 5.1 13.05 4.24Z" /></svg>
              App Store
            </AppStoreButton>
            <a href={PLAY_STORE_URL}
              onClick={openPlayStore} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-card rounded-lg text-sm font-medium hover:opacity-90 transition-opacity w-fit">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302L21.884 12l-1.884 1.19-2.302-2.302L19.884 12l-2.186-1.492zM5.864 2.658L16.8 8.99l-2.302 2.303L5.864 2.658z" /></svg>
              Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="md:border-t md:border-border/50 md:pt-6 text-center space-y-2">
        <p className="text-xs text-muted-foreground">
          23 Urua Udofia, Uyo Akwaibom State.
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} BSB Market, a product of BSB Global Tech Ltd.
        </p>
        <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
          <span>·</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link to="/delete-account" className="hover:text-primary transition-colors">Delete Account</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
