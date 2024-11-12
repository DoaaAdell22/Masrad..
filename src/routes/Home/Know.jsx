
const Know = ({data}) => {
  return (
    
    <div className="container p-10 mx-auto flex flex-col justify-center items-center">
        <div className="text-center font-bold lg:max-w-[70%] w-auto">
            <p className="text-[20px] md:text-[19px] text-[#D08A40] ">اعرف اكثر عن مسرد</p>
            <h3 className="text-[#0C5685] md:text-[28px] text-[18px] my-5 ">{data.title_sec4}</h3>
            <p className="text-[#7B7B7B] md:text-[15px] text-[13px]">{data.des_sec4}</p>
            <button className="bg-[#D08A40] text-[white] sm:p-3 my-5 p-2  rounded-xl md:text-[15px] text-[13px]">المزيد من صفة المسرد</button>
        </div>
        
    </div>
  )
}

export default Know
