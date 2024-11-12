import { Link } from "react-router-dom"

const Innovation = ({about}) => {
  return (
    <div className="container  mx-auto  p-12 ">
    <div className="   flex flex-col justify-between items-center md:flex-row  gap-10  ">
        <div className=" md:text-end  flex flex-col  justify-center md:items-end items-center text-center font-bold lg:w-[60%]  md:w-[50%] ">
            <p className="text-[#D08A40] lg:text-[19px] text-[20px]">      لماذا ابتكرنا مسرد  </p>
            <h1 className=" lg:text-[28px] md:text-[20px] text-[18px] text-[#0C5685] leading-10"> {about.title_sec4} </h1>
            <p className="text-[#7B7B7B] text-[15px]  font-normal ">{about.des_sec4} </p>
            <Link className="bg-[#D08A40]  md:text-[15px] text-[13px]  text-[white] sm:p-3 my-5 p-2  rounded-xl font-bold " to='/Description' >  المزيد عن صفة مسرد </Link>
        </div>
        <img src="/Framqwe.png" className="lg:w-[40%] md:w-[50%]     " />
    </div>
</div>
  )
}

export default Innovation
