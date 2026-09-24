import { Link } from "@tanstack/react-router";
import FaqList from "@/components/FaqList";
import { HOME_FAQS } from "@/content/faqs";

const FAQSection = () => (
  <section className="py-8 sm:py-24 bg-background" id="faq">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-6 sm:mb-12">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Got questions? We've got answers. Find everything you need to know about BSB Market.
        </p>
      </div>

      <FaqList faqs={HOME_FAQS} />

      <p className="text-center text-sm text-muted-foreground mt-6">
        <Link to="/faq" className="text-primary font-semibold hover:underline">
          See all BSB Market FAQs
        </Link>
      </p>
    </div>
  </section>
);

export default FAQSection;
