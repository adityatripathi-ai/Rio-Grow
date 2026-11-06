
import goodMorning from "../assets/images/Good-morning.png";
import optimizedRoute from "../assets/images/Optimized-route-preview.png";
import earningPreview from "../assets/images/Earnings-preview.png";

import deliveryIcon from "../assets/icons/Vector-12.png";
import routeIcon from "../assets/icons/Vector-11.png";
import earningsIcon from "../assets/icons/Vector-10.png";

const features = [
  {
    icon: deliveryIcon,
    title: "Find your next order",
    description:
      "Go online, review available deliveries and see pickup and drop-off details.",
  },
  {
    icon: routeIcon,
    title: "Know where to go next",
    description:
      "Follow optimized routes, turn instructions and a clear list of delivery stops.",
  },
  {
    icon: earningsIcon,
    title: "Keep your earnings in sight",
    description:
      "Review daily and weekly earnings, tips, bonuses and recent payouts.",
  },
];

const DeliverySection = () => {
  return (
    <section
      id="drivers"
      className="w-full bg-[#FFFCF3] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 py-12 lg:py-16">

        {/* MAIN DARK CONTAINER */}
        <div className="bg-[#202B3C] rounded-[28px] px-6 md:px-10 lg:px-12 py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-10 lg:gap-12">

            {/* LEFT - THREE MOBILE IMAGES */}
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[470px]">

              {/* LEFT IMAGE - GOOD MORNING */}
              <img
                src={goodMorning}
                alt="Driver app home screen"
                className="
                  absolute
                  w-[42%] sm:w-[40%] lg:w-[38%]
                  left-[9%] sm:left-[11%] lg:left-[10%]
                  top-[18%]
                  rotate-[-8deg]
                  object-contain
                  z-10
                "
              />

              {/* CENTER IMAGE - OPTIMIZED ROUTE */}
              <img
                src={optimizedRoute}
                alt="Driver optimized route screen"
                className="
                  absolute
                  w-[44%] sm:w-[42%] lg:w-[40%]
                  left-[28%] sm:left-[30%] lg:left-[30%]
                  top-[7%]
                  object-contain
                  rotate-0
                  z-20
                "
              />

              {/* RIGHT IMAGE - EARNINGS */}
              <img
                src={earningPreview}
                alt="Driver earnings screen"
                className="
                  absolute
                  w-[42%] sm:w-[40%] lg:w-[38%]
                  right-[9%] sm:right-[11%] lg:right-[10%]
                  top-[18%]
                  rotate-[7deg]
                  object-contain
                  z-10
                "
              />

            </div>

            {/* RIGHT - CONTENT */}
            <div className="w-full">

              {/* SMALL LABEL */}
              <p className="text-[#FFCC00] text-[9px] font-semibold tracking-wide mb-4">
                ── KEEP YOUR NEIGHBORHOOD MOVING
              </p>

              {/* HEADING */}
              <h2 className="text-white text-3xl md:text-[36px] font-bold leading-[1.15]">
                Good deliveries.
                <br />
                A clearer day.
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-[11px] leading-relaxed mt-4 max-w-[400px]">
                From your next pickup to your earnings overview, bring the
                details of every delivery together.
              </p>

              {/* FEATURES */}
              <div className="mt-7 space-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    {/* ICON */}
                    <div className="w-8 h-8 bg-[#344052] rounded-lg flex items-center justify-center shrink-0">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-5 h-5 object-contain"
                      />
                    </div>

                    {/* FEATURE TEXT */}
                    <div>
                      <h3 className="text-white text-[12px] font-semibold">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 text-[10px] leading-relaxed mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;