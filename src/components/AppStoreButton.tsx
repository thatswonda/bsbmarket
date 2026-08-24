import { useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";

interface AppStoreButtonProps {
  className?: string;
  children: ReactNode;
}

/** Apple App Store button — opens a "Coming soon" dialog. */
const AppStoreButton = ({ className, children }: AppStoreButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xs rounded-2xl text-center">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">Coming soon</DialogTitle>
            <DialogDescription className="text-center">
              The BSB Market iOS app is on its way. In the meantime, grab it on Google Play.
            </DialogDescription>
          </DialogHeader>
          <a
            href={PLAY_STORE_URL}
              onClick={openPlayStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get it on Google Play
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppStoreButton;
