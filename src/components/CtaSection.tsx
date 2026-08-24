import { motion } from "framer-motion";
import AppStoreButton from "@/components/AppStoreButton";
import ctaAsset from "@/assets/parcels-shipping.png";
import { PLAY_STORE_URL, openPlayStore } from "@/lib/appLinks";

const CtaSection = () => (
  <section className="py-6 sm:py-24 bg-card">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Desktop */}
      <div className="hidden md:block relative rounded-3xl overflow-hidden" style={{ boxShadow: "var(--card-shadow-hover)" }}>
        <img src={ctaAsset} alt="Packed parcels ready for dispatch to buyers" className="w-full h-[400px] object-cover" loading="lazy" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-12 max-w-lg">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4"
            >
              Ready to start trading?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Join thousands of users already buying, selling, hiring, and networking on BSB Market. Download the app today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-3"
            >
              <AppStoreButton
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.97 5.08 20.18 6.88C20.07 6.95 17.7 8.32 17.73 11.16C17.76 14.56 20.67 15.65 20.7 15.66C20.67 15.74 20.22 17.33 19.11 18.97L18.71 19.5ZM13.05 4.24C13.78 3.38 14.25 2.19 14.12 1C13.09 1.04 11.85 1.69 11.1 2.55C10.42 3.31 9.85 4.53 10 5.69C11.14 5.78 12.31 5.1 13.05 4.24Z" /></svg>
                App Store
              </AppStoreButton>
              <a
                href={PLAY_STORE_URL}
              onClick={openPlayStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302L21.884 12l-1.884 1.19-2.302-2.302L19.884 12l-2.186-1.492zM5.864 2.658L16.8 8.99l-2.302 2.303L5.864 2.658z" /></svg>
                Google Play
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:hidden bg-primary rounded-2xl p-5 text-center"
      >
        <h2 className="text-lg font-bold text-primary-foreground mb-2">Ready to start trading?</h2>
        <p className="text-xs text-primary-foreground/80 mb-4">
          Join thousands already on BSB Market. Download the app today.
        </p>
        <div className="flex items-center justify-center gap-2">
          <AppStoreButton
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-foreground text-card rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.97 5.08 20.18 6.88C20.07 6.95 17.7 8.32 17.73 11.16C17.76 14.56 20.67 15.65 20.7 15.66C20.67 15.74 20.22 17.33 19.11 18.97L18.71 19.5ZM13.05 4.24C13.78 3.38 14.25 2.19 14.12 1C13.09 1.04 11.85 1.69 11.1 2.55C10.42 3.31 9.85 4.53 10 5.69C11.14 5.78 12.31 5.1 13.05 4.24Z" /></svg>
            App Store
          </AppStoreButton>
          <a
            href={PLAY_STORE_URL}
              onClick={openPlayStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-primary-foreground text-foreground rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302L21.884 12l-1.884 1.19-2.302-2.302L19.884 12l-2.186-1.492zM5.864 2.658L16.8 8.99l-2.302 2.303L5.864 2.658z" /></svg>
            Google Play
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
