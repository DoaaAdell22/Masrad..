const Landing = ({ about }) => {
  return (
    <div className="bg-[#0C5685] ">
      <div className="container p-5 mx-auto flex md:flex-row flex-col-reverse justify-between items-center gap-10">
        <div className=" md:text-start md:w-[40%] flex flex-col gap-3  text-center font-bold mt-6 ">
          <p className="text-[#FCD275] lg:text-[19px] text-[20px]">
            {" "}
            اعرف اكثر عن مسرد
          </p>
          <h1 className="  lg:text-[28px] md:text-[20px] text-[18px]  text-[white]">
            {about.title_sec1}
          </h1>
          <p className="lg:text-[15px] md:text-[13px] text-[12px] font-bold text-[#FFFFFFCC] text-shadow-custom">
            {about.des_sec1}
          </p>
        </div>
        <img src="/more2.png" className="md:w-[50%] w-full" />
      </div>
    </div>
  );
};

export default Landing;
