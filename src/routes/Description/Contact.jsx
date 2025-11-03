import { Link } from "react-router-dom";

const Contact = ({ char }) => {
  return (
    <div className="container p-5 mx-auto ">
      <div className="bg-[#0C5685] flex flex-col-reverse md:flex-row  justify-center items-center gap-4 rounded-3xl p-10">
        <div className=" md:text-start md:w-[50%] w-full  text-center my-6 flex flex-col gap-3 md:items-start items-center">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {" "}
            {/* عن مسرد */}
            {char.main_title_sec_5}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {" "}
            {char.title_sec5}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {" "}
            {char.des_sec5}
          </p>
          <Link
            className="bg-[#FCD275] text-[#0C5685] text-sm md:text-base font-semibold lg:py-3 lg:px-6 py-2 px-4 my-4 rounded-xl w-fit md:self-start"
            to="/more"
          >
            اعرف اكتر عن المسرد
          </Link>
        </div>
        <img src="/Vector (3).png" className="md:w-[50%]  " />
      </div>
    </div>
  );
};

export default Contact;
