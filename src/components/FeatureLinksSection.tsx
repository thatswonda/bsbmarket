import { Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag, Briefcase, Bike, CalendarCheck } from "lucide-react";
import { FEATURE_LIST, type FeatureKey } from "@/content/features";

const ICONS: Record<FeatureKey, typeof ShoppingBag> = {
  marketplace: ShoppingBag,
  jobs: Briefcase,
  rides: Bike,
  bookings: CalendarCheck,
};

/** Homepage block linking to every feature landing page (primary internal links). */
const FeatureLinksSection = () => (
  <section className="py-8 sm:py-20 bg-background" aria-labelledby="features-heading">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-6 sm:mb-12">
        <h2
          id="features-heading"
          className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4"
        >
          What can you do on BSB Market?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          BSB Market combines four services in one Nigerian app, and every in-app payment is held in
          escrow until the buyer confirms delivery.{" "}
          <Link to="/how-it-works" className="text-primary font-medium hover:underline">
            See how escrow works
          </Link>
          .
        </p>
      </div>
      <ul className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_LIST.map((f) => {
          const Icon = ICONS[f.key];
          return (
            <li key={f.key}>
              <Link
                to={f.path}
                className="group flex h-full flex-col rounded-2xl bg-card p-5 hover:ring-2 hover:ring-primary/30 transition"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <span className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-foreground mb-1">{f.navLabel}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {f.cardSummary}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn about {f.navLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default FeatureLinksSection;
