
const Landing = () => {
  return (
    <div className="container p-5 mx-auto ">
        <div className="bg-[#0C5685] flex flex-col-reverse md:flex-row md:items-center  gap-4 rounded-3xl p-6">
            <img src="/landing.png" className="lg:w-[60%] md:w-[70%] w-full  lg:h-[450px] md:h-[400px]  m-[-24px] " />
            <div className=" md:text-end md:w-[40%]  text-center ">
                <p className="text-[#FCD275] lg:text-[19px] text-[17px]">عن مسرد</p>
                <h1 className="lg:text-[40px] md:text-[28px] text-[25px] text-[white] text-shadow-custom">علامة تجارية مستقلة تحب كتابة حكايات <span className="text-[#FCD275]">العائلات التجارية</span> </h1>
                <p className="lg:text-[15px] md:text-[13px] text-[12px] font-bold text-[#FFFFFFCC] text-shadow-custom">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
                أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
                ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور.</p>
                <button className="bg-[#FCD275] md:text-[15px] text-[13px] font-bold text-[#0C5685] lg:py-4 lg:px-8 p-2 my-4   rounded-xl ">اعرف اكتر عن المسرد</button>
            </div>
        </div>
    </div>
  )
}

export default Landing
