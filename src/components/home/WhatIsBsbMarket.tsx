import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SITE_DEFINITION, offerings } from "@/content/offerings";
import { AppStoreBadge, GooglePlayButton } from "@/components/StoreButtons";

/**
 * Plain-language definition plus everything you can do on the app.
 * Written to answer "what is Bsb Market" directly for readers, search engines and AI overviews.
 */
const WhatIsBsbMarket = () => (
  <section id="what-is-bsb-market" className="bg-white py-20 sm:py-28">
    <div className="mx-auto grid max-w-[1320px] gap-14 px-4 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand sm:text-[13px]">The social business space</p>
        <h2 className="mt-4 text-[38px] font-extrabold leading-[1.05] text-navy-900 sm:text-[52px]">What is Bsb Market?</h2>
        <p className="mt-6 text-[17px] leading-[1.75] text-slate-600">{SITE_DEFINITION}</p>
        <p className="mt-4 text-[17px] leading-[1.75] text-slate-600">
          It's built by Bsb Global Tech Ltd in Port Harcourt, Nigeria, and open to buyers, sellers, job seekers, employers,
          service providers and businesses anywhere.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <GooglePlayButton variant="dark" size="compact" />
          <AppStoreBadge variant="dark" size="compact" />
        </div>
      </div>

      <div>
        <h3 className="sr-only">Everything you can do on Bsb Market</h3>
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {offerings.map((o) => (
            <li key={o.title} className="bg-white">
              <Link to={o.path} className="group flex h-full flex-col p-6 transition-colors hover:bg-blue-50/60 sm:p-7">
                <span className="flex items-start justify-between gap-4">
                  <span className="text-lg font-bold text-navy-900">{o.title}</span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition-colors group-hover:text-brand" />
                </span>
                <span className="mt-2 text-[15px] leading-relaxed text-slate-500">{o.text}</span>
              </Link>
            </li>
          ))}
          <li className="flex items-center bg-navy-900 p-6 sm:p-7">
            <p className="text-lg font-bold leading-snug text-white">
              One app. <span className="text-gradient-sky">Every kind of trade.</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default WhatIsBsbMarket;
