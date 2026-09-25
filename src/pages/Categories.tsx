import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import { getPageMeta } from "@/lib/seo";
import { categories } from "@/content/categories";

const Categories = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/categories").breadcrumbs}
    eyebrow="Marketplace"
    title={<>Everything you need, <span className="text-primary">one marketplace</span></>}
    lead="From phones and furniture to plumbers, jobs, houses and business shares, BSB Market organises every kind of deal into easy-to-browse categories."
  >
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <li key={c.slug}>
          <Link
            to={`/categories/${c.slug}`}
            className="group block h-full bg-card rounded-2xl overflow-hidden hover:-translate-y-0.5 transition-transform"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <img src={c.image} alt={`${c.name} listings on BSB Market`} className="w-full aspect-[16/10] object-cover" loading="lazy" width={512} height={320} />
            <div className="p-5">
              <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{c.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
    <AppCta />
  </PageLayout>
);

export default Categories;
