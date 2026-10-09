import AppStoreButton from "@/components/AppStoreButton";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";
import { cn } from "@/lib/utils";

export const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("fill-current", className)} aria-hidden="true">
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.97 5.08 20.18 6.88C20.07 6.95 17.7 8.32 17.73 11.16C17.76 14.56 20.67 15.65 20.7 15.66C20.67 15.74 20.22 17.33 19.11 18.97L18.71 19.5ZM13.05 4.24C13.78 3.38 14.25 2.19 14.12 1C13.09 1.04 11.85 1.69 11.1 2.55C10.42 3.31 9.85 4.53 10 5.69C11.14 5.78 12.31 5.1 13.05 4.24Z" />
  </svg>
);

/** Full-colour Google Play triangle. */
export const PlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#00d7fe" d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1V2.8c0-.4.2-.8.6-1Z" />
    <path fill="#ffce00" d="m17.1 8.7 3.6 2.1c.9.5.9 1.9 0 2.4l-3.6 2.1-3.3-3.3 3.3-3.3Z" />
    <path fill="#ff3a44" d="M13.8 12 17.1 15.3 5.3 22.1c-.6.3-1.2.4-1.7.1L13.8 12Z" />
    <path fill="#00f076" d="M3.6 1.8c.5-.3 1.1-.2 1.7.1l11.8 6.8-3.3 3.3L3.6 1.8Z" />
  </svg>
);

type Variant = "solid" | "outline" | "dark";

const base =
  "inline-flex items-center gap-2.5 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900";

const variants: Record<Variant, string> = {
  solid: "bg-brand text-white shadow-[0_8px_24px_-6px_rgba(21,112,255,0.65)] hover:bg-brand-bright",
  outline: "border border-white/35 text-white hover:border-white/70 hover:bg-white/5",
  dark: "bg-navy-950 text-white ring-1 ring-white/15 hover:ring-white/40",
};

interface StoreButtonProps {
  variant?: Variant;
  /** "compact": one-line label for the navbar. "badge": two-line store badge. */
  size?: "compact" | "badge";
  className?: string;
}

export const GooglePlayButton = ({ variant = "solid", size = "badge", className }: StoreButtonProps) => (
  <a
    href={PLAY_STORE_URL}
    onClick={openPlayStore}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(base, variants[variant], size === "compact" ? "h-11 px-5 text-sm" : "h-14 pl-5 pr-7", className)}
  >
    <PlayIcon className={size === "compact" ? "w-4 h-4" : "w-6 h-6"} />
    {size === "compact" ? (
      <span>Google Play</span>
    ) : (
      <span className="text-left leading-none">
        <span className="block text-[10px] font-medium uppercase tracking-wider opacity-75">Get it on</span>
        <span className="block text-[17px] mt-1">Google Play</span>
      </span>
    )}
  </a>
);

export const AppStoreBadge = ({ variant = "outline", size = "badge", className }: StoreButtonProps) => (
  <AppStoreButton
    className={cn(base, variants[variant], size === "compact" ? "h-11 px-5 text-sm" : "h-14 pl-5 pr-7", className)}
  >
    <AppleIcon className={size === "compact" ? "w-4 h-4" : "w-6 h-6"} />
    {size === "compact" ? (
      <span>App Store</span>
    ) : (
      <span className="text-left leading-none">
        <span className="block text-[10px] font-medium uppercase tracking-wider opacity-75">Download on the</span>
        <span className="block text-[17px] mt-1">App Store</span>
      </span>
    )}
  </AppStoreButton>
);
