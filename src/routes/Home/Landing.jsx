import { Link } from "react-router-dom";

const Landing = ({ data }) => {
  return (
    <div className="container px-5 py-10 mx-auto ">
      <div className="bg-[#0C5685] flex flex-col lg:flex-row lg:items-center  gap-6 rounded-3xl p-6 relative">
        <div className=" md:text-start max-w-3xl 2xl:max-w-4xl text-center flex flex-col gap-4 justify-center items-center md:items-start ">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {" "}
            {/* عن مسرد */}
            {data.main_title_sec_1}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {" "}
            {data.title_sec1}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {" "}
            {data.des_sec1}
          </p>
          {/* <Link
            className="bg-[#FCD275] text-[#0C5685] text-sm md:text-base font-semibold lg:py-3 lg:px-6 py-2 px-4 my-4 rounded-xl w-fit md:self-start"
            to="/more"
          >
            اعرف اكتر عن المسرد
          </Link> */}
        </div>
        <img
          src="/landing.png"
          className="w-full lg:w-[30rem]  lg:absolute lg:left-0 lg:bottom-2  p-2"
        />
      </div>
    </div>
  );
};

export default Landing;
