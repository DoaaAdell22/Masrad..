
const Who = ({about}) => {
  const statis = about.nums_sec2 || []; 

  return (
    <div className="container p-10 mx-auto flex flex-col justify-center items-center">
        <div className="text-center font-bold lg:max-w-[70%] w-auto flex flex-col gap-2">
            <p className="md:text-[19px] text-[20px]  text-[#D08A40] ">  من نحن ؟</p>
            <h3 className="text-[#0C5685] md:text-[28px] text-[18px] ">{about.title_sec2}</h3>
            <p className="text-[#7B7B7B] md:text-[15px] text-[13px]">{about.des_sec2}</p>
            <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative cursor-pointer">
                <video src={about.video_sec2} />
            </div>
            <div className="grid xl:grid-cols-4   md:grid-cols-2 grid-cols-1 gap-6 justify-center sm:text-end 
        items-center my-5 ">
        {statis.map((el, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 justify-center md:items-end items-center">
                <span className="text-[#D08A40] lg:text-[48px] text-[28px] font-medium">{el.nums}</span>
                <p className="text-[#0C5685] text-[19px] font-bold">{el.text}</p>
                <div className="w-[260px] h-[1px] bg-[#FCD275]"></div>
              </div>
            );
          })}
          
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Who
