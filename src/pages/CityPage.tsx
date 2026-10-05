import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import FaqList from "@/components/FaqList";
import { getPageMeta } from "@/lib/seo";
import { categories } from "@/content/categories";
import { cities, cityPath, type City } from "@/content/cities";

const CityPage = ({ city }: { city: City }) => {
  const others = cities.filter((c) => c.slug !== city.slug);
  return (
    <PageLayout
      breadcrumbs={getPageMeta(cityPath(city)).breadcrumbs}
      eyebrow={`${city.name} · ${city.state}`}
      title={<>Buy and sell in <span className="text-primary">{city.name}</span></>}
      lead={city.lead}
    >
      <div className="space-y-4 text-foreground leading-relaxed">
        <h2 className="text-2xl font-bold">An online marketplace for {city.name}</h2>
        {city.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p>
          Popular areas include {city.areas.slice(0, -1).join(", ")} and {city.areas[city.areas.length - 1]}.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">What people trade in {city.name}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {city.highlights.map((h) => (
            <li key={h} className="flex gap-3 bg-card rounded-xl p-4 text-sm text-foreground" style={{ boxShadow: "var(--card-shadow)" }}>
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">Browse categories</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {categories.map((c) => (
            <li key={c.slug} className="bg-card rounded-xl p-4 text-sm" style={{ boxShadow: "var(--card-shadow)" }}>
              <Link to={`/categories/${c.slug}`} className="font-semibold text-primary hover:underline">{c.name}</Link>
              <p className="text-muted-foreground mt-1">{c.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">Trading safely in {city.name}</h2>
        <p className="flex gap-3 text-sm sm:text-base text-foreground">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          {city.meetingTips}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Read our full <Link to="/safety-tips" className="text-primary font-semibold hover:underline">safety tips for buying and selling online</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">Questions about Bsb Market in {city.name}</h2>
        <FaqList faqs={city.faqs} />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-5">Other cities</h2>
        <ul className="flex flex-wrap gap-2">
          {[{ name: "Uyo", path: "/buy-and-sell-in-uyo" }, ...others.map((c) => ({ name: c.name, path: cityPath(c) }))].map((c) => (
            <li key={c.path}>
              <Link to={c.path} className="inline-block px-4 py-2 rounded-full bg-accent text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                Buy &amp; sell in {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AppCta heading={`Join buyers and sellers in ${city.name} on Bsb Market`} />
    </PageLayout>
  );
};

export default CityPage;
