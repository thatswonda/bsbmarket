import { Link } from "react-router-dom";
import { AlertTriangle, Check, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AppCta from "@/components/AppCta";
import { getPageMeta } from "@/lib/seo";
import { paymentFlows, safetyTips } from "@/content/safety";

const SafetyTips = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/safety-tips").breadcrumbs}
    eyebrow="Trust & safety"
    title={<>How payments stay <span className="text-primary">safe</span></>}
    lead="Every transaction inside Bsb Market is secure. Every user is documented, every in-app payment is traceable, and money only moves when the right person confirms it. Here's how it works, and how to keep it that way."
  >
    <div className="space-y-14">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">How payments work on Bsb Market</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {paymentFlows.map((f) => (
            <article key={f.key} className="flex flex-col rounded-2xl bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{f.label}</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.summary}</p>
              <ol className="mt-5 space-y-3">
                {f.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-foreground">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
              {f.note && (
                <p className="mt-5 flex gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-brand mt-0.5" aria-hidden="true" />
                  {f.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:flex-row">
        <AlertTriangle className="h-7 w-7 shrink-0 text-amber-600" aria-hidden="true" />
        <div>
          <h2 className="text-xl font-bold text-foreground">Deals made outside the app can't be traced</h2>
          <p className="mt-2 leading-relaxed text-foreground/80">
            These protections only cover payments made inside Bsb Market. If someone asks you to pay or get paid by bank
            transfer, cash or another app, don't. Report their profile in the app straight away. Our{" "}
            <Link to="/terms" className="text-primary font-semibold hover:underline">Terms of Use</Link> explain that
            Bsb Market can't mediate or recover money for off-app transactions.
          </p>
        </div>
      </section>

      {safetyTips.map((s) => (
        <section key={s.heading}>
          <h2 className="text-2xl font-bold text-foreground mb-5">{s.heading}</h2>
          <ul className="space-y-3">
            {s.tips.map((tip) => (
              <li key={tip} className="flex gap-3 bg-card rounded-xl p-4 text-sm sm:text-base text-foreground" style={{ boxShadow: "var(--card-shadow)" }}>
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                {tip}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="space-y-3 text-foreground leading-relaxed">
        <h2 className="text-2xl font-bold">Report a problem</h2>
        <p>
          If something doesn't look right, report the listing or profile in the app, or{" "}
          <Link to="/contact" className="text-primary font-semibold hover:underline">contact our support team</Link>.
          Because every in-app transaction is recorded, we can trace what happened.
        </p>
      </section>
    </div>
    <AppCta />
  </PageLayout>
);

export default SafetyTips;
