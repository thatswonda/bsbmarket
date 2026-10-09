import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AppStoreBadge, GooglePlayButton } from "@/components/StoreButtons";
import appUser from "@/assets/bsb-app-user-cutout.png";

const perks = ["Free to download and list", "Payments held until you tap Received", "Chat and call inside the app"];

/** Closing download panel. The marketplace lives in the mobile app, so this is the main call to action. */
const DownloadCta = () => (
  <section className="bg-white px-4 pb-20 sm:px-8 sm:pb-28">
    <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[36px] bg-navy-hero">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:3px_3px]" />
      <div className="relative grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 pb-4 pt-14 sm:px-14 sm:pt-20 lg:pb-20"
        >
          <p className="eyebrow">Get the app</p>
          <h2 className="mt-6 text-[40px] font-extrabold leading-[1.02] text-white sm:text-[60px]">
            Your next deal is
            <br />
            <span className="text-gradient-sky">in your pocket.</span>
          </h2>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-base text-white/85 sm:text-lg">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/30 text-brand-sky ring-1 ring-brand-sky/50">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <GooglePlayButton />
            <AppStoreBadge />
          </div>
        </motion.div>
        <div className="relative mx-auto h-[360px] w-full max-w-[420px] sm:h-[480px]">
          <div className="absolute bottom-0 left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-brand/60 blur-[90px]" />
          <img
            src={appUser}
            alt="Woman holding up a phone showing the Bsb Market app"
            loading="lazy"
            width={750}
            height={1248}
            className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DownloadCta;
