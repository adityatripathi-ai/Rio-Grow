
import storeStats from "../assets/images/store-status.png";
import inventory from "../assets/images/inventory-preview.png";
import orderManagement from "../assets/images/Order-management-preview.png";

import catalogIcon from "../assets/icons/vector-9.png";
import orderIcon from "../assets/icons/vector-8.png";
import statsIcon from "../assets/icons/vector-7.png";

const features = [
  {
    icon: catalogIcon,
    title: "A catalog you can keep on top of",
    description:
      "Manage products, adjust quantities and spot low-stock items before anyone asks.",
  },
  {
    icon: orderIcon,
    title: "Every order has a next step",
    description:
      "Accept incoming orders, start preparing and mark them ready for collection.",
  },
  {
    icon: statsIcon,
    title: "See how your shop is doing",
    description:
      "Keep revenue, active orders and performance insights close at hand.",
  },
];

const ShopManagement = () => {
  return (
    <section
      id="vendors"
      className="w-full bg-[#FFFCF3] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14 lg:py-20">

        {/* SECTION HEADING */}
        <div className="mb-8">
          <p className="text-[#F15A24] text-[10px] font-semibold tracking-wide mb-3">
            GROW WITH YOUR NEIGHBORHOOD
          </p>

          <h2 className="text-[#202B3C] text-3xl md:text-[42px] font-bold leading-tight">
            Local shop. Bigger possibilities.
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="bg-gray-100 px-6 py-6 rounded-2xl grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] items-center gap-8 lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full">

            <p className="text-gray-500 text-xs leading-relaxed max-w-[300px] mb-7">
              More time for your business. Less time juggling the details.
            </p>

            {/* FEATURES */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  {/* FEATURE ICON */}
                  <div className="w-8 h-8 bg-[#FFF0B3] rounded-lg flex items-center justify-center shrink-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  {/* FEATURE TEXT */}
                  <div>
                    <h3 className="text-[#202B3C] text-[12px] font-semibold">
                      {feature.title}
                    </h3>

                    <p className="text-gray-500 text-[10px] leading-relaxed mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM LINK */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-7 text-[#202B3C] text-[11px] font-semibold hover:text-[#F15A24] transition-colors"
            >
              Made for your day-to-day
              <span className="text-[#F15A24]">→</span>
            </a>
          </div>

          {/* RIGHT DASHBOARD IMAGES */}
          <div className="w-full">
            <div className="relative bg-[#FFF2BF] rounded-[28px] w-full h-[480px] md:h-[500px] overflow-hidden">

              {/* LEFT IMAGE - STORE STATUS */}
              <img
                src={storeStats}
                alt="Store statistics dashboard"
                className="
                  absolute
                  w-[40%] md:w-[32%]
                  h-[97%]
                  left-[9%] md:left-[11%]
                  top-[5%]
                  object-contain
                  rotate-[-2deg]
                  z-10
                "
              />

              {/* CENTER IMAGE - INVENTORY */}
              <img
                src={inventory}
                alt="Stocks and inventory dashboard"
                className="
                  absolute
                  w-[46%] md:w-[37%]
                  h-[105%]
                  left-[27%] md:left-[31%]
                  top-[0%]
                  object-contain
                  rotate-0
                  z-5
                "
              />

              {/* RIGHT IMAGE - ORDER MANAGEMENT */}
              <img
                src={orderManagement}
                alt="Order management dashboard"
                className="
                  absolute
                  w-[40%] md:w-[32%]
                  h-[82%]
                  right-[8%] md:right-[11%]
                  top-[15%]
                  object-contain
                  rotate-[2deg]
                  z-10
                "
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShopManagement;
