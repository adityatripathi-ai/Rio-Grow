
import { motion } from "framer-motion";

import storeStats from "../assets/images/store-status.png";
import inventory from "../assets/images/Inventory-preview.png";
import orderManagement from "../assets/images/Order-management-preview.png";

import catalogIcon from "../assets/icons/Vector-9.png";
import orderIcon from "../assets/icons/Vector-8.png";
import statsIcon from "../assets/icons/Vector-7.png";

const features = [
  {
    icon: catalogIcon,
    title: "A catalog you can keep on top of",
    description:
      "Manage products, adjust quantities and spot low-stock items before anyone asks.",
  },
  {
    icon: orderIcon,
    title: "Every order has a next step",
    description:
      "Accept incoming orders, start preparing and mark them ready for collection.",
  },
  {
    icon: statsIcon,
    title: "See how your shop is doing",
    description:
      "Keep revenue, active orders and performance insights close at hand.",
  },
];

// Animation variants
const headingVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
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

const featureItem = {
  hidden: {
    opacity: 0,
    x: -30,
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

const ShopManagement = () => {
  return (
    <section
      id="vendors"
      className="w-full bg-[#FFFCF3] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14 lg:py-20">

        {/* SECTION HEADING */}
        <motion.div
          className="mb-8"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#F15A24] text-[10px] font-semibold tracking-wide mb-3">
            GROW WITH YOUR NEIGHBORHOOD
          </p>

          <motion.h2
            className="text-[#202B3C] text-3xl md:text-[42px] font-bold leading-tight"
          >
            Local shop. Bigger possibilities.
          </motion.h2>
        </motion.div>

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="bg-gray-100 px-6 py-6 rounded-2xl grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] items-center gap-8 lg:gap-12"
        >

          {/* LEFT CONTENT */}
          <div className="w-full">

            <p className="text-gray-500 text-xs leading-relaxed max-w-[300px] mb-7">
              More time for your business. Less time juggling the details.
            </p>

            {/* FEATURES */}
            <motion.div
              className="space-y-5"
              variants={featureContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureItem}
                  whileHover={{
                    x: 6,
                    transition: { duration: 0.25 },
                  }}
                  className="flex items-start gap-3 cursor-pointer"
                >

                  {/* FEATURE ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-[#FFF0B3] rounded-lg flex items-center justify-center shrink-0"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-5 h-5 object-contain"
                    />
                  </motion.div>

                  {/* FEATURE TEXT */}
                  <div>
                    <h3 className="text-[#202B3C] text-[12px] font-semibold">
                      {feature.title}
                    </h3>

                    <p className="text-gray-500 text-[10px] leading-relaxed mt-1">
                      {feature.description}
                    </p>
                  </div>

                </motion.div>
              ))}
            </motion.div>

            {/* BOTTOM LINK */}
            <motion.a
              href="#"
              whileHover={{
                x: 6,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-flex items-center gap-2 mt-7 text-[#202B3C] text-[11px] font-semibold hover:text-[#F15A24] transition-colors"
            >
              Made for your day-to-day

              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#F15A24]"
              >
                →
              </motion.span>
            </motion.a>

          </div>

          {/* RIGHT DASHBOARD IMAGES */}
          <div className="w-full">

            <div className="relative bg-[#FFF2BF] rounded-[28px] w-full h-[480px] md:h-[500px] overflow-hidden">

              {/* LEFT IMAGE - STORE STATUS */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -70,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  w-[40%] md:w-[32%]
                  h-[97%]
                  left-[9%] md:left-[11%]
                  top-[5%]
                  rotate-[-2deg]
                  z-10
                "
              >
                <motion.img
                  src={storeStats}
                  alt="Store statistics dashboard"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* CENTER IMAGE - INVENTORY */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  w-[46%] md:w-[37%]
                  h-[105%]
                  left-[27%] md:left-[31%]
                  top-[0%]
                  z-[5]
                "
              >
                <motion.img
                  src={inventory}
                  alt="Stocks and inventory dashboard"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* RIGHT IMAGE - ORDER MANAGEMENT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 70,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  w-[40%] md:w-[32%]
                  h-[82%]
                  right-[8%] md:right-[11%]
                  top-[15%]
                  rotate-[2deg]
                  z-10
                "
              >
                <motion.img
                  src={orderManagement}
                  alt="Order management dashboard"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </motion.div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ShopManagement;
