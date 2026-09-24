import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/seo";

/**
 * FAQ accordion built on native <details> so every answer is present in the
 * server-rendered HTML (search engines and AI crawlers read closed answers too).
 */
const FaqList = ({ faqs, headingLevel = "h3" }: { faqs: Faq[]; headingLevel?: "h2" | "h3" }) => {
  const Heading = headingLevel;
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.q}
          className="group bg-card rounded-xl px-4 sm:px-6"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 sm:py-5 [&::-webkit-details-marker]:hidden">
            <Heading className="text-sm sm:text-base font-semibold text-foreground text-left">
              {faq.q}
            </Heading>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="text-sm text-muted-foreground leading-relaxed pb-4 sm:pb-5">{faq.a}</p>
        </details>
      ))}
    </div>
  );
};

export default FaqList;
