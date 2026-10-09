import { motion } from "framer-motion";
import { Camera, Download, MessagesSquare } from "lucide-react";
import { AppStoreBadge, GooglePlayButton } from "@/components/StoreButtons";

const steps = [
  {
    icon: Download,
    title: "Download the app",
    text: "Get Bsb Market free on Google Play or the App Store and create your free account.",
  },
  {
    icon: Camera,
    title: "Post or browse",
    text: "Snap clear photos, add a price and publish. Or search what's for sale from buyers and sellers anywhere.",
  },
  {
    icon: MessagesSquare,
    title: "Chat and close the deal",
    text: "Agree on terms in the app chat, pay into escrow, and confirm once you have the item. The seller is paid after you confirm.",
  },
];

/** How it works: three steps, all inside the mobile app. */
const StartTrading = () => (
  <section className="bg-slate-50 py-20 sm:py-28">
    <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand sm:text-[13px]">How it works</p>
          <h2 className="mt-4 max-w-2xl text-[38px] font-extrabold leading-[1.05] text-navy-900 sm:text-[52px]">
            From your phone to a done deal in three steps.
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-slate-500 sm:text-lg">
          Listing is free. Payments go through escrow in the app, so the seller is paid only after the buyer confirms.
        </p>
      </div>

      <ol className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_20px_40px_-30px_rgba(4,22,80,0.35)]"
          >
            <span className="pointer-events-none absolute -right-2 -top-6 text-[130px] font-extrabold leading-none text-slate-100">
              {i + 1}
            </span>
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_22px_-8px_rgba(21,112,255,0.8)]">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="relative mt-7 text-xl font-bold text-navy-900">{title}</h3>
            <p className="relative mt-3 text-[15px] leading-relaxed text-slate-500">{text}</p>
          </motion.li>
        ))}
      </ol>

      <div className="mt-12 flex flex-wrap gap-4">
        <GooglePlayButton variant="dark" />
        <AppStoreBadge variant="dark" />
      </div>
    </div>
  </section>
);

export default StartTrading;
