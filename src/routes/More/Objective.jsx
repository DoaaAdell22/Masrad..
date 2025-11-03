import { Link } from "react-router-dom";

const Objective = ({ about }) => {
  return (
    <div className="bg-[#0C5685]">
      <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
        <div className=" md:text-start  flex flex-col gap-3 justify-center md:items-start items-center text-center lg:w-[60%] md:w-[50%] ">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {about.main_title_sec_5}

            {/* هدفنا */}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {about.title_sec5}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {about.des_sec5}
          </p>
          <Link
            className="bg-[#FCD275] text-[#0C5685] text-sm md:text-base font-semibold  sm:p-3 my-5 p-2  rounded-xl w-fit  "
            to="/contact"
          >
            {" "}
            ابدأ قصتك معنا الان{" "}
          </Link>
        </div>
        <img src="/Frameadq.png" className="md:w-[50%] lg:w-[40%]     " />
      </div>
    </div>
  );
};

export default Objective;
