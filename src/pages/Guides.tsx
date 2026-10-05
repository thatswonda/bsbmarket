import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import { getPageMeta } from "@/lib/seo";
import { guides } from "@/content/guides";
import { cities, cityPath } from "@/content/cities";

const Guides = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/guides").breadcrumbs}
    eyebrow="Guides"
    title={<>Bsb Market <span className="text-primary">guides</span></>}
    lead="Practical, step-by-step guides to buying, selling, hiring and finding work online in Nigeria, plus everything you need to know about Bsb Market."
  >
    <ul className="grid gap-5 sm:grid-cols-2">
      {guides.map((g) => (
        <li key={g.slug}>
          <Link
            to={`/guides/${g.slug}`}
            className="group block h-full bg-card rounded-2xl p-5 hover:-translate-y-0.5 transition-transform"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-2">{g.eyebrow}</p>
            <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{g.heading}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.metaDescription}</p>
          </Link>
        </li>
      ))}
    </ul>

    <section className="mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-5">Buy and sell in your city</h2>
      <ul className="flex flex-wrap gap-2">
        {[{ name: "Uyo", path: "/buy-and-sell-in-uyo" }, ...cities.map((c) => ({ name: c.name, path: cityPath(c) }))].map((c) => (
          <li key={c.path}>
            <Link to={c.path} className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              Buy &amp; sell in {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <AppCta />
  </PageLayout>
);

export default Guides;
