import { Link } from "react-router-dom";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";

/** Download call-to-action block used at the bottom of content pages. */
const AppCta = ({ heading = "Start buying, selling and hiring on BSB Market" }: { heading?: string }) => (
  <section className="mt-12 sm:mt-16 rounded-3xl bg-primary text-primary-foreground p-6 sm:p-10 text-center">
    <h2 className="text-xl sm:text-3xl font-bold mb-3">{heading}</h2>
    <p className="text-sm sm:text-base opacity-90 max-w-2xl mx-auto mb-6">
      Download the free BSB Market app, create your account in minutes and connect with buyers, sellers, employers and service providers near you.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={PLAY_STORE_URL}
        onClick={openPlayStore}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 rounded-xl bg-card text-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Get it on Google Play
      </a>
      <Link to="/how-it-works" className="inline-flex items-center px-6 py-3 rounded-xl border border-primary-foreground/40 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
        How it works
      </Link>
    </div>
  </section>
);

export default AppCta;
