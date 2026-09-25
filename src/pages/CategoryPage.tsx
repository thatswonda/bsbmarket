import { Link, useParams } from "react-router-dom";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import FaqList from "@/components/FaqList";
import NotFound from "@/pages/NotFound";
import { getPageMeta } from "@/lib/seo";
import { categories, getCategory } from "@/content/categories";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = getCategory(slug);
  if (!category) return <NotFound />;

  const related = categories.filter((c) => c.slug !== category.slug).slice(0, 6);

  return (
    <PageLayout
      breadcrumbs={getPageMeta(`/categories/${category.slug}`).breadcrumbs}
      eyebrow={`${category.name} on BSB Market`}
      title={category.heading}
      lead={category.summary}
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className="space-y-4 text-foreground leading-relaxed">
          {category.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <img
          src={category.image}
          alt={`${category.name} listings on BSB Market`}
          className="w-full h-auto rounded-3xl"
          width={512}
          height={512}
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">What you can find in {category.name}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {category.whatYouFind.map((item) => (
            <li key={item} className="flex gap-3 bg-card rounded-xl p-4 text-sm text-foreground" style={{ boxShadow: "var(--card-shadow)" }}>
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">Tips for a safe deal</h2>
        <ul className="space-y-3">
          {category.tips.map((tip) => (
            <li key={tip} className="flex gap-3 text-sm sm:text-base text-foreground">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              {tip}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Read our full <Link to="/safety-tips" className="text-primary font-semibold hover:underline">safety tips for buying and selling online</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">{category.name} FAQ</h2>
        <FaqList faqs={category.faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">Explore other categories</h2>
        <ul className="flex flex-wrap gap-2">
          {related.map((c) => (
            <li key={c.slug}>
              <Link to={`/categories/${c.slug}`} className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                {c.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/categories" className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-primary hover:underline">All categories</Link>
          </li>
        </ul>
      </section>

      <AppCta heading={`Find ${category.name.toLowerCase()} on the BSB Market app`} />
    </PageLayout>
  );
};

export default CategoryPage;
