
import { motion } from "framer-motion";

import arrow from "../assets/icons/Arrow.png";
import shopperIcon from "../assets/icons/Vector-3.png";
import vendorIcon from "../assets/icons/Vector-2.png";
import driverIcon from "../assets/icons/Vector-13.png";

const features = [
  {
    icon: shopperIcon,
    label: "FOR SHOPPERS",
    title: "Your everyday, made easier.",
    description:
      "Find fresh groceries and everyday essentials from the sellers around you.",
    link: "Explore the shopping experience",
    href: "#shoppers",
  },
  {
    icon: vendorIcon,
    label: "FOR VENDORS",
    title: "Your shop, better connected.",
    description:
      "Bring your catalog, stock and incoming orders into one practical workspace.",
    link: "Explore the vendor experience",
    href: "#vendors",
  },
  {
    icon: driverIcon,
    label: "FOR DRIVERS",
    title: "Your next delivery, in view.",
    description:
      "Find available orders, navigate your stops and keep track of what you earn.",
    link: "Explore the driver experience",
    href: "#drivers",
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

// Cards animation
const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Neighborhood = () => {
  return (
    <section
      id="why-regency"
      className="w-full bg-white py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* SECTION HEADING */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">

          {/* LEFT HEADING */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-[#F15A24] text-[10px] font-semibold tracking-wider mb-3">
              ✦ THE RIOGROW OVERVIEW
            </p>

            <h2 className="text-[#202B3C] text-3xl md:text-4xl font-bold leading-tight">
              One neighborhood.
              <br />
              Three ways to be part of it.
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[350px]"
          >
            Riogrow brings shoppers, local businesses and
            delivery partners together — from the first
            browse to the final doorstep.
          </motion.p>

        </div>

        {/* FEATURE CARDS */}
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >

          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                bg-[#FFFCF3]
                rounded-2xl
                p-6
                border border-[#F8F1E3]
                hover:shadow-xl
                hover:border-[#F5DFAF]
                transition-shadow duration-300
              "
            >

              {/* ICON AND LABEL */}
              <div className="flex items-center justify-between mb-6">

                <motion.img
                  src={feature.icon}
                  alt={feature.label}
                  className="w-7 h-7 object-contain"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />

                <span className="text-[9px] font-semibold text-[#202B3C]">
                  {feature.label}
                </span>

              </div>

              {/* CARD TITLE */}
              <h3 className="text-[#202B3C] text-base font-semibold mb-3">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* CARD LINK */}
              <a
                href={feature.href}
                className="flex items-center justify-between text-[#202B3C] text-[10px] font-semibold hover:text-[#F15A24] transition-colors"
              >
                {feature.link}

                <motion.span
                  className="text-[#4d4644] text-sm"
                  whileHover={{
                    x: 6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <img
                    src={arrow}
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                </motion.span>

              </a>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default Neighborhood;
