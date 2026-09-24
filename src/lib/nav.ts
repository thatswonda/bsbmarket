/** Primary site navigation — shared by the navbar, footer and sitemap-style link blocks. */
export const FEATURE_NAV = [
  { label: "Marketplace", to: "/marketplace" },
  { label: "Jobs", to: "/jobs" },
  { label: "Rides & Dispatch", to: "/rides" },
  { label: "Bookings", to: "/bookings" },
] as const;

export const COMPANY_NAV = [
  { label: "How It Works", to: "/how-it-works" },
  { label: "About Us", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const LEGAL_NAV = [
  { label: "Terms of Use", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Delete Account", to: "/delete-account" },
] as const;
