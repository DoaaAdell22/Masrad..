import { Link } from "react-router-dom";

const Descrip = ({data}) => {
    console.log(data)
    const section3 = data.components_sec2 || []; 

    const icons = (slug) => {
        if(slug === 'slug-1'){
            return '/spray.png';
        }else if(slug === 'slug-2'){
            return '/hand.png' ;
        }else if(slug === 'slug-3'){
            return '/time.png';
        }else{
            return "/time.png" ;
        }
    }
  return (
    
    <div className="container p-5 mx-auto flex flex-col gap-6 justify-center items-center">
        <div className="text-center font-bold lg:max-w-[70%] w-auto">
            <p className="text-[20px] md:text-[15px] text-[#D08A40] ">صفة المسرد</p>
            <h3 className="text-[#0C5685] md:text-[30px] text-[18px]">{data.title_sec2}</h3>
            <p className="text-[#7B7B7B] md:text-[15px] text-[13px]">{data.des_sec2}</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center
        gap-5 sm:text-end text-center items-stretch">
        {section3.map((el) => (
            <div key={el.id} className="p-5 flex flex-col gap-5 sm:items-end items-center rounded-2xl shadow-custom-lg ">
                <div className="bg-[rgba(250,229,212,0.2)] w-16 h-16 rounded-xl flex justify-center items-center">
                    <img className="w-10 h-10" src={icons(el.slug)} alt="" />
                </div>
                <h3 className="text-[#0C5685] text-[19px]">{el.title}</h3>
                <p className="text-[#7B7B7B] text-[15px]">{el.desc}</p>
            </div>
        ))}  
        </div>
        <Link className="bg-[#D08A40] text-[white] sm:p-3 my-5 p-2  rounded-xl font-bold   md:text-[15px] text-[13px]" to="/more">اعرف اكتر عن المسرد</Link>
    </div>


  )
}

export default Descrip
