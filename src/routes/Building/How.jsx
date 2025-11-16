const How = ({ build }) => {
  const section2 = build.components_sec2;

  const icons = (slug) => {
 
      return "time.png";
    
    if (slug === "slug-5") {
      return "/time.png";
    } else if (slug === "slug-1") {
      return "/collect.png";
    } else if (slug === "slug-4") {
      return "/company.png";
    } else if (slug === "slug-2") {
      return "/content.png";
    } else if (slug === "slug-6") {
      return "/Frame (4).png";
    }
    // else if(slug === 'slug-11'){
    //     return '/result.png';
    // }
    // else if(slug === 'slug-10'){
    //     return '/element.png';
    // }
    else if (slug === "slug-3") {
      return "/team2.png";
    } else {
      return "";
    }
  };
  return (
    <div className="container p-10 mx-auto flex flex-col gap-6 justify-center items-center">
      <div className="text-center  lg:max-w-[70%] w-auto flex flex-col gap-2">
        <p className="text-[#D08A40] text-base lg:text-lg font-medium mb-2">
          {" "}
          {build.main_title_sec_2}
          {/* كيف يتم بناء مسرد لعائلتكم؟ */}
        </p>
        <h1 className="text-[#0C5685] text-xl mb-2 leading-normal font-bold">
          {build.title_sec2}
        </h1>
        <p className="text-[#7B7B7B]  text-sm md:text-base lg:text-lg leading-relaxed font-bold">
          {build.des_sec2}
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5 sm:text-start text-center ">
        {section2.map((el) => (
          <div
            key={el.id}
            className="p-5 flex flex-col gap-5 sm:items-start items-center rounded-2xl shadow-custom-lg "
          >
            <div className="bg-[rgba(250,229,212,0.2)] rounded-2xl  w-16 h-16 flex justify-center items-center">
              <img className="w-10 h-10" src={icons(el.slug)} />
            </div>
            <h3 className="text-[#0C5685] text-[19px]"> {el.title}</h3>
            <p className="text-[#7B7B7B] text-[15px]">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
