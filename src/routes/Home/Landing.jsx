
import { Link } from "react-router-dom";

const Landing = ({data}) => {
 
  return (
    <div className="container p-5 mx-auto ">
        <div className="bg-[#0C5685] flex flex-col-reverse md:flex-row md:items-center  gap-4 rounded-3xl p-6">
            <img src="/landing.png" className="lg:w-[60%] md:w-[70%] w-full  lg:h-[450px] md:h-[400px]  m-[-24px] " />
            <div className=" md:text-end md:w-[40%]  text-center flex flex-col gap-4 justify-center items-center md:items-end ">
                <p className="text-[#FCD275] lg:text-[19px] text-[17px]">عن مسرد</p>
                <h1 className="lg:text-[40px] md:text-[28px] text-[25px] text-[white] text-shadow-custom">{data.title_sec1}</h1>
                <p className="lg:text-[15px] md:text-[13px] text-[12px] font-bold text-[#FFFFFFCC] text-shadow-custom">{data.des_sec1}</p>
                <Link className="bg-[#FCD275] md:text-[15px] text-[13px] font-bold text-[#0C5685] lg:py-4 lg:px-8 p-2 my-4  rounded-xl w-fit md:self-end " to="/more" >اعرف اكتر عن المسرد</Link>
            </div>
        </div>
    </div>
  )
}

export default Landing
