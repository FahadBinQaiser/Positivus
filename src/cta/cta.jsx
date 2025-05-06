const Cta = () => {
  return (
    <>
      <div className="max-w-5xl font-['Space_Grotesk'] mt-20 h-fit bg-gray-100 rounded-xl flex justify-between flex-col mx-6 xl:mx-auto sm:flex-row ">
        <div className="leftSide space-y-2 h-fit flex flex-col justify-center items-start p-10">
          <h1 className="font-semibold text-2xl">Let's make things happen</h1>
          <p className="text-balance">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and <br /> succeed online.
          </p>

          <button className="bg-black w-full sm:w-54 rounded-xl text-white px-4 py-2 mt-4 hover:bg-gray-800 cursor-pointer transition duration-300 ease-in-out">
            Get your free proposal
          </button>
        </div>
        <div className="rightSide hidden sm:flex justify-center items-center ">
          <img
            src="/Illustration.png"
            alt="illustration"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default Cta;
