const LangArep = ({ about }) => {
  const section3 = about.about_desc3;

  const icons = (slug) => {
    if (slug === "slug-1") {
      return "/voice.png";
    } else if (slug === "slug-2") {
      return "/echo.png";
    } else {
      return "";
    }
  };

  return (
    <div className="bg-[#0C5685]">
      <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
        <div className=" md:text-start  flex flex-col gap-4 justify-center md:items-start items-center text-center lg:w-[60%] md:w-[50%] ">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {/* مسرد اللغة والمكان */}
            {about.main_title_sec_3}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {about.title_sec3}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom  mb-8">
            {about.des_sec3}
          </p>
          <div className="flex flex-col gap-4 w-full justify-center">
            {section3.map((el) => (
              <div
                key={el.id}
                className=" flex flex-col md:flex-row gap-2 font-bold text-[19px] items-center"
              >
                <div className="bg-[rgba(252,210,117,0.2)] md:w-16 md:min-w-16 md:h-16 w-14 min-w-14 h-14 rounded-xl flex justify-center items-center">
                  <img
                    src={icons(el.slug)}
                    className="md:w-10 md:min-w-10 md:h-10 w-8 min-w-8 h-8 "
                  />
                </div>
                <div>
                  <h3 className="text-[#FCD275] mb-2">{el.title}</h3>
                  <p className="text-[#FFFFFFCC] text-[15px] font-normal">
                    {el.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="/Vector (8).png" className="md:w-[50%]   " />
      </div>
    </div>
  );
};

export default LangArep;
