
import { motion } from "framer-motion";

import googlePlay from "../assets/images/google-play.png";
import appStore from "../assets/images/app-store.png";

import phone1 from "../assets/images/App-screen-raster.png";
import phone2 from "../assets/images/Nearby-sellers-preview.png";
import freshFinds from "../assets/images/Local-discovery-note.png";

const Hero = () => {

  // Left content animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  return (
    <section className="w-full bg-[#FFCC00] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="py-12 lg:py-16 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* TAGLINE */}
            <motion.p
              variants={itemVariants}
              className="text-[#202B3C] text-xs font-medium mb-6"
            >
              ✦ BUY LOCAL BUY FRESH
            </motion.p>

            {/* HEADING */}
            <motion.h1
              variants={itemVariants}
              className="text-[#202B3C] text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight"
            >
              Good things.
              <br />
              Closer to home
              <span className="text-[#F15A24]">.</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="text-[#202B3C] text-sm md:text-base leading-relaxed mt-6 max-w-[450px]"
            >
              Your neighborhood, in your pocket. Discover nearby
              sellers, fill your basket and follow your groceries
              all the way to your door.
            </motion.p>

            {/* APP STORE BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-7"
            >

              <motion.a
                href="#"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08, y: -4 }}
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
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  className="w-[130px] md:w-[150px]"
                />
              </motion.a>

            </motion.div>

            {/* BOTTOM TEXT */}
            <motion.p
              variants={itemVariants}
              className="text-[#202B3C] text-[10px] mt-4"
            >
              A fresh way to shop. Available for Android & iOS.
            </motion.p>

            {/* BOTTOM LINKS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 mt-5 text-xs text-[#202B3C]"
            >
              <span>Shop local</span>
              <span className="text-orange-600">✦</span>
              <span>Sell local</span>
              <span className="text-orange-600">✦</span>
              <span>Deliver local</span>
            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT - MOBILE MOCKUPS */}
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[540px]">

            {/* FIRST MOBILE IMAGE - LEFT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="
                absolute
                w-[165px] sm:w-[210px] lg:w-[250px]
                left-1/2 lg:left-[8%]
                -translate-x-[80%] lg:translate-x-0
                top-[8%]
                z-10
              "
            >
              <motion.img
                src={phone1}
                alt="RioGrow shopping application"
                animate={{
                  y: [0, -12, 0],
                  rotate: [-1, 0, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* SECOND MOBILE IMAGE - RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="
                absolute
                w-[165px] sm:w-[210px] lg:w-[250px]
                left-1/2 lg:left-[38%]
                -translate-x-[25%] lg:translate-x-0
                top-[12%]
                z-20
              "
            >
              <motion.img
                src={phone2}
                alt="RioGrow local sellers application"
                animate={{
                  y: [0, -15, 0],
                  rotate: [1, 0, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* FRESH FINDS NEARBY */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: "backOut",
              }}
              className="
                absolute
                w-[105px] sm:w-[145px] lg:w-[165px]
                left-1/2 lg:left-[43%]
                -translate-x-1/2 lg:translate-x-0
                top-[2%]
                z-30
              "
            >
              <motion.img
                src={freshFinds}
                alt="Fresh finds nearby"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full object-contain"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
