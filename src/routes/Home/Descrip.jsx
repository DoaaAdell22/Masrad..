
const Descrip = () => {
  return (
    
    <div className="container p-5 mx-auto flex flex-col gap-6 justify-center items-center">
        <div className="text-center font-bold lg:max-w-[70%] w-auto">
            <p className="text-[15px] text-[#D08A40] ">صفة المسرد</p>
            <h3 className="text-[#0C5685] md:text-[30px] text-[25px]">متحف يروي القصة الطويلة ويعطيها ,<span className="text-[#D08A40]">استحقاقها</span>.</h3>
            <p className="text-[#7B7B7B] md:text-[15px] text-[13px]">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا
            أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت 
            أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت
            فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور.</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5 sm:text-end text-center ">
            <div className="p-5 flex flex-col gap-5 sm:items-end items-center rounded-2xl shadow-custom-lg ">
                <div className="bg-[rgba(250,229,212,0.2)] w-16 h-16 rounded-xl flex justify-center items-center"><img className="w-10 h-10" src="/spray.png" /></div>
                
                <h3 className="text-[#0C5685] text-[19px]">عطر الأب المؤسس</h3>
                <p className="text-[#7B7B7B] text-[15px]">مكان, يجمع بين صيغة المتحف والكتاب والذكاء الاصطناعي, والتقنيات 
                البصرية المتقدمة, والمقتنيات 
                الملموسة, يسرد بصيغة عصرية حكاية عائلة تجارية.</p>
            </div>
            <div className="p-5 flex flex-col gap-5 sm:items-end items-center rounded-2xl shadow-custom-lg">
            <div className="bg-[rgba(250,229,212,0.2)] w-16 h-16 rounded-xl flex justify-center items-center"><img className="w-10 h-10" src="/hand.png" /></div>
            <h3 className="text-[#0C5685] text-[19px]">ما بعد افتتاح المسرد</h3>
                <p className="text-[#7B7B7B] text-[15px]">     يلعب دور متحدث رسمي باسم العائلة وجسر يربط العائلة بالمجتمع 
                (التهاني, والتعازي, والدعوات لمناسبات اجتماعية تتم من خلال المسرد).  </p>
            </div>
            <div className="p-5 flex flex-col gap-5 sm:items-end items-center rounded-2xl shadow-custom-lg">
            <div className="bg-[rgba(250,229,212,0.2)] w-16 h-16 rounded-xl flex justify-center items-center"><img className="w-10 h-10" src="/time.png" /></div>
            <h3 className="text-[#0C5685] text-[19px]"> ما هي صفة المسرد؟ </h3>
                <p className="text-[#7B7B7B] text-[15px]">مكان, يجمع بين صيغة المتحف والكتاب والذكاء الاصطناعي, 
                والتقنيات البصرية المتقدمة, والمقتنيات الملموسة, يسرد بصيغة عصرية حكاية عائلة تجارية.</p>
            </div>
        </div>
        <button className="bg-[#D08A40] text-[white] sm:p-3 my-5 p-2  rounded-xl font-bold ">اعرف اكتر عن المسرد</button>
    </div>


  )
}

export default Descrip
