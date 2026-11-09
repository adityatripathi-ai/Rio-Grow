
import { motion } from "framer-motion";

import goodMorning from "../assets/images/Good-morning.png";
import optimizedRoute from "../assets/images/Optimized-route-preview.png";
import earningPreview from "../assets/images/Earnings-preview.png";

import deliveryIcon from "../assets/icons/Vector-12.png";
import routeIcon from "../assets/icons/Vector-11.png";
import earningsIcon from "../assets/icons/Vector-10.png";

const features = [
  {
    icon: deliveryIcon,
    title: "Find your next order",
    description:
      "Go online, review available deliveries and see pickup and drop-off details.",
  },
  {
    icon: routeIcon,
    title: "Know where to go next",
    description:
      "Follow optimized routes, turn instructions and a clear list of delivery stops.",
  },
  {
    icon: earningsIcon,
    title: "Keep your earnings in sight",
    description:
      "Review daily and weekly earnings, tips, bonuses and recent payouts.",
  },
];

const imageContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const featureContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const featureVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const DeliverySection = () => {
  return (
    <section
      id="drivers"
      className="w-full bg-[#FFFCF3] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 py-12 lg:py-16">

        {/* MAIN DARK CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#202B3C] rounded-[28px] px-6 md:px-10 lg:px-12 py-10 lg:py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-10 lg:gap-12">

            {/* LEFT - THREE MOBILE IMAGES */}
            <motion.div
              variants={imageContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative w-full h-[340px] sm:h-[420px] lg:h-[470px]"
            >

              {/* LEFT IMAGE - GOOD MORNING */}
              <motion.img
                variants={imageVariants}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.05, rotate: -5 }}
                src={goodMorning}
                alt="Driver app home screen"
                className="
                  absolute
                  w-[42%] sm:w-[40%] lg:w-[38%]
                  left-[9%] sm:left-[11%] lg:left-[10%]
                  top-[18%]
                  rotate-[-8deg]
                  object-contain
                  z-10
                "
              />

              {/* CENTER IMAGE - OPTIMIZED ROUTE */}
              <motion.img
                variants={imageVariants}
                animate={{ y: [0, -14, 0] }}
                transition={{
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.06 }}
                src={optimizedRoute}
                alt="Driver optimized route screen"
                className="
                  absolute
                  w-[44%] sm:w-[42%] lg:w-[40%]
                  left-[28%] sm:left-[30%] lg:left-[30%]
                  top-[7%]
                  object-contain
                  rotate-0
                  z-20
                "
              />

              {/* RIGHT IMAGE - EARNINGS */}
              <motion.img
                variants={imageVariants}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.05, rotate: 4 }}
                src={earningPreview}
                alt="Driver earnings screen"
                className="
                  absolute
                  w-[42%] sm:w-[40%] lg:w-[38%]
                  right-[9%] sm:right-[11%] lg:right-[10%]
                  top-[18%]
                  rotate-[7deg]
                  object-contain
                  z-10
                "
              />

            </motion.div>

            {/* RIGHT - CONTENT */}
            <div className="w-full">

              {/* SMALL LABEL */}
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#FFCC00] text-[9px] font-semibold tracking-wide mb-4"
              >
                ── KEEP YOUR NEIGHBORHOOD MOVING
              </motion.p>

              {/* HEADING */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-white text-3xl md:text-[36px] font-bold leading-[1.15]"
              >
                Good deliveries.
                <br />
                A clearer day.
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-300 text-[11px] leading-relaxed mt-4 max-w-[400px]"
              >
                From your next pickup to your earnings overview, bring the
                details of every delivery together.
              </motion.p>

              {/* FEATURES */}
              <motion.div
                variants={featureContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-7 space-y-5"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={featureVariants}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-3"
                  >
                    {/* ICON */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.12 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-[#344052] rounded-lg flex items-center justify-center shrink-0"
                    >
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-5 h-5 object-contain"
                      />
                    </motion.div>

                    {/* FEATURE TEXT */}
                    <div>
                      <h3 className="text-white text-[12px] font-semibold">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySection;
