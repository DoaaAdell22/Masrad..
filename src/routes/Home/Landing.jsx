import { Link } from "react-router-dom";

const Landing = ({ data }) => {
  return (
    <div className="container p-5 mx-auto ">
      <div className="bg-[#0C5685] flex flex-col lg:flex-row lg:items-center  gap-6 rounded-3xl p-6 relative">
        <div className=" md:text-start max-w-3xl 2xl:max-w-4xl text-center flex flex-col gap-4 justify-center items-center md:items-start ">
          <p className="text-[#FCD275] lg:text-[19px] text-[17px]">عن مسرد</p>
          <h1 className="lg:text-[30px] md:text-[28px] text-[24px] text-[white] text-shadow-custom">
            {data.title_sec1}
          </h1>
          <p className="lg:text-[18px] text-[16px] font-bold text-[#FFFFFFCC] text-shadow-custom">
            {data.des_sec1}
          </p>
          <Link
            className="bg-[#FCD275] md:text-[15px] text-[13px] font-bold text-[#0C5685] lg:py-4 lg:px-8 p-2 my-4  rounded-xl w-fit md:self-start "
            to="/more"
          >
            اعرف اكتر عن المسرد
          </Link>
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
