import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import FaqList from "@/components/FaqList";
import { getPageMeta } from "@/lib/seo";
import { categories } from "@/content/categories";
import { uyoFaqs } from "@/content/faqs";

const Uyo = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/buy-and-sell-in-uyo").breadcrumbs}
    eyebrow="Uyo · Akwa Ibom State"
    title={<>Buy and sell in <span className="text-primary">Uyo</span></>}
    lead="BSB Market was built in Uyo. It is a local marketplace for Uyo and Akwa Ibom where you can buy and sell goods, hire artisans, find jobs, rent houses and trade cars, all from your phone."
  >
    <div className="space-y-4 text-foreground leading-relaxed">
      <h2 className="text-2xl font-bold">Uyo's home-grown marketplace</h2>
      <p>
        Our team works from 23 Urua Udofia, Uyo. We know the city's markets, businesses and artisans, and we built BSB Market so that people in Uyo, Eket, Ikot Ekpene, Oron and across Akwa Ibom State can trade with each other easily, and with the rest of Nigeria and the world.
      </p>
      <p>
        Whether you want to sell a fairly used phone, find a plumber or electrician nearby, rent a self-contained apartment, hire staff for your shop or find customers for your business, BSB Market puts you in direct contact with the right people.
      </p>
    </div>

    <section className="mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-5">What people in Uyo trade on BSB Market</h2>
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
      <h2 className="text-2xl font-bold text-foreground mb-5">Questions about BSB Market in Uyo</h2>
      <FaqList faqs={uyoFaqs} />
    </section>

    <AppCta heading="Join buyers and sellers in Uyo on BSB Market" />
  </PageLayout>
);

export default Uyo;
