const More = ({ char }) => {
  return (
    <div className="container  mx-auto  p-12 ">
      <div className="   flex flex-col justify-between items-center md:flex-row  gap-10  ">
        <div className=" md:text-start  flex flex-col gap-3 justify-center md:items-start items-center text-center lg:w-[60%]  md:w-[50%] my-5">
          <p className="text-[#D08A40] text-base lg:text-lg font-medium mb-2">
            {char.main_title_sec_4}

            {/* المزيد عن المسرد */}
          </p>
          <h1 className="text-[#0C5685]  leading-normal text-xl mb-2 font-bold">
            {" "}
            {char.title_sec4}
          </h1>
          <p className="text-[#7B7B7B]  text-sm md:text-base lg:text-lg leading-relaxed font-bold ">
            {" "}
            {char.des_sec4}
          </p>
        </div>
        <img src="/more.png" className="lg:w-[40%] md:w-[50%]    " />
      </div>
    </div>
  );
};

export default More;
