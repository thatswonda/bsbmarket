import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageMeta, renderHeadTags } from "@/lib/seo";

/**
 * Keeps <head> (title, description, canonical, Open Graph, JSON-LD) in sync with the
 * current route during client-side navigation. The same tags are baked into each
 * pre-rendered HTML file at build time (see scripts/prerender.mjs).
 */
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = renderHeadTags(getPageMeta(pathname));
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    document.head.insertAdjacentHTML("beforeend", html);
  }, [pathname]);

  return null;
};

export default Seo;
