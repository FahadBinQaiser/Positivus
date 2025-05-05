const CaseStudy = () => {
    return(
        <>
                <div className="bg-white mx-auto max-w-5xl py-20">
        <div className="row_line flex flex-row justify-start items-center space-x-10">
            <h1 className="bg-lime-300 rounded-sm font-medium text-2xl p-1">Case Studies</h1>
            <p className="font-normal">
            Explore Real-Life Examples of Our Proven Digital Marketing <br />
            Success through Our Case Studies
            </p>
        </div>

        <div className="container_box text-white w-full my-14 rounded-3xl bg-[#191A23] mx-auto max-w-5xl flex flex-row items-start px-8 py-14">

            <div className="contentPrimary flex flex-col px-10">
            <p className="text-pretty">
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a href="#" className="flex flex-row items-center text-lime-300 font-medium text-sm mt-4">
                Learn more
                <img src="src/assets/Arrow-1.png" className="px-2" alt="" />
            </a>
            </div>

            <div className="line h-44 w-0.5 bg-gray-400 mx-auto"></div>
            
            <div className="contentSecondary flex flex-col px-10">
            <p className="text-pretty">
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>
            <a href="#" className="flex flex-row items-center text-lime-300 font-medium text-sm mt-4">
                Learn more
                <img src="src/assets/Arrow-1.png" className="px-2" alt="" />
            </a>
            </div>
            <div className="line h-44 w-0.5 bg-gray-400 mx-auto"></div>
            <div className="contentTernary flex flex-col px-10">
            <p className="text-pretty">
                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>
            <a href="#" className="flex flex-row items-center text-lime-300 font-medium text-sm mt-4">
                Learn more
                <img src="src/assets/Arrow-1.png" className="px-2" alt="" />
            </a>
            </div>
        </div>
        </div>
        </>
    )
}
export default CaseStudy;