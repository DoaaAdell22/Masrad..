
const How = ({build}) => {
    const section2 = build.components_sec2 ;

    const icons = (slug) => {
<<<<<<< HEAD
        console.log("Slug:", slug);

        if(slug === 'slug-17'){
            return '/team.png' ;
        }else if(slug === 'slug-16'){
=======
        // if(slug === 'build-9'){
        //     return '/team.png' ;
        // }
         if(slug === 'build-5'){
>>>>>>> f1511d6 (enhancments)
            return '/time.png' ;
        }else if(slug === 'build-1'){
            return '/collect.png';
        }else if(slug === 'build-4'){
            return '/company.png';
        }else if(slug === 'build-2'){
            return '/content.png';
        }else if(slug === 'build-6'){
            return '/Frame (4).png';
        }
        // else if(slug === 'slug-11'){
        //     return '/result.png';
        // }
        // else if(slug === 'slug-10'){
        //     return '/element.png';
        // }
        else if(slug === 'build-3'){
            return '/team2.png';
        }else{
            return ''
        }
    }
  return (
    <div className="container p-10 mx-auto flex flex-col gap-6 justify-center items-center">
        <div className="text-center font-bold lg:max-w-[70%] w-auto flex flex-col gap-2">
            <p className="md:text-[15px] text-[20px] text-[#D08A40] "> كيف يتم بناء مسرد لعائلتكم؟</p>
            <h3 className="text-[#0C5685] md:text-[30px] text-[18px]">{build.title_sec2}</h3>
            <p className="text-[#7B7B7B] md:text-[15px] text-[13px]">{build.des_sec2}</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5 sm:text-end text-center ">
        {section2.map((el )=> (
            <div key={el.id} className="p-5 flex flex-col gap-5 sm:items-end items-center rounded-2xl shadow-custom-lg ">
                <div className="bg-[rgba(250,229,212,0.2)] rounded-2xl  w-16 h-16 flex justify-center items-center"><img className="w-10 h-10" src={icons(el.slug)}/></div>
                <h3 className="text-[#0C5685] text-[19px]"> {el.title}</h3>
                <p className="text-[#7B7B7B] text-[15px]">{el.desc}</p>
            </div>

        ))}
            
            
        </div>    
    </div>
  )
}

export default How
