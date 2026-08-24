import { Sparkles } from "lucide-react";

const EarlyBirdBanner = () => (
  <div className="w-full bg-primary text-primary-foreground">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-2 text-center">
      <Sparkles className="w-4 h-4 shrink-0" />
      <p className="text-[11px] sm:text-sm font-medium">
        Early bird registration is ongoing — join BSB Market now and get in ahead of the crowd.
      </p>
    </div>
  </div>
);

export default EarlyBirdBanner;
