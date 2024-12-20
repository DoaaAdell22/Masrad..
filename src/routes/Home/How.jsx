
const How = ({data}) => {
  return (
    <div className="bg-[#0C5685]">
        <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
            <img src="/1724712836941.png" className="md:w-[50%] lg:w-[40%]  lg:h-[400px]  w-full   " />
            <div className=" md:text-end  flex flex-col gap-3 justify-center md:items-end items-center text-center font-bold lg:w-[60%] md:w-[50%] w-full">
                <p className="text-[#FCD275] lg:text-[19px] text-[20px]">كيف يتم بناء مسرد لعائلتكم؟</p>
                <h1 className=" lg:text-[28px] md:text-[20px] text-[18px] text-[white] leading-10"> {data.title_sec3}</h1>
                <p className="lg:text-[15px] md:text-[13px] text-[12px] font-bold text-[#FFFFFFCC] text-shadow-custom">{data.des_sec3}</p>
                <button className="bg-[#FCD275] text-[#0C5685]  md:text-[15px] text-[13px] lg:py-4 lg:px-8 p-2 my-4  rounded-xl font-bold w-fit ">المزيد من المعلومات</button>
            </div>
        </div>
    </div>
  )
}

export default How
