
import googlePlay from "../assets/images/google-play.png";
import appStore from "../assets/images/app-store.png";

const CTASection = () => {
  return (
    <section className="w-full bg-[#FFCC00]">
      <div className="max-w-[1200px] mx-auto px-5 py-14 md:py-16 text-center">

        {/* LABEL */}
        <p className="text-[#F15A24] text-[9px] font-semibold tracking-wide mb-4">
          ── YOUR NEIGHBORHOOD IS CALLING
        </p>

        {/* HEADING */}
        <h2 className="text-[#202B3C] text-3xl md:text-[42px] font-bold leading-tight">
          Bring home a little local.
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[#202B3C] text-[11px] leading-relaxed mt-4">
          Fresh finds. Familiar shops. A more connected neighborhood.
          <br />
          Your Riogrow experience starts here.
        </p>

        {/* APP DOWNLOAD BUTTONS */}
        <div className="flex justify-center items-center gap-3 mt-7">
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

        {/* TAGLINE */}
        <p className="text-[#202B3C] text-[9px] mt-5">
          Buy Local. Buy Fresh.
        </p>

      </div>
    </section>
  );
};

export default CTASection;
