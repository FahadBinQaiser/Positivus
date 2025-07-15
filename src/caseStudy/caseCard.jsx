const CaseCard = ({text, isMobile}) => {
    return (
        <div className={`flex flex-col ${isMobile ? "min-w-full max-w-xs bg-[#191A23] p-6 rounded-4xl border border-gray-700" : "px-10"}`}>
            <p className="text-pretty">{text}</p>
        <a href="#"
        className={`mt-4 font-medium ${ isMobile
            ? "text-lime-400 inline-flex items-center"
            : "flex flex-row items-center text-lime-300 text-sm"
        }`}
      >
        Learn more
          <img src="/Arrow-1.png" className="px-2" alt="Arrow" />
      </a>
    </div>
    )
}
export default CaseCard;