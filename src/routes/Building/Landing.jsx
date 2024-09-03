
const Landing = () => {
  return (
    <div className="bg-[#0C5685] ">
        <div className="container p-5 mx-auto flex md:flex-row flex-col-reverse justify-between items-center gap-10">
            <img src="/build.png" className="md:w-[50%] w-full" />
                <div className=" md:text-end md:w-[50%]  w-full flex flex-col gap-3 text-center font-bold mt-6 ">
                    <p className="text-[#FCD275] lg:text-[19px] text-[20px]">  كيف يتم بناء مسرد لعائلتكم؟ </p>
                    <h1 className="  lg:text-[28px] md:text-[20px] text-[18px]  text-[white]">خطوات ثابتة ومدروسه نسير عليها لبناء مسرد       <span className="text-[#FCD275]">ناجح لعائلتكم</span></h1>
                </div>
        </div>
    </div>
  )
}

export default Landing
