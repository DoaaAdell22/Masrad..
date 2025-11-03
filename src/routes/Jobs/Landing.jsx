const Landing = ({ jobs }) => {
  return (
    <div className="bg-[#0C5685] ">
      <div className=" relative container p-5 mx-auto flex md:flex-row flex-col-reverse justify-center md:justify-start items-center gap-10">
        <div className=" md:text-start md:max-w-[55%] flex flex-col gap-4  text-center font-bold mt-6 mb-10 ">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {jobs.main_title_sec_1}

            {/* وظائف مسرد العائلة */}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {jobs.title_sec1}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {jobs.des_sec1}
          </p>
        </div>
        <img
          src="/jobs.png"
          className="md:w-full  md:h-[260px]   md:absolute bottom-4  md:left-0 "
        />
      </div>
    </div>
  );
};

export default Landing;
