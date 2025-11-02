const Landing = () => {
  return (
    <div className="bg-[#0C5685] ">
      <div className=" relative container p-5 mx-auto flex md:flex-row flex-col-reverse justify-center items-center gap-10">
        <img src="/jobs.png" className="md:w-full  md:h-[230px]   " />
        <div className=" md:text-start md:w-[40%] flex flex-col gap-4  text-center font-bold mt-6 md:absolute  md:right-0 ">
          <p className="text-[#FCD275] lg:text-[19px] text-[20px]">
            {" "}
            تواصل معنا الان
          </p>
          <h1 className="  lg:text-[28px] md:text-[20px] text-[18px]  text-[white]">
            ارسل استفسارك، وسنقوم بالرد عليك في أقرب{" "}
            <span className="text-[#FCD275]"> وقت ممكن</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
