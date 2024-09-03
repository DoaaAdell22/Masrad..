
const Objective = () => {
  return (
    <div className="bg-[#0C5685]">
        <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
            <img src="/Frameadq.png" className="md:w-[50%] lg:w-[40%]     " />
            <div className=" md:text-end  flex flex-col gap-3 justify-center md:items-end items-center text-center font-bold lg:w-[60%] md:w-[50%] ">
                <p className="text-[#FCD275] lg:text-[19px] text-[20px]"> هدفنا   </p>
                <h1 className=" lg:text-[28px] md:text-[20px] text-[18px] text-[white] leading-10">تحفيز عائلات تجارية لسرد قصتهم العظيمة من اجل احفادهم اولا, ثم من اجل مجتمع رواد الاعمال ثانيا, ثم من اجل عظمة القصة بذاتها.</h1>
                <button className="bg-[#FCD275] text-[#0C5685]  md:text-[15px] text-[13px]  sm:p-3 my-5 p-2  rounded-xl font-bold w-fit "> ابدأ قصتك معنا الان </button>
            </div>
        </div>
    </div>
  )
}

export default Objective
