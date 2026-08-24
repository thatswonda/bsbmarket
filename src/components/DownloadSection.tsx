import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AppStoreButton from "@/components/AppStoreButton";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";

const DownloadSection = () => (
  <section className="py-6 sm:py-24 bg-card" id="about-us">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary rounded-2xl sm:rounded-[24px] p-6 sm:p-16"
      >
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary-foreground mb-2 sm:mb-4">
          Download App
        </h2>
        <p className="text-primary-foreground/80 mb-4 sm:mb-8 max-w-md mx-auto text-xs sm:text-base">
          Get our mobile app to access exclusive offers and deals.
        </p>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <AppStoreButton
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-foreground text-card rounded-lg sm:rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6 fill-current">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.97 5.08 20.18 6.88C20.07 6.95 17.7 8.32 17.73 11.16C17.76 14.56 20.67 15.65 20.7 15.66C20.67 15.74 20.22 17.33 19.11 18.97L18.71 19.5ZM13.05 4.24C13.78 3.38 14.25 2.19 14.12 1C13.09 1.04 11.85 1.69 11.1 2.55C10.42 3.31 9.85 4.53 10 5.69C11.14 5.78 12.31 5.1 13.05 4.24Z" />
            </svg>
            <div className="text-left">
              <div className="text-[8px] sm:text-[10px] opacity-80">Download on the</div>
              <div className="text-[10px] sm:text-sm font-semibold -mt-0.5">App Store</div>
            </div>
          </AppStoreButton>
          <a
            href={PLAY_STORE_URL}
              onClick={openPlayStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-foreground text-card rounded-lg sm:rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6 fill-current">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302L21.884 12l-1.884 1.19-2.302-2.302L19.884 12l-2.186-1.492zM5.864 2.658L16.8 8.99l-2.302 2.303L5.864 2.658z" />
            </svg>
            <div className="text-left">
              <div className="text-[8px] sm:text-[10px] opacity-80">Get it on</div>
              <div className="text-[10px] sm:text-sm font-semibold -mt-0.5">Google Play</div>
            </div>
          </a>
        </div>
        {/* Mobile Download App CTA */}
        <div className="mt-4 sm:hidden">
          <a
            href={PLAY_STORE_URL}
              onClick={openPlayStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-accent text-primary font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
          >
            Download App
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DownloadSection;
