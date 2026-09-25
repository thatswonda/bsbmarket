import { CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AppStoreButton from "@/components/AppStoreButton";
import { getPageMeta } from "@/lib/seo";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";
import phoneMockup from "@/assets/phone-mockup-bsb.png";

const features = [
  "Post listings for goods, gadgets, cars, property and more in minutes",
  "Hire artisans and freelancers, or offer your own services",
  "Find jobs or post vacancies and chat with candidates",
  "Chat and call buyers and sellers directly",
  "Follow businesses, join groups and grow your network",
  "Free to download and use",
];

const Download = () => (
  <PageLayout
    breadcrumbs={getPageMeta("/download").breadcrumbs}
    eyebrow="Get the app"
    title={<>Download the <span className="text-primary">BSB Market</span> app</>}
    lead="Buy, sell, hire, find jobs and network from your phone with the free BSB Market app."
  >
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-5">What you can do with the app</h2>
        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <a
            href={PLAY_STORE_URL}
            onClick={openPlayStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-foreground text-card rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get it on Google Play
          </a>
          <AppStoreButton className="inline-flex items-center px-6 py-3 bg-accent text-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
            App Store (coming soon)
          </AppStoreButton>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Available now on Android. The iOS version is coming soon.</p>
      </div>
      <img src={phoneMockup} alt="BSB Market app on a smartphone" className="w-56 sm:w-72 h-auto mx-auto" width={768} height={1376} />
    </div>
  </PageLayout>
);

export default Download;
