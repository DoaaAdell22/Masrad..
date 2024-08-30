import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {

  const { pathname } = useLocation();

 const icons = [
  {   
      id : '1' , 
      icon : <FaInstagram />
  },
  {
      id : '2' , 
      icon : <FaFacebook />
  },
  {
      id : '3' , 
      icon : <FaYoutube />
  },
  {
      id : '4' , 
      icon : <FaTwitter />
  },
 ]

  return (
    <div className={pathname === '/' ? ' text-[#7B7B7B] ' : ' bg-[#0C5685] text-[white]'  } > 
      <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-stretch gap-5 h-full container p-5 mx-auto">
        <div className="flex  md:flex-col flex-col-reverse md:w-[50%] md:items-start items-center gap-5  lg:text-[16px] text-[12px] sm:text-[14px] font-medium h-full">
          <div className="md:flex justify-center items-center gap-5 hidden ">
          {
            icons.map((el) => (
              <div
                key={el.id}  
                className={pathname === '/' ? "w-8 h-8 rounded-full border-3 border border-[#0C5685] flex justify-center items-center text-[#0C5685]" : "w-8 h-8 rounded-full border-3 border border-[white] flex justify-center items-center text-[white] bg-[#0C5685]" }
              >
                <a href="#" className="w-[16px] h-[16px]">
                  {el.icon}
                </a>
              </div>
            ))
          }
          </div>
          <hr className="w-full " />
          <ul className="flex justify-center items-center gap-10 text-center">
            <li><NavLink to="contact" className={pathname === "/contact" ? 'active text-[#FCD275]' : 'hover:text-[#FCD275]'}>واصل معنا الان</NavLink></li>
            <li><NavLink to="jobs" className={pathname === "/jobs" ? 'active text-[#FCD275]' : 'hover:text-[#FCD275]'}>  وظائف مسرد العائلة </NavLink></li>
            <li><NavLink to="more" className={pathname === "/more" ? 'active text-[#FCD275]' : 'hover:text-[#FCD275]'}>اعرف اكثر عن مسرد</NavLink></li>
          </ul>
        </div>
        <div className=" md:block hidden h-full ">
          <img className="w-[100px] h-[112px]" src={ pathname === "/" ?"/Frame.png" : '/Frame (2).png'} alt="Shared Screenshot" />
        </div>
        <div className="flex md:flex-col flex-col-reverse md:w-[50%] md:items-end items-center gap-5  lg:text-[16px] text-[12px] sm:text-[14px] font-medium h-full">
          <a href="#" className="underline hidden md:block md:text-[17px] mt-[7px]">info@masrad.com</a>
          <hr className="w-full " />
          <ul className="flex justify-center items-center gap-10 text-center ">
            <li><NavLink to='building'  className={pathname === '/building' ? 'active text-[#FCD275]' : 'hover:text-[#FCD275]'}    >   كيف يتم بناء مسرد لعائلتكم ؟</NavLink></li>
            <li ><NavLink  to='Description'  className={pathname === '/Description' ? 'active text-[#FCD275]' : 'hover:text-[#FCD275]'}            > صفة مسرد </NavLink></li>
            <li  ><NavLink to='/' className={pathname === '/' ? 'active text-[#FCD275]' : 'hover:text-[#FCD275]'} >  الرئيسية </NavLink></li>
          </ul>
        </div>
        
        <div className=" flex flex-col items-center justify-center  md:hidden ">
          <img src={ pathname === "/" ?"/Frame.png" : '/Frame (2).png'} alt="Shared Screenshot" />
        </div>
        <div className="flex justify-between items-center gap-10 ">
          
          <div className="flex justify-center items-center gap-1 md:hidden ">
          {
            icons.map((el) => (
              <div
                key={el.id}  
                className={pathname === '/' ? "w-7 h-7 rounded-full border-3 border border-[#0C5685] flex justify-center items-center text-[#0C5685]" : "w-8 h-8 rounded-full border-3 border border-[white] flex justify-center items-center text-[white] bg-[#0C5685]" }
              >
                <a href="#" className="w-[16px] h-[16px]">
                  {el.icon}
                </a>
              </div>
            ))
          }
          </div>
          <a href="#" className="underline  md:hidden lg:text-[18px] text-[13px] sm:text-[14px] font-bold">info@masrad.com</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
