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
  },
  {
    step: "03",
    title: "Implementation",
  },
  {
    step: "04",
    title: "Monitoring and Optimization",
  },
  {
    step: "05",
    title: "Reporting and Communication",
  },
  {
    step: "06",
    title: "Continual Improvement",
  },
];

const WorkingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-0 py-20 font-['Space_Grotesk']">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-3">
        <h2 className="text-2xl sm:text-3xl font-semibold bg-[#B9FF66] px-2 py-1 rounded w-fit">
          Our Working Process
        </h2>
        <p className="text-sm text-gray-700 sm:ml-4 max-w-md">
          Step-by-Step Guide to Achieving 
          <span className="sm:block">
            Your Business Goals
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {processSteps.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl border border-black border-b-[5px] overflow-hidden shadow-sm ${
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

              {isOpen && item.description && (
                <div className="px-6 pt-2 pb-6 text-sm text-black border-t border-black">
                  {item.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcess;
