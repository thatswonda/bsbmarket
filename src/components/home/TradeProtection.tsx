import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Building2, Check, FileSignature, Fingerprint, ReceiptText, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { paymentFlows } from "@/content/safety";

const flowIcons = { items: ShoppingBag, property: Building2, contracts: FileSignature };

/** Trust section: how payments really work in the app, plus the off-app warning. */
const TradeProtection = () => (
  <section className="relative overflow-hidden bg-[linear-gradient(180deg,#041650_0%,#03114a_100%)] py-20 sm:py-28">
    <div className="pointer-events-none absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-brand/30 blur-[140px]" />
    <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[140px]" />
    <div className="relative mx-auto max-w-[1320px] px-4 sm:px-8">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="eyebrow">Safe payments</p>
          <h2 className="mt-6 max-w-3xl text-[38px] font-extrabold leading-[1.05] text-white sm:text-[56px]">
            Every transaction in the app <span className="text-gradient-sky">is secure.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 text-[15px] text-white/80 sm:text-base">
          <span className="flex items-center gap-3">
            <Fingerprint className="h-5 w-5 text-brand-sky" /> Every user is documented
          </span>
          <span className="flex items-center gap-3">
            <ReceiptText className="h-5 w-5 text-brand-sky" /> Every in-app transaction is traceable
          </span>
        </div>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {paymentFlows.map(({ key, label, title, steps, note }, i) => {
          const Icon = flowIcons[key];
          return (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/20 text-brand-sky ring-1 ring-brand-sky/40">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">{label}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white sm:text-[22px]">{title}</h3>
            <ol className="relative mt-6 space-y-4 border-l border-dashed border-white/20 pl-6">
              {steps.map((step) => (
                <li key={step} className="relative text-[15px] leading-snug text-white/80">
                  <span className="absolute -left-[33px] top-0 grid h-[18px] w-[18px] place-items-center rounded-full bg-brand text-white ring-4 ring-[#071a5a]">
                    <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            {note && <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/55">{note}</p>}
          </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-amber-300/30 bg-amber-300/[0.07] p-7 sm:flex-row sm:items-center sm:p-8">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-300/15 text-amber-300">
          <AlertTriangle className="h-7 w-7" />
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white sm:text-xl">Deals made outside the app can't be traced</h3>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-white/70 sm:text-base">
            These protections only cover payments made in Bsb Market. If anyone asks you to pay by bank transfer, cash or
            another app, don't. Report them from their profile in the app.
          </p>
        </div>
        <Link
          to="/safety-tips"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:border-white/60"
        >
          How payments work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

export default TradeProtection;
