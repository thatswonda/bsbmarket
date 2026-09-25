import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { homeFaqs as faqs } from "@/content/faqs";


const FAQSection = () => (
  <section className="py-8 sm:py-24 bg-background" id="faq">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-12"
      >
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Got questions? We've got answers. Find everything you need to know about BSB Market.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl px-4 sm:px-6 border-none"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <AccordionTrigger className="text-sm sm:text-base font-semibold text-foreground hover:no-underline py-4 sm:py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-center text-sm">
          <Link to="/faq" className="text-primary font-semibold hover:underline">See all FAQs</Link>
        </p>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
