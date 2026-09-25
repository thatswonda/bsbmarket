import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import FaqList from "@/components/FaqList";
import { getPageMeta } from "@/lib/seo";
import { allFaqs } from "@/content/faqs";

const FaqPage = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/faq").breadcrumbs}
    eyebrow="Help centre"
    title={<>Frequently asked <span className="text-primary">questions</span></>}
    lead="Everything you need to know about buying, selling, hiring and networking on BSB Market."
  >
    <div className="space-y-12">
      {allFaqs.map((group) => (
        <section key={group.group}>
          <h2 className="text-2xl font-bold text-foreground mb-5">{group.group}</h2>
          <FaqList faqs={group.items} />
        </section>
      ))}
    </div>
    <p className="mt-10 text-sm text-muted-foreground">
      Still have a question? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact our support team</Link>.
    </p>
    <AppCta />
  </PageLayout>
);

export default FaqPage;
