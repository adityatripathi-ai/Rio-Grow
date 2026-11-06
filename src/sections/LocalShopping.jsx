import shoppingApp from "../assets/images/shopping.png";

import discoverIcon from "../assets/icons/Vector-6.png";
import routineIcon from "../assets/icons/Vector-5.png";
import orderIcon from "../assets/icons/Vector-4.png";

const features = [
  {
    icon: discoverIcon,
    title: "Discover the good stuff nearby",
    description:
      "Browse local sellers, compare ratings and explore groceries and everyday essentials.",
  },
  {
    icon: routineIcon,
    title: "Make room for your routine",
    description:
      "Choose delivery slots and set recurring orders for the things you buy regularly.",
  },
  {
    icon: orderIcon,
    title: "Follow your order. Find your rewards.",
    description:
      "See live delivery progress and keep your wallet, cashback and rewards together.",
  },
];

const LocalShopping = () => {
  return (
    <section
      id="shoppers"
      className="w-full bg-[#FFFCF3] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* LEFT IMAGE SECTION */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[420px] h-[350px] md:h-[400px] bg-[#FFF2BF] rounded-[28px] flex items-center justify-center overflow-hidden">
              <img
                src={shoppingApp}
                alt="RioGrow shopping app"
                className="h-[90%] w-auto max-w-[90%] object-contain transform-none rotate-0"
              />
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="w-full">
            <p className="text-[#F15A24] text-[10px] font-semibold tracking-wide mb-4">
              ── FOR YOUR EVERYDAY
            </p>

            <h2 className="text-[#202B3C] text-3xl md:text-[36px] font-bold leading-[1.15]">
              Less running around.
              <br />
              More living local.
            </h2>

            <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed mt-4 max-w-[470px]">
              The shops you love. The little things you need. A simpler way
              to bring it all home.
            </p>

            {/* FEATURES */}
            <div className="mt-7 space-y-5">
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

                  <div>
                    <h3 className="text-[#202B3C] text-[12px] font-semibold">
                      {feature.title}
                    </h3>

                    <p className="text-gray-500 text-[10px] md:text-[11px] leading-relaxed mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocalShopping;