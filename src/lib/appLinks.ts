export const APP_STORE_ID = "6813940119";
export const APP_STORE_URL = `https://apps.apple.com/ng/app/bsb-market/id${APP_STORE_ID}`;

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.austindev.bsb&pcampaignid=web_share";

/**
 * Preview/embedded iframes often block `target="_blank"` popups ("Blocked").
 * Fall back to navigating the top-level window, then the current one.
 */
export const openPlayStore = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const win = window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer");
  if (win) return;
  try {
    if (window.top) {
      window.top.location.href = PLAY_STORE_URL;
      return;
    }
  } catch {
    // cross-origin top, fall through
  }
  window.location.href = PLAY_STORE_URL;
};

/** Which store suits the visitor's device: "ios", "android", or null on a computer. */
export const detectStore = (): "ios" | "android" | null => {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent;
  // iPadOS reports itself as a Mac, so also check for a touch screen.
  if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return null;
};
