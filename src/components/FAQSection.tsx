import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is BSB Market?",
    a: "BSB Market is a one-stop marketplace where you can buy and sell goods, hire or offer services, find jobs, network with professionals, and explore real estate, contracts, and more — all in one platform.",
  },
  {
    q: "Is BSB Market free to use?",
    a: "Yes! Creating an account and browsing listings is completely free. You can post listings, connect with buyers and sellers, and explore all categories at no cost.",
  },
  {
    q: "How do I post a listing?",
    a: "Simply download the BSB Market app, create an account, and tap the 'Post' button. Fill in your listing details, add photos, set your price, and publish — it's that easy.",
  },
  {
    q: "Is my data safe on BSB Market?",
    a: "Absolutely. We use industry-standard encryption and security measures to protect your personal information. Read our Privacy Policy for full details on how we handle your data.",
  },
  {
    q: "Can I use BSB Market outside my city?",
    a: "Yes! BSB Market works both locally and globally. You can browse listings in your area or expand your search to other cities and regions.",
  },
  {
    q: "How do I contact a seller or service provider?",
    a: "Each listing has a contact button that lets you message or call the seller directly through the app. Communication is seamless and secure.",
  },
];

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
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
