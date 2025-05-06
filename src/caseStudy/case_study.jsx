const CaseStudy = () => {
  return (
    <>
      <div className="bg-white font-['Space_Grotesk'] px-0 sm:px-10 xl:px-0 mx-auto max-w-5xl py-20">
        <div className="row_line flex flex-col sm:flex-row justify-start items-center space-x-10">
          <h1 className="bg-lime-300 rounded-sm font-medium text-2xl p-1">
            Case Studies
          </h1>
          <p className="font-normal px-6 sm:px-0 text-center sm:text-left pt-4 sm:pt-0">
            Explore Real-Life Examples of Our Proven Digital Marketing{' '}
            <span className="md:block">Success through Our Case Studies</span>
          </p>
        </div>
        {/* Mobile code for case studies */}
        <div className="mobileCodeForCaseStudies flex md:hidden rounded-3xl text-white max-w-6xl mx-auto py-14 px-6 sm:px-0 overflow-x-auto overflow-hidden no-scrollbar">
          <div className="flex flex-row gap-6 w-max">
            <div className="min-w-[300px] max-w-xs bg-[#191A23] p-6 rounded-4xl flex flex-col border border-gray-700">
              <p>
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <a
                href="#"
                className="text-lime-400 font-medium mt-4 inline-flex items-center"
              >
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
            <div className="min-w-[300px] max-w-xs bg-[#191A23] p-6 rounded-4xl flex flex-col border border-gray-700">
              <p>
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>
              <a
                href="#"
                className="text-lime-400 font-medium mt-4 inline-flex items-center"
              >
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
            <div className="min-w-[300px] max-w-xs bg-[#191A23] p-6 rounded-4xl flex flex-col border border-gray-700">
              <p>
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>
              <a
                href="#"
                className="text-lime-400 font-medium mt-4 inline-flex items-center"
              >
                Learn more <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Desktop code for case studies */}
        <div className="container_box hidden text-white w-full my-14 rounded-3xl bg-[#191A23] mx-auto max-w-5xl md:flex flex-row items-start px-8 py-14">
          <div className="contentPrimary flex flex-col px-10">
            <p className="text-pretty">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a
              href="#"
              className="flex flex-row items-center text-lime-300 font-medium text-sm mt-4"
            >
              Learn more
              <img src="src/assets/Arrow-1.png" className="px-2" alt="" />
            </a>
          </div>

          <div className="line h-44 w-0.5 bg-gray-400 mx-auto"></div>

          <div className="contentSecondary flex flex-col px-10">
            <p className="text-pretty">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <a
              href="#"
              className="flex flex-row items-center text-lime-300 font-medium text-sm mt-4"
            >
              Learn more
              <img src="src/assets/Arrow-1.png" className="px-2" alt="" />
            </a>
          </div>
          <div className="line h-44 w-0.5 bg-gray-400 mx-auto"></div>
          <div className="contentTernary flex flex-col px-10">
            <p className="text-pretty">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <a
              href="#"
              className="flex flex-row items-center text-lime-300 font-medium text-sm mt-4"
            >
              Learn more
              <img src="src/assets/Arrow-1.png" className="px-2" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudy;
