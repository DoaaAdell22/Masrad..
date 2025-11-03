const Landing = ({ char }) => {
  return (
    <div className="bg-[#0C5685] ">
      <div className="container p-5  mx-auto flex md:flex-row flex-col-reverse justify-between items-center gap-10 ">
        <div className=" md:text-start md:w-[40%] w-full   text-center my-6 flex flex-col gap-4">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {/* صفة المسرد */}
            {char.main_title_sec_1}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {char.title_sec1}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {char.des_sec1}
          </p>
        </div>
        <img src="/Frame454.png" className="md:w-[60%]  w-full  " />
      </div>
    </div>
  );
};

export default Landing;
