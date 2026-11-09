
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/images/Riogrow_logo.png";
import googlePlay from "../assets/images/google-play.png";
import appStore from "../assets/images/app-store.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Why Regency", href: "#why-regency" },
    { name: "For Shoppers", href: "#shoppers" },
    { name: "For Vendors", href: "#vendors" },
    { name: "For Drivers", href: "#drivers" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <header className="bg-[#FFCC00] w-full relative z-50 border-b border-black">

      <nav className="max-w-[1280px] mx-auto px-5 lg:px-10 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="w-[70px]"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* DESKTOP NAVIGATION */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex gap-8"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={linkVariants}
                href={link.href}
                whileHover={{ y: -3 }}
                className="text-[#202B3C] font-medium hover:text-white transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* STORE IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center gap-3"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={googlePlay}
                alt="Google Play"
                className="w-[130px]"
              />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={appStore}
                alt="App Store"
                className="w-[130px]"
              />
            </motion.a>
          </motion.div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.85 }}
            className="lg:hidden text-3xl text-[#202B3C]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.25 }}
              className="block"
            >
              {menuOpen ? "✕" : "☰"}
            </motion.span>
          </motion.button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="lg:hidden bg-white mt-4 rounded-xl overflow-hidden"
            >

              <div className="p-5">

                {/* MOBILE LINKS */}
                <motion.div
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-4"
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      variants={linkVariants}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      whileHover={{ x: 5 }}
                      className="text-[#202B3C] font-medium"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </motion.div>

                {/* MOBILE STORE BUTTONS */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="flex gap-3 mt-5"
                >
                  <motion.a
                    href="#"
                    whileTap={{ scale: 0.95 }}
                    className="w-1/2"
                  >
                    <img
                      src={googlePlay}
                      alt="Google Play"
                      className="w-full"
                    />
                  </motion.a>

                  <motion.a
                    href="#"
                    whileTap={{ scale: 0.95 }}
                    className="w-1/2"
                  >
                    <img
                      src={appStore}
                      alt="App Store"
                      className="w-full"
                    />
                  </motion.a>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;
