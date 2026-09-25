import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import { getPageMeta } from "@/lib/seo";

const buyerSteps = [
  { title: "Download the app and sign up", desc: "Install BSB Market from Google Play and create a free account with your name, phone number or email." },
  { title: "Browse and discover", desc: "Explore listings by category: goods, gadgets, services, jobs, real estate, cars and more, near you or anywhere." },
  { title: "Connect with the seller", desc: "Tap a listing to chat or call the seller, service provider or employer directly and ask your questions." },
  { title: "Deal safely and leave a review", desc: "Inspect before you pay, complete the deal and rate your experience to help the community." },
];

const sellerSteps = [
  { title: "Create your free account", desc: "Set up your profile with a clear photo and business details so buyers know who they are dealing with." },
  { title: "Tap Post", desc: "Choose a category, add good photos, a clear title, an honest description, your price and location." },
  { title: "Reply to enquiries", desc: "Buyers and clients contact you directly. Fast, friendly replies close more deals." },
  { title: "Grow your network", desc: "Build your reputation with reviews and connect with other businesses and professionals on BSB Market." },
];

const Steps = ({ steps }: { steps: typeof buyerSteps }) => (
  <ol className="grid gap-4 sm:grid-cols-2">
    {steps.map((s, i) => (
      <li key={s.title} className="bg-card rounded-2xl p-6" style={{ boxShadow: "var(--card-shadow)" }}>
        <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">{i + 1}</span>
        <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
      </li>
    ))}
  </ol>
);

const HowItWorksPage = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/how-it-works").breadcrumbs}
    eyebrow="Getting started"
    title={<>How <span className="text-primary">BSB Market</span> works</>}
    lead="BSB Market connects buyers and sellers, clients and service providers, and employers and job seekers directly. Here is how to get started in four simple steps."
  >
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6">For buyers and people hiring</h2>
      <Steps steps={buyerSteps} />
    </section>
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">For sellers and service providers</h2>
      <Steps steps={sellerSteps} />
    </section>
    <section className="mt-12 space-y-3 text-foreground leading-relaxed">
      <h2 className="text-2xl font-bold">Is it free?</h2>
      <p>
        Yes. Creating an account, browsing and posting listings on BSB Market is free. Buyers and sellers agree on prices and payment directly. Before you meet anyone, read our{" "}
        <Link to="/safety-tips" className="text-primary font-semibold hover:underline">safety tips</Link>, or see the{" "}
        <Link to="/faq" className="text-primary font-semibold hover:underline">FAQ</Link> for more answers.
      </p>
    </section>
    <AppCta />
  </PageLayout>
);

export default HowItWorksPage;
