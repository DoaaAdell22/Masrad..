
const LangArep = () => {
  return (
    <div className="bg-[#0C5685]">
        <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
            <img src="/Vector (8).png" className="md:w-[50%] h-[300px] sm:h-[350px]  " />
            <div className=" md:text-end  flex flex-col gap-5 justify-center md:items-end items-center text-center font-bold lg:w-[60%] md:w-[50%] ">
                <p className="text-[#FCD275] lg:text-[19px] text-[17px]">    مسرد اللغة والمكان  </p>
                <h1 className=" lg:text-[28px] md:text-[20px] text-[22px] text-[white] leading-10">     قائمة من الالفاظ المستعملة في اصطلاح معين وتعاريفها, وسمي كذلك لان الالفاظ تسرد فيه اي تتابع.</h1>
                <div className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[19px]  justify-center items-center">    
                    <div>
                        <h3 className="text-[#FCD275] ">الصوت</h3>
                        <p className="text-[#FFFFFFCC] text-[15px] font-normal" >شركة عائلية صارعت وصمدت وانجزت, وأصبحت ركيزه اقتصادية, واسم له موثوقية عالمية</p>
                    </div>
                    <div className="bg-[rgba(252,210,117,0.2)] w-16 h-16 rounded-xl flex justify-center items-center"><img src="/voice.png" className="w-10 h-10 "  /></div>
                </div>
                <div className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[19px] text-[white]  justify-center items-center">
                    <div>
                        <h3 className="text-[#FCD275] ">الصدى</h3>
                        <p className="text-[#FFFFFFCC] text-[15px] font-normal">هو متحف يروي القصة الطويلة ويعطيها استحقاقها</p>
                    </div>
                    <div className="bg-[rgba(252,210,117,0.2)] w-16 h-16 rounded-xl flex justify-center items-center"><img src="/echo.png" className="w-10 h-10 "  /></div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default LangArep
