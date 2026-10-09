import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Fingerprint, Landmark, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";

const protections = [
  {
    icon: Landmark,
    title: "Escrow payments",
    text: "When you pay in the app, the money is held in escrow. The seller is paid only after you confirm you received what you ordered.",
  },
  {
    icon: Fingerprint,
    title: "Documented users",
    text: "Every account is properly documented before it can trade, so you always know who is on the other side of a deal.",
  },
  {
    icon: ReceiptText,
    title: "Traceable transactions",
    text: "Every payment, chat and order made in the app leaves a record. If something goes wrong, there is a trail to follow.",
  },
];

/** Trust section: escrow, verified users and traceable transactions, plus the off-app warning. */
const TradeProtection = () => (
  <section className="relative overflow-hidden bg-[linear-gradient(180deg,#041650_0%,#03114a_100%)] py-20 sm:py-28">
    <div className="pointer-events-none absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-brand/30 blur-[140px]" />
    <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[140px]" />
    <div className="relative mx-auto max-w-[1320px] px-4 sm:px-8">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="eyebrow">Trade safely</p>
          <h2 className="mt-6 max-w-3xl text-[38px] font-extrabold leading-[1.05] text-white sm:text-[56px]">
            Protected from the first chat <span className="text-gradient-sky">to the final payment.</span>
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-white/70 sm:text-lg">
          Buy and sell with anyone, anywhere. Bsb Market keeps every deal inside the app accountable.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {protections.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/20 text-brand-sky ring-1 ring-brand-sky/40">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-xl font-bold text-white sm:text-[22px]">{title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/65 sm:text-base">{text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-amber-300/30 bg-amber-300/[0.07] p-7 sm:flex-row sm:items-center sm:p-8">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-300/15 text-amber-300">
          <AlertTriangle className="h-7 w-7" />
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white sm:text-xl">Deals made outside the app can't be traced</h3>
          <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-white/70 sm:text-base">
            Escrow and transaction records only cover payments made in Bsb Market. If anyone asks you to pay by
            transfer, cash or another app, stop and report them from their profile in the app.
          </p>
        </div>
        <Link
          to="/safety-tips"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:border-white/60"
        >
          Safety tips
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

export default TradeProtection;
