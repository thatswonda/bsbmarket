import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { homeFaqs } from "@/content/faqs";
import { SUPPORT_EMAIL } from "@/lib/site";

const HomeFaq = () => (
  <section id="faq" className="bg-white py-20 sm:py-28">
    <div className="mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand sm:text-[13px]">FAQ</p>
        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.05] text-navy-900 sm:text-[52px]">Questions, answered.</h2>
        <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-500 sm:text-lg">
          Can't find what you need? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-brand hover:underline">
            {SUPPORT_EMAIL}
          </a>{" "}
          or see the <Link to="/faq" className="font-semibold text-brand hover:underline">full FAQ</Link>.
        </p>
      </div>
      <Accordion type="single" collapsible defaultValue="faq-0" className="divide-y divide-slate-200 border-y border-slate-200">
        {homeFaqs.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${i}`} className="border-none">
            <AccordionTrigger className="py-6 text-left text-lg font-bold text-navy-900 hover:no-underline sm:text-xl">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 pr-8 text-base leading-relaxed text-slate-500">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default HomeFaq;
