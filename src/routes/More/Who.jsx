
const Who = ({about}) => {
  return (
    <div className="container p-10 mx-auto flex flex-col justify-center items-center">
        <div className="text-center font-bold lg:max-w-[70%] w-auto flex flex-col gap-2">
            <p className="md:text-[19px] text-[20px]  text-[#D08A40] ">  من نحن ؟</p>
            <h3 className="text-[#0C5685] md:text-[28px] text-[18px] ">{about.title_sec2}</h3>
            <p className="text-[#7B7B7B] md:text-[15px] text-[13px]">{about.des_sec2}</p>
        </div>
        
    </div>
  )
}

export default Who
