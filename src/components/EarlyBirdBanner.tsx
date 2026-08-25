import { useState } from "react";
import { Sparkles, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const benefits = [
  "Free registration",
  "0 credit to list products",
  "0 credits to apply for jobs",
  "Free business profile verification",
];

const EarlyBirdBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-full bg-accent border border-primary/20 px-3 py-1 text-primary hover:bg-primary/10 transition-colors"
      >
        <Sparkles className="w-3 h-3 shrink-0" />
        <span className="text-[10px] sm:text-xs font-semibold">
          Earlybird Registration Ongoing
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm rounded-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Sparkles className="w-4 h-4 text-primary" />
              Early bird benefits
            </DialogTitle>
            <DialogDescription>
              Join now and enjoy these launch perks.
            </DialogDescription>
          </DialogHeader>
          <ul className="flex flex-col gap-3 mt-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-sm text-foreground font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EarlyBirdBanner;
