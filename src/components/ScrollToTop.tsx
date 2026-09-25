import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the top on route change, or to the #hash target when there is one. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
