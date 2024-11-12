import { Link } from "react-router-dom"

const Conta = ({data}) => {
  return (
    <div className="container p-5 mx-auto ">
        <div className="bg-[#0C5685] flex flex-col-reverse md:flex-row  justify-center items-center gap-4 rounded-3xl p-10">
            <img src="/Vector (3).png" className="md:w-[50%]  " />
            <div className=" md:text-end md:w-[50%] w-full  text-center font-bold my-6 flex flex-col gap-3 md:items-end items-center">
                <p className="text-[#88C278] md:text-[19px] text-[20px]"> تواصل معنا</p>
                <h1 className="  lg:text-[28px] md:text-[20px] text-[18px]  text-[white]">{data.title_sec5}      </h1>
                <p className="lg:text-[15px] md:text-[13px] text-[12px]  text-[#FFFFFFCC] text-shadow-custom">{data.des_sec5}</p>
                <Link className="bg-[#88C278] w-fit  text-[white] lg:py-4 lg:px-8 p-2 my-4  rounded-xl font-bold  md:text-[15px] text-[13px] " to="/more">اعرف اكتر عن المسرد</Link>
            </div>
        </div>
    </div>
  )
}

export default Conta
