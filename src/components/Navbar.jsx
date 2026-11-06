import { useState } from "react";

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

  return (
    <header className="bg-[#FFCC00] w-full relative z-50 border-b-1 border-black">

      <nav className="max-w-[1280px] mx-auto px-5 lg:px-10 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <img src={logo} alt="Logo" className="w-[70px]" />

          {/* Navigation */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#202B3C] font-medium hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Store Images */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#">
              <img src={googlePlay} alt="Google Play" className="w-[130px]" />
            </a>

            <a href="#">
              <img src={appStore} alt="App Store" className="w-[130px]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-[#202B3C]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white p-5 mt-4 rounded-xl">

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#202B3C] font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex gap-3 mt-5">
              <img src={googlePlay} alt="Google Play" className="w-1/2" />
              <img src={appStore} alt="App Store" className="w-1/2" />
            </div>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;
