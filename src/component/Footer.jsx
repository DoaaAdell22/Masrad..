import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({settings}) => {
    const social = settings.filter((el)=>["facebook","youtube","instagram","x"].includes(el.key));
    const Contact = settings.filter((el)=>["phone","email"].includes(el.key));
    const brief = settings.find((el)=>(el.key==="brief"));
    // const  contacts = [12 , 13 ];
    // const Contact = settings.filter((_ , index) => contacts.includes(index))  ;

    const icons = (key) => {
        if (key === "instagram"){return <FaInstagram />}
        else if (key === "x"){return <FaTwitter /> }
        else if (key === "facebook"){return <FaFacebook /> }
        else if (key === "youtube"){return <FaYoutube /> }

     }
  return (
    <div className="border-t-2 border border-[#eee] mt-10 pt-4 ">
        <div className=" container p-5  mx-auto lg:flex lg:flex-row  flex-col  sm:grid sm:grid-cols-2  justify-center   sm:items-start items-center gap-10 ">
            <div className="font-bold flex flex-col gap-4 sm:text-end sm:items-end items-center text-center text-[#1f2075]  text-[17px] ">
            <div className="flex flex-col justify-center  lg:items-center sm:items-end items-center gap-5 sm:hidden  ">
            <img className="" src="/Frame.png" alt="Shared Screenshot" />
            <p className="text-[#7B7B7B] font-normal lg:text-center sm:text-end text-center text-[15px] max-w-[400px]">{brief.value}</p>
            <div className="flex justify-between items-center gap-10 ">
                <div className="flex justify-center items-center gap-1 ">
                {social.map((el , index) => (
                    <div key={el.id} className="w-8 h-8 rounded-full border-3 border-[#0C5685] border flex justify-center items-center"><a className=" text-[#0C5685]" href={`https://${el.value}`}  target="_blank">{icons(el.key)}</a></div>
                ))}
                </div>
            </div> 
        </div>
                <h2 className="mt-4 sm:mt-0">تواصل معنا الان عبر</h2>
                <hr className="bg-[#1F2075]  w-10 " />
                <p className="text-[#7B7B7B] font-normal  ">هل فكرت الان في الانضمام الى عائلتنا؟ تواصل معنا وسنرشدك الى الطريق!</p>
                <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-4 gap-3 justify-center text-[16px] sm:text-[17px] ">
                    {Contact.map((el,index)=> (
                        <div key={el.id}>
                            <a href={el.key==="phone"? `tel:${el.value}`: `mailto:${el.value}`} className={el.key === "phone" ?"flex justify-end items-center sm:gap-4 gap-2 order-2 sm:order-1" : "flex justify-end items-center sm:gap-4 gap-2 order-4 sm:order-3" }>  
                                <span className="font-normal">{el.key === "phone" ? "اتصل بنا الان" : "ارسل عبر البريد الالكتروني"}</span>
                                <span className="text-[#D08A40]">{el.key === "phone" ? <FaPhone /> : <MdEmail />}</span>
                            </a>
                            <a href={el.key==="phone"? `tel:${el.value}`: `mailto:${el.value}`} className={el.key === "phone" ?  "text-[15px] order-1 sm:order-2" :"text-[15px] font-medium lowercase order-3 sm:order-4"}>{el.value}</a>
                        </div>
                    ))}
                </div>
            </div>
            <br className="sm:hidden block" />
            <div className="sm:flex flex-col justify-center  lg:items-center sm:items-end items-center gap-5 hidden  ">
                <img className="" src="/Frame.png" alt="Shared Screenshot" />
                <p className="text-[#7B7B7B] font-normal lg:text-center sm:text-end text-center text-[15px] max-w-[400px]">{brief.value}</p>
                <div className="flex justify-between items-center gap-10 ">
                    <div className="flex justify-center items-center gap-1 ">
                    {social.map((el , index) => (
                        <div key={el.id} className="w-8 h-8 rounded-full border-3 border-[#0C5685] border flex justify-center items-center"><a className=" text-[#0C5685]" href={`https://${el.value}`}  target="_blank">{icons(el.key)}</a></div>
                    ))}
                    </div>
                </div> 
            </div>
            <br className="sm:hidden block" />
            <div className="font-bold flex flex-col gap-4 sm:text-end sm:items-end items-center text-center text-[#1F2075]  text-[17px] ">
                <h2 className="">عن المسرد</h2>
                <hr className="bg-[#1F2075]  w-10 " />
                <ul  className='sm:text-[17px] text-[15px]  font-normal grid grid-cols-[repeat(2,minmax(0,auto))] w-fit m-0 justify-center  sm:grid-cols-1  gap-5  text-[#7B7B7B]'>
                    <li><Link to="/Description"> ما هي صفة المسرد؟ </Link></li>
                    {/* <li><Link to="">  ماذا يفعل المسرد؟   </Link></li> */}
                    <li><Link to="/contact"> أين يقع مسرد؟  </Link></li>
                    <li><Link to="/building"> كيف يتم بناء مسرد لعائلتكم؟  </Link></li>
                </ul>
            </div> 
            <br className="sm:hidden block" />       
            <div className="font-bold flex flex-col gap-4 sm:text-end sm:items-end items-center text-center text-[#1F2075]  text-[17px] ">
                <h2 className="">معلومات تهمك</h2>
                <hr className="bg-[#1F2075]  w-10 " />
                <ul className='sm:text-[17px] text-[15px] font-normal  grid grid-cols-[repeat(2,minmax(0,auto))] w-fit m-0 justify-center sm:grid-cols-1 gap-5 text-[#7B7B7B]'>
                    <li><Link to="/more">    اعرف اكثر عن مسرد </Link></li>
                    <li><Link to="/building">    كيف يتم بناء مسرد لعائلتكم؟   </Link></li>
                    <li><Link to="/Description">  صفة المسرد   </Link></li>
                    <li><Link to="/jobs"> وظائف مسرد العائلة</Link></li>
                </ul>
            </div>           
        </div>
        <div className="container p-5 mx-auto flex flex-col gap-4"><hr className="w-full h-1" />
        <div className="flex justify-between items-center text-[#7B7B7B] font-medium md:text-[14px] text-[9px]">
            <div className="flex justify-center items-center sm:gap-3 gap-1">
                <span>السياسة والخصوصية</span>
                <span className="bg-[#7B7B7B] h-3 w-[2px]"></span>
                <span>الشروط والأحكام</span>
            </div>
            <span>كل الحقوق منسوبة لشركة سطر لسنة 2024</span>
        </div></div>
    </div>
  )
}

export default Footer
