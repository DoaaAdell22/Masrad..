import { Link } from "react-router-dom";

const Innovation = ({ about }) => {
  return (
    <div className="container  mx-auto  p-12 ">
      <div className="   flex flex-col justify-between items-center md:flex-row  gap-10  ">
        <img src="/Framqwe.png" className="lg:w-[40%] md:w-[50%]     " />

        <div className=" md:text-start  flex flex-col  justify-center md:items-start items-center text-center lg:w-[60%]  md:w-[50%] ">
          <p className="text-[#D08A40] text-base lg:text-lg font-medium mb-2">
            {about.main_title_sec_4}
            {/* لماذا ابتكرنا مسرد */}
          </p>
          <h1 className="text-[#0C5685]  leading-normal text-xl mb-2 font-bold">
            {about.title_sec4}
          </h1>
          <p className="text-[#7B7B7B]  text-sm md:text-base lg:text-lg leading-relaxed font-bold">
            {about.des_sec4}
          </p>
          {/* <Link
            className="bg-[#D08A40] text-sm md:text-base font-semibold text-[white] sm:p-3 my-5 p-2  rounded-xl "
            to="/description"
          >
            المزيد عن صفة مسرد
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Innovation;
