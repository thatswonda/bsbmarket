import type { Faq } from "@/content/categories";

/** Plain, always-visible Q&A list (readable by search engines and AI crawlers without JS). */
const FaqList = ({ faqs }: { faqs: Faq[] }) => (
  <div className="space-y-3">
    {faqs.map((f) => (
      <details key={f.q} open className="group bg-card rounded-xl px-4 sm:px-6 py-4" style={{ boxShadow: "var(--card-shadow)" }}>
        <summary className="cursor-pointer list-none">
          <h3 className="inline text-sm sm:text-base font-semibold text-foreground">{f.q}</h3>
        </summary>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
      </details>
    ))}
  </div>
);

export default FaqList;
