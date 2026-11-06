import discoverIcon from "../assets/icons/vector.png";
import prepareIcon from "../assets/icons/vector-14.png";
import deliveryIcon from "../assets/icons/vector-13.png";

const steps = [
  {
    icon: discoverIcon,
    title: "Discover & choose",
    description:
      "Explore nearby sellers and add your everyday favorites to your basket.",
  },
  {
    icon: prepareIcon,
    title: "Prepare & connect",
    description:
      "Your local vendor manages the order and gets your items ready.",
  },
  {
    icon: deliveryIcon,
    title: "Deliver & enjoy",
    description:
      "A delivery partner brings it home. Follow the journey in the app.",
  },
];

const DailyLocal = () => {
  return (
    <section className="w-full bg-[#FFFCF3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 lg:py-14">

        {/* HEADING */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7">
          <h2 className="text-[#202B3C] text-2xl md:text-3xl font-bold">
            A little more local. Every day.
          </h2>

          <p className="text-gray-400 text-[10px]">
            Simple for you. Connected for everyone.
          </p>
        </div>

        {/* THREE STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">

              <div className="flex items-center gap-3 mb-3">
                {/* STEP ICON */}
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-6 h-6 object-contain"
                />

                <h3 className="text-[#202B3C] text-xs font-semibold">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-500 text-[10px] leading-relaxed max-w-[300px]">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DailyLocal;