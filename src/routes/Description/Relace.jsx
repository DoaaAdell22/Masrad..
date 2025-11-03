const Relace = ({ char }) => {
  return (
    <div className="bg-[#0C5685]">
      <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
        <div className=" md:text-start  flex flex-col gap-5 justify-center md:items-start items-center text-center lg:w-[60%] md:w-[50%] w-full ">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {/* أين يقع المسرد؟ */}
            {char.main_title_sec_3}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {char.title_sec3}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {char.des_sec3}
          </p>
          <div className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[16px] md:text-[18px] lg:text-[19px]  text-[white] justify-center items-center">
            <div className="bg-[#fcd27533] sm:w-16 sm:h-16 w-14 h-14 rounded-xl  flex justify-center items-center ">
              <img className="w-8 h-8 sm:w-10 sm:h-10 " src="/book2.png" />
            </div>
            <p>في دار ضيافة العائلة</p>
          </div>
          <div className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[16px] md:text-[18px] lg:text-[19px]  text-[white]  justify-center items-center">
            <div className="bg-[rgba(252,210,117,0.2)] sm:w-16 sm:h-16 w-14 h-14 rounded-xl  flex justify-center items-center">
              <img className="w-8 h-8 sm:w-10 sm:h-10 " src="/book2.png" />
            </div>
            <p> أو مقر الشركة القابضة</p>
          </div>
          <div className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[16px] md:text-[18px] lg:text-[19px]  text-[white] justify-center items-center ">
            <div className="bg-[rgba(252,210,117,0.2)] sm:w-16 sm:h-16 w-14 h-14 rounded-xl  flex justify-center items-center">
              <img className="w-8 h-8 sm:w-10 sm:h-10 " src="/book2.png" />
            </div>
            <p>
              أو يتم بناء مسرد على أرض جديدة تصبح ايقونة التواصل بين العائلة
              والمجتمع
            </p>
          </div>
        </div>
        <img src="/Vector (8).png" className="lg:w-[40%] md:w-[50%] w-full  " />
      </div>
    </div>
  );
};

export default Relace;
