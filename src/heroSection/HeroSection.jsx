import React from "react";

const HeroSection = () => {
  return (
    <section className="px-8 sm:px-0 max-w-5xl py-16 mx-auto space-grotesk">
      {/* Top Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>
          <p className="text-gray-700 text-base sm:text-md mb-6">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            Book a consultation
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/speaker.png" // Replace with your actual path
            alt="Digital Marketing Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
