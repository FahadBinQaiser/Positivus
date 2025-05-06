import React from "react";
import CaseCard from "./caseCard.jsx";

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
      <div className="bg-white font-['Space_Grotesk'] px-0 sm:px-10 xl:px-0 mx-auto max-w-5xl py-20">
      <div className="row_line flex flex-col sm:flex-row justify-start items-center space-x-10">
        <h1 className="bg-lime-300 rounded-sm font-medium text-2xl p-1">
          Case Studies
        </h1>
        <p className="font-normal px-6 sm:px-0 text-center sm:text-left pt-4 sm:pt-0">
          Explore Real-Life Examples of Our Proven Digital Marketing{" "}
          <span className="md:block">Success through Our Case Studies</span>
        </p>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden flex-col items-center gap-6 text-white py-14 px-6">
        {data.map((item, index) => (
          <CaseCard key={index} text={item.case} isMobile={true} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex max-w-5xl m-auto bg-[#191A23] text-white w-full my-14 rounded-3xl px-8 py-14">
        {data.map((item, index) => (
            <React.Fragment key={index}>
              <CaseCard text={item.case} isMobile={false} />
              {index !== data.length - 1 && (
                <div className="line h-44 w-0.5 bg-gray-400 mx-auto"></div>
              )}
            </React.Fragment>
        ))}
      </div>
      </div>
  );
};


export default CaseStudy;
