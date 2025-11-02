const More = ({ char }) => {
  return (
    <div className="container  mx-auto  p-12 ">
      <div className="   flex flex-col justify-between items-center md:flex-row  gap-10  ">
        <div className=" md:text-start  flex flex-col gap-3 justify-center md:items-start items-center text-center font-bold lg:w-[60%]  md:w-[50%] my-5">
          <p className="text-[#FCD275] lg:text-[19px] text-[20px]">
            {" "}
            المزيد عن المسرد{" "}
          </p>
          <h1 className=" lg:text-[28px] md:text-[20px] text-[18px] text-[#0C5685] leading-10">
            {" "}
            {char.title_sec4}
          </h1>
          <p className="text-[#7B7B7B] text-[15px]  font-normal ">
            {char.des_sec4}
          </p>
        </div>
        <img src="/more.png" className="lg:w-[40%] md:w-[50%]    " />
      </div>
    </div>
  );
};

export default More;
