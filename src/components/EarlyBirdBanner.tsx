import { Gift, Check } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const benefits = [
  "Free registration",
  "0 credit to list products",
  "0 credits to apply for jobs",
  "Free business profile verification",
];

const EarlyBirdBanner = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-accent border border-primary/20 px-3 py-1 text-primary hover:bg-primary/10 transition-colors">
          <Gift className="w-3 h-3 shrink-0" />
          <span className="text-[10px] sm:text-xs font-semibold">
            Earlybird Registration Ongoing
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        side="bottom"
        sideOffset={6}
        className="w-64 p-3 rounded-xl border border-primary/20 bg-card shadow-lg"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Gift className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-sm font-bold text-foreground">Early bird benefits</span>
        </div>
        <p className="text-[11px] text-muted-foreground mb-2">
          Join now and enjoy these launch perks.
        </p>
        <ul className="flex flex-col gap-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <div className="w-4 h-4 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-primary-foreground" />
              </div>
              <span className="text-xs text-foreground font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default EarlyBirdBanner;
