import { Link } from "react-router-dom";

const Contact = ({ build }) => {
  return (
    <div className="container p-5 mx-auto ">
      <div className="bg-[#0C5685] flex flex-col-reverse md:flex-row  justify-center items-center gap-4 rounded-3xl p-10">
        <div className=" md:text-start md:w-[50%] w-full  text-center my-6 flex flex-col gap-3 md:items-start items-center">
          <p className="text-[#88C278] text-base lg:text-lg font-medium mb-2 mt-2">
            {" "}
            {/* تواصل معنا */}
            {build.main_title_sec_3}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {build.title_sec3}{" "}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom">
            {build.des_sec3}
          </p>
          {/* <Link
            className="bg-[#88C278] w-fit  text-[white] lg:py-4 lg:px-8 p-2 my-4  rounded-xl text-sm md:text-base font-semibold "
            to="/more"
          >
            اعرف اكتر عن المسرد
          </Link> */}
        </div>
        <img src="/Vector (3).png" className="md:w-[50%]  " />
      </div>
    </div>
  );
};

export default Contact;
