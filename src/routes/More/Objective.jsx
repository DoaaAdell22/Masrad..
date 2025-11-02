import { Link } from "react-router-dom";

const Objective = ({ about }) => {
  return (
    <div className="bg-[#0C5685]">
      <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
        <div className=" md:text-start  flex flex-col gap-3 justify-center md:items-start items-center text-center font-bold lg:w-[60%] md:w-[50%] ">
          <p className="text-[#FCD275] lg:text-[19px] text-[20px]"> هدفنا </p>
          <h1 className=" lg:text-[28px] md:text-[20px] text-[18px] text-[white] leading-10">
            {about.title_sec5}
          </h1>
          <p className="text-[white] md:text-[15px] text-[13px]">
            {about.des_sec5}
          </p>
          <Link
            className="bg-[#FCD275] text-[#0C5685]  md:text-[15px] text-[13px]  sm:p-3 my-5 p-2  rounded-xl font-bold w-fit  "
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
