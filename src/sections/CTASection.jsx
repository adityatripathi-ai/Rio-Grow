
import { motion } from "framer-motion";

import googlePlay from "../assets/images/google-play.png";
import appStore from "../assets/images/app-store.png";

const CTASection = () => {
  return (
    <section className="w-full bg-[#FFCC00] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 py-14 md:py-16 text-center">

        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#F15A24] text-[9px] font-semibold tracking-wide mb-4"
        >
          ── YOUR NEIGHBORHOOD IS CALLING
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#202B3C] text-3xl md:text-[42px] font-bold leading-tight"
        >
          Bring home a little local.
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#202B3C] text-[11px] leading-relaxed mt-4"
        >
          Fresh finds. Familiar shops. A more connected neighborhood.
          <br />
          Your Riogrow experience starts here.
        </motion.p>

        {/* APP DOWNLOAD BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            staggerChildren: 0.2,
          }}
          className="flex justify-center items-center gap-3 mt-7"
        >
          <motion.a
            href="#"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              className="w-[130px] md:w-[150px]"
            />
          </motion.a>

          <motion.a
            href="#"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={appStore}
              alt="Download on the App Store"
              className="w-[130px] md:w-[150px]"
            />
          </motion.a>
        </motion.div>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#202B3C] text-[9px] mt-5"
        >
          Buy Local. Buy Fresh.
        </motion.p>

      </div>
    </section>
  );
};

export default CTASection;
