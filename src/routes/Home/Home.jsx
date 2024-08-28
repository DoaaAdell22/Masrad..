import Descrip from "../Home/Descrip"
import Know from "./Know"
import How from "./How"
import Conta from "./Conta"

const Home = () => {
  return (
  <div> 
    <div className="container p-5 mx-auto ">
        <div className="bg-[#0C5685] flex flex-col-reverse md:flex-row  gap-4 rounded-3xl p-6">
            <img src="/landing.png" className="lg:w-[60%] md:w-[70%]  md:h-[450px]   m-[-24px] " />
            <div className=" md:text-end md:w-[40%]  text-center ">
                <p className="text-[#FCD275] lg:text-[19px] text-[17px]">عن مسرد</p>
                <h1 className="lg:text-[40px] md:text-[28px] text-[25px] text-[white]">علامة تجارية مستقلة تحب كتابة حكايات <span className="text-[#FCD275]">العائلات التجارية</span> </h1>
                <p className="lg:text-[15px] md:text-[13px] text-[12px] font-bold text-[#FFFFFFCC] text-shadow-custom">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
                أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
                ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور.</p>
                <button className="bg-[#FCD275] text-[#0C5685] sm:p-3 my-5 p-2  rounded-xl font-bold">اعرف اكتر عن المسرد</button>
            </div>
        </div>
    </div>
    <Descrip />
    <How />
    <Know />
    <Conta />
    
  </div>   
  )
}

export default Home
