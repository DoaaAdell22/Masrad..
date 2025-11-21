import { Link } from "react-router-dom";  
const Know = ({ data }) => {
  return (
    <div className="container p-10 mx-auto flex flex-col justify-center items-center">
      <div className="text-center lg:max-w-[70%] w-auto">
        <p className="text-base lg:text-lg font-medium text-[#D08A40] mb-2">
          {/* اعرف اكثر عن مسرد */}
          {data.main_title_sec_4}
        </p>
        <h1 className="text-[#0C5685]  leading-normal text-xl mb-2 font-bold">
          {" "}
          {data.title_sec4}
        </h1>
        <p className="text-[#7B7B7B]  text-sm md:text-base lg:text-lg leading-relaxed font-bold">
          {" "}
          {data.des_sec4}
        </p>
   
   
             {/* <Link
                className="bg-[#D08A40] text-[white] sm:p-3 my-5 p-2  rounded-xl font-bold   md:text-[15px] text-[13px] inline-block"
                to="/description"
              >
               المزيد من صفة المسرد
              </Link> */}
      </div>
    </div>
  );
};

export default Know;
