import React, { useState } from "react";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    step: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct in-depth research and develop a data-driven strategy tailored to your business objectives, competitors, and target audience to ensure measurable success.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Our team executes the planned strategy with precision, ensuring all marketing efforts are aligned across platforms to drive traffic and generate results.",
  },
  {
    step: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor campaign performance and optimize strategies in real-time to improve effectiveness and maximize ROI.",
  },
  {
    step: "05",
    title: "Reporting and Communication",
    description:
      "You receive clear, regular reports detailing performance metrics, insights, and outcomes, keeping you fully informed of progress and impact.",
  },
  {
    step: "06",
    title: "Continual Improvement",
    description:
      "We refine and enhance our strategies based on performance data and evolving market trends to ensure ongoing growth and success.",
  },
];

const WorkingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-0 pb-16 font-['Space_Grotesk']">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-3">
        <h2 className="text-2xl sm:text-3xl font-semibold bg-[#B9FF66] px-2 py-1 rounded w-fit">
          Our Working Process
        </h2>
        <p className="text-sm text-gray-700 sm:ml-4 max-w-md">
          Step-by-Step Guide to Achieving{" "}
          <span className="sm:block">Your Business Goals</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {processSteps.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`rounded-4xl border border-black border-b-[5px] overflow-hidden shadow-sm transition-colors duration-300 ease-out ${
                isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-between w-full px-6 py-6"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-xl sm:text-2xl font-semibold">
                    {item.step}
                  </span>
                  <span className="text-sm sm:text-base font-medium">
                    {item.title}
                  </span>
                </div>
                <span className="text-xl sm:text-2xl font-bold">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out px-6 ${
                  isOpen
                    ? "max-h-60 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <p className="pt-2 pb-6 text-sm text-black border-t border-black">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcess;
