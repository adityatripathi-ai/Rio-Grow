import arrow from "../assets/icons/arrow.png";
import shopperIcon from "../assets/icons/vector-3.png";
import vendorIcon from "../assets/icons/vector-2.png";
import driverIcon from "../assets/icons/vector-13.png";

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

const Neighborhood = () => {
  return (
    <section
      id="why-regency"
      className="w-full bg-white py-16 lg:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* SECTION HEADING */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
          <div>
            <p className="text-[#F15A24] text-[10px] font-semibold tracking-wider mb-3">
              ✦ THE RIOGROW OVERVIEW
            </p>

            <h2 className="text-[#202B3C] text-3xl md:text-4xl font-bold leading-tight">
              One neighborhood.
              <br />
              Three ways to be part of it.
            </h2>
          </div>

          <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[350px]">
            Riogrow brings shoppers, local businesses and
            delivery partners together — from the first
            browse to the final doorstep.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFFCF3] rounded-2xl p-6 border border-[#F8F1E3] hover:-translate-y-1 transition-all duration-300"
            >

              {/* ICON AND LABEL */}
              <div className="flex items-center justify-between mb-6">
                <img
                  src={feature.icon}
                  alt={feature.label}
                  className="w-7 h-7 object-contain"
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

                <span className="text-[#4d4644] text-sm">
                  <img src={arrow} alt="" srcset="" />
                </span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Neighborhood;
