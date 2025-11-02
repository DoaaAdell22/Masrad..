const Landing = ({ char }) => {
  return (
    <div className="bg-[#0C5685] ">
      <div className="container p-5  mx-auto flex md:flex-row flex-col-reverse justify-between items-center gap-10 ">
        <div className=" md:text-start md:w-[40%] w-full   text-center font-bold my-6 flex flex-col gap-4">
          <p className="text-[#FCD275] lg:text-[19px] text-[20px]">
            {" "}
            صفة المسرد
          </p>
          <h1 className="  lg:text-[28px] md:text-[20px] text-[18px]  text-[white]">
            {" "}
            {char.title_sec1}
          </h1>
          <p className="lg:text-[15px] md:text-[13px] text-[12px] font-bold text-[#FFFFFFCC] text-shadow-custom">
            {char.des_sec1}
          </p>
        </div>
        <img src="/Frame454.png" className="md:w-[60%]  w-full  " />
      </div>
    </div>
  );
};

export default Landing;
