import { motion } from "framer-motion";
import { Send } from "lucide-react";

const NewsletterSection = () => (
  <section className="py-8 sm:py-20 bg-accent/50">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">
          Stay Updated
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
          Get the latest listings, deals, and marketplace news delivered to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Subscribe</span>
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default NewsletterSection;
