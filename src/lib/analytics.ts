/**
 * Google Analytics 4 wiring. Set VITE_GA_MEASUREMENT_ID (e.g. "G-XXXXXXX") in the
 * project environment to enable it; without it every call here is a no-op.
 */
export const GA_MEASUREMENT_ID =
  (import.meta.env["VITE_GA_MEASUREMENT_ID"] as string | undefined) ?? "";

/** Google Search Console HTML-tag verification token (the `content` value only). */
export const GOOGLE_SITE_VERIFICATION =
  (import.meta.env["VITE_GOOGLE_SITE_VERIFICATION"] as string | undefined) ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Inline bootstrap placed in <head>; the gtag.js library itself loads async. */
export const gaBootstrapScript = (id: string) =>
  `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(id)});`;

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, { page_path: window.location.pathname, ...params });
}

/** Conversion: user clicked through to install the app (sign-up happens in-app). */
export const trackAppDownloadClick = (store: "google_play" | "app_store", location: string) =>
  trackEvent("app_download_click", { store, location });
