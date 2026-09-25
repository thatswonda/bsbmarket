import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import { getPageMeta } from "@/lib/seo";
import { categories } from "@/content/categories";
import teamImg from "@/assets/bsb-team-meeting.png";

const values = [
  { title: "Our mission", desc: "To simplify trade and business by connecting people with the goods, services and opportunities they need, locally and globally." },
  { title: "Our vision", desc: "To become Africa's leading digital marketplace, empowering millions of entrepreneurs and professionals." },
  { title: "Trust & safety", desc: "We prioritise secure transactions, verified listings and a safe environment for every user." },
  { title: "Community first", desc: "Built by the community, for the community. We grow when our users succeed." },
];

const About = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/about").breadcrumbs}
    eyebrow="About us"
    title={<>About <span className="text-primary">BSB Market</span></>}
    lead="BSB Market is a social-business marketplace app that makes trade and business easier. In one place, you can buy and sell goods, hire or offer services, find jobs, trade property and cars, and network with other businesses."
  >
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="space-y-4 text-foreground leading-relaxed">
        <h2 className="text-2xl font-bold">Who we are</h2>
        <p>
          BSB Market is built and operated by <strong>BSB Global Tech Ltd</strong>, a technology company registered in Nigeria and headquartered at 23 Urua Udofia, Uyo, Akwa Ibom State. We started with a simple idea: people should not need five different apps to buy, sell, hire, find work and grow their network.
        </p>
        <p>
          BSB Market brings all of that together. Sellers reach buyers, artisans and freelancers find clients, employers find staff, and entrepreneurs meet partners and investors. You can do all of it locally in your city or globally.
        </p>
      </div>
      <img src={teamImg} alt="The BSB Market team in a business meeting" className="w-full h-auto rounded-3xl" loading="lazy" width={1536} height={1024} />
    </div>

    <section className="mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">What we stand for</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {values.map((v) => (
          <div key={v.title} className="bg-card rounded-2xl p-6" style={{ boxShadow: "var(--card-shadow)" }}>
            <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-12 space-y-4 text-foreground leading-relaxed">
      <h2 className="text-2xl font-bold">What you can do on BSB Market</h2>
      <p>BSB Market has {categories.length} marketplace categories, each built for a different kind of deal:</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link to={`/categories/${c.slug}`} className="text-primary font-semibold hover:underline">{c.name}</Link>
            <span className="text-muted-foreground"> — {c.summary}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="mt-12 space-y-4 text-foreground leading-relaxed">
      <h2 className="text-2xl font-bold">Key facts</h2>
      <dl className="grid gap-4 sm:grid-cols-2 text-sm">
        {[
          ["Product", "BSB Market marketplace and social-business app"],
          ["Company", "BSB Global Tech Ltd"],
          ["Headquarters", "23 Urua Udofia, Uyo, Akwa Ibom State, Nigeria"],
          ["Availability", "Android (Google Play); iOS coming soon"],
          ["Price", "Free to join, browse and post listings"],
          ["Contact", "team@bsbmarket.com"],
        ].map(([k, v]) => (
          <div key={k} className="bg-card rounded-xl p-4" style={{ boxShadow: "var(--card-shadow)" }}>
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
    </section>

    <AppCta />
  </PageLayout>
);

export default About;
