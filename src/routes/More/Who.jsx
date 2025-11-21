const Who = ({ about }) => {
  const statis = about.nums_sec2 || [];

  return (
    <div className="container p-10 mx-auto flex flex-col justify-center items-center">
      <div className="text-center  lg:max-w-[70%] w-auto h-auto flex flex-col gap-2">
        <p className="text-[#D08A40] text-base lg:text-lg font-medium mb-2">
          {about.main_title_sec_2}

          {/* من نحن ؟ */}
        </p>
        <h1 className="text-[#0C5685]  leading-normal text-xl mb-2 font-bold">
          {about.title_sec2}
        </h1>
        <p className="text-[#7B7B7B]  text-sm md:text-base lg:text-lg leading-relaxed font-bold">
          {" "}
          {about.des_sec2}
        </p>
        {/* <div className="flex flex-col justify-center items-center gap-5 -mb-16"></div> */}
      </div>
    </div>
  );
};

export default Who;
