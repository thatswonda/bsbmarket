import { motion } from "framer-motion";
import marketTrader from "@/assets/home/market-trader.webp";

/** Block 2: "Buy. Sell. Connect." with the market trader photo. */
const MoreThanMarketplace = () => (
  <section className="relative overflow-hidden bg-navy-900">
    <div className="relative grid min-h-[620px] lg:grid-cols-2">
      {/* Copy */}
      <div className="relative z-10 flex items-center bg-[radial-gradient(80%_60%_at_40%_110%,rgba(16,82,224,0.55)_0%,transparent_70%),linear-gradient(180deg,#05164f_0%,#061b62_100%)] px-4 py-20 sm:px-8 lg:py-28 lg:pl-[max(2rem,calc((100vw-1320px)/2+2rem))]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-[560px] lg:pr-10"
        >
          <p className="eyebrow">More than a marketplace</p>
          <h2 className="mt-8 text-[56px] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-[84px]">
            Buy. Sell.
            <br />
            <span className="text-gradient-sky">Connect.</span>
          </h2>
          <p className="mt-9 max-w-[30rem] text-[17px] leading-[1.75] text-white/80 sm:text-lg">
            From everyday products to professional services, jobs, real estate, cars, ebooks and fairly used items —
            Bsb Market brings people, opportunities and businesses together across Africa and beyond.
          </p>
          <span className="mt-10 block h-[3px] w-[70px] rounded-full bg-brand-bright" />
        </motion.div>
      </div>

      {/* Photo */}
      <div className="relative min-h-[420px] lg:min-h-0">
        <img
          src={marketTrader}
          alt="Smiling trader in an open-air Nigerian market checking the Bsb Market app on her phone"
          className="absolute inset-0 h-full w-full object-cover object-[60%_30%]"
          loading="lazy"
          width={1395}
          height={1174}
        />
        <div className="absolute inset-y-0 left-0 hidden w-48 bg-gradient-to-r from-[#061a5f] to-transparent lg:block" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#05164f] to-transparent lg:h-20" />
      </div>
    </div>
  </section>
);

export default MoreThanMarketplace;
