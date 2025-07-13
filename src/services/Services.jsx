import React from "react";

const services = [
  {
    title: "Search engine optimization",
    img: "/services/tokyo.png",
    bg: "bg-[#F3F3F3]",
    textColor: "text-black",
  },
  {
    title: "Pay-per-click advertising",
    img: "/services/tokyo-selecting.png",
    bg: "bg-[#B9FF66]",
    textColor: "text-black",
  },
  {
    title: "Social Media Marketing",
    img: "/services/emoticon.png",
    bg: "bg-[#191A23]",
    textColor: "text-white",
  },
  {
    title: "Email Marketing",
    img: "/services/sending-messages.png",
    bg: "bg-[#F3F3F3]",
    textColor: "text-black",
  },
  {
    title: "Content Creation",
    img: "/services/windows.png",
    bg: "bg-[#B9FF66]",
    textColor: "text-black",
  },
  {
    title: "Analytics and Tracking",
    img: "/services/analytics.png",
    bg: "bg-[#191A23]",
    textColor: "text-white",
  },
];

const Services = () => {
  return (
    <section className="px-8 sm:px-0 py-16 max-w-5xl mx-auto space-grotesk">
      <div className="mb-10 flex gap-3 items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold inline-block bg-[#B9FF66] px-2 py-1 rounded">
          Services
        </h2>
        <p className="text-sm text-balance text-gray-700 mt-2 max-w-2xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} ${service.textColor} rounded-2xl p-6 shadow-md flex flex-col justify-between min-h-[230px]`}
          >
            <div>
              <h3 className="text-lg font-semibold inline-block bg-white/90 px-2 py-1 rounded leading-snug mb-4">
                {service.title}
              </h3>
              <img src={service.img} alt={service.title} className="w-24 sm:w-28 mt-2" />
            </div>

            <div className="flex items-center gap-2 mt-6">
              <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                <span className="text-lg">↗</span>
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
