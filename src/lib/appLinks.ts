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
