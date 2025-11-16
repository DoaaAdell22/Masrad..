import { Link } from "react-router-dom";

const How = ({ data }) => {
  return (
    <div className="bg-[#0C5685]">
      <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
        <div className=" md:text-start  flex flex-col gap-3 justify-center md:items-start items-center text-center lg:w-[60%] md:w-[50%] w-full">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2">
            {/* كيف يتم بناء مسرد لعائلتكم؟ */}
            {data.main_title_sec_3}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {" "}
            {data.title_sec3}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom">
            {data.des_sec3}
          </p>
     
                    <Link
                      className="bg-[#FCD275] text-[#0C5685]  w-fit  lg:py-4 lg:px-8 p-2 my-4  rounded-xl text-sm md:text-base font-semibold "
                      to="/building"
                    >
                      المزيد من المعلومات
                    </Link>
        </div>
        <img
          src="/1724712836941.png"
          className="md:w-[50%] lg:w-[40%]  lg:h-[400px]  w-full   "
        />
      </div>
    </div>
  );
};

export default How;
