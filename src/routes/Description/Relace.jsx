
const Relace = () => {
  return (
        <div className="bg-[#0C5685]">
        <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
            <img src="/Vector (8).png" className="md:w-[50%] h-[300px] sm:h-[350px]  " />
            <div className=" md:text-end  flex flex-col gap-5 justify-center md:items-end items-center text-center font-bold lg:w-[60%] md:w-[50%] ">
                <p className="text-[#FCD275] lg:text-[19px] text-[17px]">    أين يقع المسرد؟</p>
                <h1 className=" lg:text-[28px] md:text-[20px] text-[22px] text-[white] leading-10">     اعتمادا على كوادر بشرية وتقنية يجمع الفريق <span className="text-[#FCD275]">المعلومات المتاحة</span> عن عائلتكم والمتاحة في الاعلام الرسمى وغير الرسمي. </h1>
                <div className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[19px] text-[white] justify-center items-center">
                    
                    <p>في دار ضيافة العائلة</p>
                    <div className="bg-[#fcd27533] w-16 h-16 rounded-xl  flex justify-center items-center "><img className="w-10 h-10 " src="/book2.png" /></div>
                </div>
                <div className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[19px] text-[white]  justify-center items-center">
                    <p>  أو مقر الشركة القابضة</p>
                    <div className="bg-[rgba(252,210,117,0.2)] w-16 h-16 rounded-xl  flex justify-center items-center"><img className="w-10 h-10 " src="/book2.png" /></div>
                </div>
                <div className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[19px] text-[white] justify-center items-center">
                    <p>أو يتم بناء مسرد على أرض جديدة تصبح ايقونة التواصل بين العائلة والمجتمع</p>
                    <div className="bg-[rgba(252,210,117,0.2)] w-16 h-16 rounded-xl  flex justify-center items-center"><img className="w-10 h-10 " src="/book2.png" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Relace
