
const Conta = () => {
  return (
    <div className="container p-5 mx-auto ">
        <div className="bg-[#0C5685] flex flex-col-reverse md:flex-row  justify-center items-center gap-4 rounded-3xl p-6">
            <img src="/Vector (3).png" className="md:w-[50%] md:h-[250px] h-[200px]" />
            <div className=" md:text-end md:w-[50%] w-auto  text-center font-bold mt-6 ">
                <p className="text-[#88C278] lg:text-[19px] text-[17px]"> تواصل معنا</p>
                <h1 className="  lg:text-[28px] md:text-[20px] text-[22px]  text-[white]">هل فكرت الان في الانضمام الى عائلتنا؟ تواصل معنا  <span className="text-[#88C278]">سنرشدك الى الطريق </span>       </h1>
                <p className="lg:text-[15px] md:text-[13px] text-[12px]  text-[#FFFFFFCC] text-shadow-custom">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .</p>
                <button className="bg-[#88C278] text-[white] sm:p-3 my-5 p-2  rounded-xl font-bold  ">اعرف اكتر عن المسرد</button>
            </div>
        </div>
    </div>
  )
}

export default Conta
