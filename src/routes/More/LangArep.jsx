
const LangArep = ({about}) => {

    const section3 = about.about_desc3 ;

    const icons = (slug) =>{
        if(slug === 'slug-1'){
            return '/voice.png'
        }else if (slug === 'slug-2'){
            return '/echo.png'
        }else{
            return ''
        }
    }

  return (
    <div className="bg-[#0C5685]">
        <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
            <img src="/Vector (8).png" className="md:w-[50%]   " />
            <div className=" md:text-end  flex flex-col gap-5 justify-center md:items-end items-center text-center font-bold lg:w-[60%] md:w-[50%] ">
                <p className="text-[#FCD275] lg:text-[19px] text-[20px]">    مسرد اللغة والمكان  </p>
                <h1 className=" lg:text-[28px] md:text-[20px] text-[18px] text-[white] leading-10"> {about.title_sec3}</h1>
                <p className="text-[white] md:text-[15px] text-[13px]">{about.des_sec3}</p>
                {section3.map((el)=>
                    (
                    <div key={el.id} className=" flex flex-col-reverse md:flex-row gap-4 font-bold text-[19px]  justify-center items-center">    
                        <div>
                            <h3 className="text-[#FCD275] ">{el.title}</h3>
                            <p className="text-[#FFFFFFCC] text-[15px] font-normal" >{el.text}</p>
                        </div>
                        <div className="bg-[rgba(252,210,117,0.2)] md:w-16 md:h-16 w-14 h-14 rounded-xl flex justify-center items-center"><img src={icons(el.slug)} className="md:w-10 md:h-10 w-8 h-8 "  /></div>
                    </div>    
                ))}
                
                
            </div>
        </div>
    </div>
  )
}

export default LangArep
