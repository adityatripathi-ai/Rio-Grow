
import { motion } from "framer-motion";

import discoverIcon from "../assets/icons/Vector.png";
import prepareIcon from "../assets/icons/Vector-14.png";
import deliveryIcon from "../assets/icons/Vector-13.png";

const steps = [
  {
    icon: discoverIcon,
    title: "Discover & choose",
    description:
      "Explore nearby sellers and add your everyday favorites to your basket.",
  },
  {
    icon: prepareIcon,
    title: "Prepare & connect",
    description:
      "Your local vendor manages the order and gets your items ready.",
  },
  {
    icon: deliveryIcon,
    title: "Deliver & enjoy",
    description:
      "A delivery partner brings it home. Follow the journey in the app.",
  },
];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const stepsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const DailyLocal = () => {
  return (
    <section className="w-full bg-[#FFFCF3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 lg:py-14">

        {/* HEADING */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7">

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[#202B3C] text-2xl md:text-3xl font-bold"
          >
            A little more local. Every day.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-[10px]"
          >
            Simple for you. Connected for everyone.
          </motion.p>

        </div>

        {/* THREE STEPS */}
        <motion.div
          variants={stepsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >

              <div className="flex items-center gap-3 mb-3">

                {/* STEP ICON */}
                <motion.img
                  src={step.icon}
                  alt={step.title}
                  whileHover={{
                    rotate: 12,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 object-contain"
                />

                <h3 className="text-[#202B3C] text-xs font-semibold">
                  {step.title}
                </h3>

              </div>

              <p className="text-gray-500 text-[10px] leading-relaxed max-w-[300px]">
                {step.description}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DailyLocal;
