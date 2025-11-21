import { Link } from "react-router-dom";

const Descrip = ({ data }) => {
  const section3 = data.components_sec2 || [];

  const icons = (slug) => {
    if (slug === "slug-1") {
      return "/spray.png";
    } else if (slug === "slug-2") {
      return "/hand.png";
    } else if (slug === "slug-3") {
      return "/time.png";
    } else {
      return "/time.png";
    }
  };
  return (
    <div className="container p-5 mx-auto flex flex-col gap-6 justify-center items-center">
      <div className="text-center lg:max-w-[70%] w-auto">
        <p className="text-[#D08A40] text-base lg:text-lg font-medium mb-2">
          {/* صفة المسرد */}
          {data.main_title_sec_2}
        </p>
        <h1 className="text-[#0C5685]  text-xl md:text-xl lg:text-xl mb-2 leading-normal md:leading-normal lg:leading-normal font-bold">
          {data.title_sec2}
        </h1>
        <p className="text-[#7B7B7B]  text-sm md:text-base lg:text-lg leading-relaxed font-bold">
          {data.des_sec2}
        </p>
      </div>
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center
        gap-5 sm:text-start text-center mb-8"
      >
        {section3.map((el) => (
          <div
            key={el.id}
            className="p-5 flex flex-col gap-5 sm:items-start items-center rounded-2xl shadow-custom-lg "
          >
            <div className="bg-[rgba(250,229,212,0.2)] w-16 h-16 rounded-xl flex justify-center items-center">
              <img className="w-10 h-10" src={icons(el.slug)} alt="" />
            </div>
            <h3 className="text-[#0C5685] text-[19px]">{el.title}</h3>
            <p className="text-[#7B7B7B] text-[15px]">{el.desc}</p>
          </div>
        ))}
      </div>
      {/* <Link
        className="bg-[#D08A40] text-[white] sm:p-3 my-5 p-2  rounded-xl font-bold   md:text-[15px] text-[13px]"
        to="/more"
      >
        اعرف اكثر عن المسرد
      </Link> */}
    </div>
  );
};

export default Descrip;
