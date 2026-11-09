
import { motion } from "framer-motion";

import logo from "../assets/images/Riogrow_logo.png";
import aayanLogo from "../assets/images/Aayan-Infotech.png";
import makeInIndia from "../assets/images/Make-in-India.png";

const navLinks = [
  { name: "For shoppers", href: "#shoppers" },
  { name: "For vendors", href: "#vendors" },
  { name: "For drivers", href: "#drivers" },
  { name: "Download the app", href: "#" },
];

const legalLinks = [
  { name: "Privacy policy", href: "#" },
  { name: "Terms & conditions", href: "#" },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Footer = () => {
  return (
    <footer className="w-full bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* TOP FOOTER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 pt-8 pb-5 md:py-8 border-b border-gray-100">

          {/* LOGO AND DESCRIPTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-3"
          >
            <motion.img
              src={logo}
              alt="Riogrow logo"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="w-[70px] sm:w-[75px] h-auto object-contain"
            />

            <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed max-w-[200px]">
              Connecting local shoppers,
              <br />
              vendors and delivery partners.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-end items-center gap-x-5 gap-y-3 text-[#202B3C] text-[11px] sm:text-xs font-medium"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeUp}
                href={link.href}
                whileHover={{ y: -3 }}
                className="hover:text-[#F15A24] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM FOOTER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 pb-5 md:py-5"
        >

          {/* COPYRIGHT */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-[10px] text-center md:text-left order-3 md:order-1"
          >
            © 2026 Riogrow. All rights reserved.
          </motion.p>

          {/* DESIGNED AND DEVELOPED */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 order-1 md:order-2"
          >
            <span className="text-gray-500 text-[10px]">
              Designed &amp; Developed by
            </span>

            <motion.img
              src={aayanLogo}
              alt="Aayan Infotech"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-[65px] h-auto object-contain"
            />

            <motion.img
              src={makeInIndia}
              alt="Make in India"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-[55px] h-auto object-contain"
            />
          </motion.div>

          {/* LEGAL LINKS */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-gray-400 order-2 md:order-3"
          >
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeUp}
                href={link.href}
                whileHover={{ y: -2 }}
                className="hover:text-[#202B3C] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
