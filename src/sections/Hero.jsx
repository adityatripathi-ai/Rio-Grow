import googlePlay from "../assets/images/google-play.png";
import appStore from "../assets/images/app-store.png";

import phone1 from "../assets/images/App-screen-raster.png";
import phone2 from "../assets/images/Nearby-sellers-preview.png";
import freshFinds from "../assets/images/Local-discovery-note.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#FFCC00] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="py-12 lg:py-16 z-10">

            {/* Tagline */}
            <p className="text-[#202B3C] text-xs font-medium mb-6">
              ✦ BUY LOCAL BUY FRESH
            </p>

            {/* Heading */}
            <h1 className="text-[#202B3C] text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight">
              Good things.
              <br />
              Closer to home<span className="text-[#F15A24]">.</span>
            </h1>

            {/* Description */}
            <p className="text-[#202B3C] text-sm md:text-base leading-relaxed mt-6 max-w-[450px]">
              Your neighborhood, in your pocket. Discover nearby
              sellers, fill your basket and follow your groceries
              all the way to your door.
            </p>

            {/* App Store Buttons */}
            <div className="flex items-center gap-3 mt-7">

              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="w-[130px] md:w-[150px] hover:scale-105 transition-transform"
                />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  className="w-[130px] md:w-[150px] hover:scale-105 transition-transform"
                />
              </a>

            </div>

            {/* Bottom Text */}
            <p className="text-[#202B3C] text-[10px] mt-4">
              A fresh way to shop. Available for Android & iOS.
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-3 mt-5 text-xs text-[#202B3C]">
              <span>Shop local</span>
              <span className="text-orange-600">✦</span>
              <span>Sell local</span>
              <span className="text-orange-600">✦</span>
              <span>Deliver local</span>
            </div>

          </div>

          {/* RIGHT CONTENT - MOBILE MOCKUPS */}
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[540px]">

            {/* First Mobile Image - Left */}
            <img
              src={phone1}
              alt="RioGrow shopping application"
              className="
                absolute
                w-[165px] sm:w-[210px] lg:w-[250px]
                left-1/2 lg:left-[8%]
                -translate-x-[80%] lg:translate-x-0
                top-[8%]
                -rotate-[1deg]
                z-10
                object-contain drop-shadow-xl
              "
            />

            {/* Second Mobile Image - Right */}
            <img
              src={phone2}
              alt="RioGrow local sellers application"
              className="
                absolute
                w-[165px] sm:w-[210px] lg:w-[250px]
                left-1/2 lg:left-[38%]
                -translate-x-[25%] lg:translate-x-0
                top-[12%]
                rotate-[1deg]
                z-20
                object-contain drop-shadow-xl
              "
            />

            {/* Fresh Finds Nearby */}
            <img
              src={freshFinds}
              alt="Fresh finds nearby"
              className="
                absolute
                w-[105px] sm:w-[145px] lg:w-[165px]
                left-1/2 lg:left-[43%]
                -translate-x-1/2 lg:translate-x-0
                top-[2%]
                z-30
                object-contain
              "
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;