import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Providers from "./Providers.tsx";
import AppRoutes from "./AppRoutes.tsx";

export { pages, notFoundMeta, renderHeadTags } from "@/lib/seo";
export { SITE_URL } from "@/lib/site";
export { categories } from "@/content/categories";
export { allFaqs } from "@/content/faqs";

/** Renders a route to static HTML at build time (see scripts/prerender.mjs). */
export const render = (url: string) =>
  renderToString(
    <Providers>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </Providers>,
  );
