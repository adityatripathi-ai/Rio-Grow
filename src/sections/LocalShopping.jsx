
import { motion } from "framer-motion";

import shoppingApp from "../assets/images/shopping.png";

import discoverIcon from "../assets/icons/Vector-6.png";
import routineIcon from "../assets/icons/Vector-5.png";
import orderIcon from "../assets/icons/Vector-4.png";

const features = [
  {
    icon: discoverIcon,
    title: "Discover the good stuff nearby",
    description:
      "Browse local sellers, compare ratings and explore groceries and everyday essentials.",
  },
  {
    icon: routineIcon,
    title: "Make room for your routine",
    description:
      "Choose delivery slots and set recurring orders for the things you buy regularly.",
  },
  {
    icon: orderIcon,
    title: "Follow your order. Find your rewards.",
    description:
      "See live delivery progress and keep your wallet, cashback and rewards together.",
  },
];

// Heading animation
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

// Features animation
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
    x: 35,
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

const LocalShopping = () => {
  return (
    <section
      id="shoppers"
      className="w-full bg-[#FFFCF3] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* LEFT IMAGE SECTION */}
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
              duration: 0.9,
              ease: "easeOut",
            }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-[420px] h-[350px] md:h-[400px] bg-[#FFF2BF] rounded-[28px] flex items-center justify-center overflow-hidden"
            >
              <motion.img
                src={shoppingApp}
                alt="RioGrow shopping app"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-[90%] w-auto max-w-[90%] object-contain"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT SECTION */}
          <div className="w-full">

            {/* TAGLINE */}
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[#F15A24] text-[10px] font-semibold tracking-wide mb-4"
            >
              ── FOR YOUR EVERYDAY
            </motion.p>

            {/* HEADING */}
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[#202B3C] text-3xl md:text-[36px] font-bold leading-[1.15]"
            >
              Less running around.
              <br />
              More living local.
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="text-gray-500 text-[11px] md:text-xs leading-relaxed mt-4 max-w-[470px]"
            >
              The shops you love. The little things you need. A simpler way
              to bring it all home.
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
                  whileHover={{
                    x: 6,
                    transition: { duration: 0.25 },
                  }}
                  className="flex items-start gap-3"
                >

                  {/* FEATURE ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
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

                    <p className="text-gray-500 text-[10px] md:text-[11px] leading-relaxed mt-1">
                      {feature.description}
                    </p>
                  </div>

                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LocalShopping;
