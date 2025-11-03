const Landing = ({ about }) => {
  return (
    <div className="bg-[#0C5685] ">
      <div className="container p-5 mx-auto flex md:flex-row flex-col-reverse justify-between items-center gap-10">
        <div className=" md:text-start md:w-[40%] flex flex-col gap-3  text-center mt-6 ">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium  mt-2">
            {" "}
            {/* اعرف اكثر عن مسرد */}
            {about.main_title_sec_1}
          </p>
          <h1 className="text-white text-xl leading-normal font-bold">
            {about.title_sec1}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {about.des_sec1}
          </p>
        </div>
        <img src="/more2.png" className="md:w-[50%] w-full" />
      </div>
    </div>
  );
};

export default Landing;
