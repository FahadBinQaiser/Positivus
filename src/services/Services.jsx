import React from "react";

const services = [
  {
    title: "Search engine optimization",
    img: "/services/tokyo.png",
    bg: "bg-[#F3F3F3]",
    textColor: "text-black",
    tagBg: "bg-[#B9FF66]",
  },
  {
    title: "Pay-per-click advertising",
    img: "/services/tokyo-selecting.png",
    bg: "bg-[#B9FF66]",
    textColor: "text-black",
    tagBg: "bg-white",
  },
  {
    title: "Social Media Marketing",
    img: "/services/emoticon.png",
    bg: "bg-[#191A23]",
    textColor: "text-white",
    tagBg: "bg-white",
  },
  {
    title: "Email Marketing",
    img: "/services/sending-messages.png",
    bg: "bg-[#F3F3F3]",
    textColor: "text-black",
    tagBg: "bg-[#B9FF66]",
  },
  {
    title: "Content Creation",
    img: "/services/windows.png",
    bg: "bg-[#B9FF66]",
    textColor: "text-black",
    tagBg: "bg-white",
  },
  {
    title: "Analytics and Tracking",
    img: "/services/analytics.png",
    bg: "bg-[#191A23]",
    textColor: "text-white",
    tagBg: "bg-[#B9FF66]",
  },
];

const Services = () => {
  return (
    <section className="px-6 sm:px-0 pt-28 max-w-5xl mx-auto space-grotesk">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-3">
       <div className="sm:shrink-0">
        <h2 className="text-2xl sm:text-3xl font-semibold bg-[#B9FF66] px-2 py-1 rounded w-fit mx-auto sm:mx-0">
          Services
        </h2>

        </div>
        <p className="text-sm text-center sm:text-left text-gray-700 text-balance max-w-2xl leading-relaxed">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} ${service.textColor} rounded-4xl border border-black border-b-[6px] flex flex-col justify-between max-w-[600px] p-8 min-h-[310px] shadow-sm`}
          >
            <div className="flex items-start pb-4 justify-between">
              <h3
                className={`text-2xl font-semibold leading-tight ${service.tagBg} text-black px-2 py-[2px] rounded max-w-fit`}
              >
                {service.title}
              </h3>
            </div>
             <div className="flex justify-end items-end h-full">
                 <img
                src={service.img}
                alt={service.title}
                className="w-46 object-cover ml-2"
              />
               </div>

            <div className="flex cursor-pointer items-center gap-2 mt-8">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center">
                <img
                  src="/Arrow-1.png"
                  className="w-3.5 h-3.5"
                  alt="Arrow Right"
                />
              </div>
              <p className="text-sm font-medium">Learn more</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
