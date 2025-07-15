import React from "react";
import './case_study.css';

const data = [
  {
    case: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    case: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    case: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const CaseStudy = () => {
  return (
    <div className="bg-white font-['Space_Grotesk'] px-4 xl:px-8 mx-auto max-w-5xl py-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-start items-center sm:space-x-10">
        <h1 className="bg-lime-300 rounded-sm font-medium text-2xl p-1">
          Case Studies
        </h1>
        <p className="font-normal px-0 text-center sm:text-left pt-4 sm:pt-0">
          Explore Real-Life Examples of Our Proven Digital Marketing{" "}
          <span className="md:block">Success through Our Case Studies</span>
        </p>
      </div>

      {/* Mobile - Horizontal Scrollable Row */}
      <div className="flex md:hidden overflow-x-auto no-scrollbar gap-4 py-14">
        <div className="flex flex-row gap-4 w-max">
          {data.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-xs bg-[#191A23] p-6 rounded-3xl flex flex-col border border-gray-700 text-white"
            >
              <p>{item.case}</p>
              <a
                href="#"
                className="text-lime-400 font-medium mt-4 inline-flex items-center"
              >
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:flex max-w-5xl m-auto bg-[#191A23] text-white w-full my-14 rounded-3xl px-8 py-14">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 flex flex-col px-8">
              <p>{item.case}</p>
              <a
                href="#"
                className="flex flex-row items-end h-full text-lime-300 font-medium text-sm mt-4"
              >
                Learn more
                <img src="/Arrow-1.png" className="px-2" alt="arrow" />
              </a>
            </div>
            {index !== data.length - 1 && (
              <div className="line h-44 w-0.5 bg-gray-400 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
