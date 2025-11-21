const Landing = ({ build }) => {
  return (
    <div className="bg-[#0C5685] ">
      <div className="container px-5 py-10 mx-auto flex md:flex-row flex-col-reverse justify-between items-center gap-10">
        <div className=" md:text-start md:w-[50%]  w-full flex flex-col gap-3 text-center mt-6 ">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {/* كيف يتم بناء مسرد لعائلتكم؟ */}
            {build.main_title_sec_1}
          </p>
          <h1 className="text-white text-xl leading-normal font-bold">
            {build.title_sec1}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {build.des_sec1}
          </p>
        </div>
        <img src="/build.png" className="md:w-[50%] w-full" />
      </div>
    </div>
  );
};

export default Landing;
