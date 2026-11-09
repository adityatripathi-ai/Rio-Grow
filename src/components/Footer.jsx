import logo from "../assets/images/Riogrow_logo.png";
import aayanLogo from "../assets/images/Aayan-Infotech.png";
import makeInIndia from "../assets/images/Make-in-India.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* TOP FOOTER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 pt-8 pb-5 md:py-8 border-b border-gray-100">

          {/* LOGO AND DESCRIPTION */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src={logo}
              alt="Riogrow logo"
              className="w-[70px] sm:w-[75px] h-auto object-contain"
            />

            <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed max-w-[200px]">
              Connecting local shoppers,
              <br />
              vendors and delivery partners.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-5 gap-y-3 text-[#202B3C] text-[11px] sm:text-xs font-medium">
            <a href="#shoppers" className="hover:text-[#F15A24] transition-colors">
              For shoppers
            </a>

            <a href="#vendors" className="hover:text-[#F15A24] transition-colors">
              For vendors
            </a>

            <a href="#drivers" className="hover:text-[#F15A24] transition-colors">
              For drivers
            </a>

            <a href="#" className="hover:text-[#F15A24] transition-colors">
              Download the app
            </a>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 pb-5 md:py-5">

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-[10px] text-center md:text-left order-3 md:order-1">
            © 2026 Riogrow. All rights reserved.
          </p>

          {/* DESIGNED AND DEVELOPED */}
          <div className="flex flex-wrap items-center justify-center gap-3 order-1 md:order-2">
            <span className="text-gray-500 text-[10px]">
              Designed &amp; Developed by
            </span>

            <img
              src={aayanLogo}
              alt="Aayan Infotech"
              className="w-[65px] h-auto object-contain"
            />

            <img
              src={makeInIndia}
              alt="Make in India"
              className="w-[55px] h-auto object-contain"
            />
          </div>

          {/* LEGAL LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-gray-400 order-2 md:order-3">
            <a href="#" className="hover:text-[#202B3C] transition-colors">
              Privacy policy
            </a>

            <a href="#" className="hover:text-[#202B3C] transition-colors">
              Terms &amp; conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;