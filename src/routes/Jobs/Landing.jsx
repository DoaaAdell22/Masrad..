
const Landing = ({jobs}) => {
  return (
    <div className="bg-[#0C5685] ">
    <div className=" relative container p-5 mx-auto flex md:flex-row flex-col-reverse justify-center items-center gap-10">
        <img src="/jobs.png" className="md:w-full  md:h-[230px]   " />
            <div className=" md:text-end md:w-[50%] flex flex-col gap-4  text-center font-bold mt-6 md:absolute  md:right-0 ">
                <p className="text-[#FCD275] lg:text-[19px] text-[20px]">  وظائف مسرد العائلة</p>
                <h1 className="  lg:text-[28px] md:text-[20px] text-[18px]  text-[white]">{jobs.title_sec1}</h1>
                <p className="lg:text-[15px] md:text-[13px] text-[12px] font-bold text-[#FFFFFFCC] text-shadow-custom">{jobs.des_sec1}</p>
            </div>
    </div>
</div>
  )
}

export default Landing
