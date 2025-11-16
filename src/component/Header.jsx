import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation ,useNavigationType} from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState ,useEffect} from "react";
import { motion ,AnimatePresence, m} from "framer-motion";

const Header = ({ settings }) => {
  const social = settings.filter((el) =>
    ["facebook", "youtube", "instagram", "x"].includes(el.key)
  );
  const email = settings.find((el) => el.key === "email");

  const navList = {
    visible: {
      opacity: 1,
      maxHeight: 900,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    },
    hidden: {
      opacity: 0,
      maxHeight: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };
 const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navigationType = useNavigationType();
  
  useEffect(() => {
  if(isOpen) setOpen(false);
  }, [pathname, navigationType]);
  
  const icons = (key) => {
    if (key === "instagram") return <FaInstagram />;
    else if (key === "x") return <FaTwitter />;
    else if (key === "facebook") return <FaFacebook />;
    else if (key === "youtube") return <FaYoutube />;
  };

  const clicked = () => {
    setOpen(status=>!status);
  };

  return (
    <div
      className={
        pathname === "/" ? " text-[#7B7B7B] " : " bg-[#0C5685] text-[white]"
      }
    >
      <div className="flex flex-col md:flex-row md:justify-center md:items-stretch gap-5 h-full container p-5 mx-auto">
        <div className=" flex justify-between items-center   md:hidden ">
          <img
            className="w-[80px]"
            src={pathname === "/" ? "/Frame.png" : "/Frame (2).png"}
            alt="Shared Screenshot"
          />
          <div >
            <Hamburger toggled={isOpen} toggle={setOpen}  color={pathname === "/" ? "#0C5685" : "white"} />
          </div>
        </div>
  <AnimatePresence>

        {/* {isOpen && ( */}
          <motion.ul
          
            initial="hidden"
             animate={isOpen ? "visible" : "hidden"}
            exit="hidden"
            variants={navList}
            className="flex flex-col  gap-5  md:hidden will-change-[opacity,max-height] overflow-hidden"
          >
            <motion.li variants={navItem}>
              <NavLink
                to="/"
                className={
                  pathname === "/"
                    ? "active text-[#d08a40]"
                    : "hover:text-[#d08a40]"
                }
              >
                الرئيسية
              </NavLink>
            </motion.li>

            <motion.li variants={navItem}>
              <NavLink
                to="description"
                className={
                  pathname === "/description"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                صفة مسرد
              </NavLink>
            </motion.li>

            <motion.li variants={navItem}>
              <NavLink
                to="building"
                className={
                  pathname === "/building"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                كيف يتم بناء مسرد لعائلتكم ؟
              </NavLink>
            </motion.li>
            <motion.li variants={navItem}>
              <NavLink
                to="more"
                className={
                  pathname === "/more"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                اعرف اكثر عن مسرد
              </NavLink>
            </motion.li>

            <motion.li variants={navItem}>
              <NavLink
                to="jobs"
                className={
                  pathname === "/jobs"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                وظائف مسرد العائلة
              </NavLink>
            </motion.li>

            <motion.li variants={navItem}>
              <NavLink
                to="contact"
                className={
                  pathname === "/contact"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                تواصل معنا الان
              </NavLink>
            </motion.li>
          </motion.ul>
        {/* ) } */}
  </AnimatePresence>

        <hr
          className={`${
            pathname === "/" ? "border-[#0C5685]" : "border-white"
          } hidden md:inline`}
        />
        <div className="md:flex md:flex-col flex-col-reverse md:w-[50%] md:items-start items-center gap-5  lg:text-[16px]  sm:text-[14px] font-medium  hidden ">
          <ul className="flex justify-center items-center gap-10 text-center ">
            <li>
              <NavLink
                to="/"
                className={
                  pathname === "/"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="description"
                className={
                  pathname === "/description"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                صفة مسرد
              </NavLink>
            </li>
            <li>
              <NavLink
                to="building"
                className={
                  pathname === "/building"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                كيف يتم بناء مسرد لعائلتكم ؟
              </NavLink>
            </li>
          </ul>
          <hr className="w-full " />
        </div>
        <div className=" md:block hidden h-full ">
          <img
            className="w-[100px] "
            src={pathname === "/" ? "/Frame.png" : "/Frame (2).png"}
            alt="Shared Screenshot"
          />
        </div>
        <div className="hidden md:flex   md:flex-col flex-col-reverse md:w-[50%] md:items-end items-center gap-5  lg:text-[16px] text-[12px] sm:text-[14px] font-medium h-full">
          <ul className="md:flex justify-center items-center gap-10 text-center hidden">
            <li>
              <NavLink
                to="more"
                className={
                  pathname === "/more"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                اعرف اكثر عن مسرد
              </NavLink>
            </li>
            <li>
              <NavLink
                to="jobs"
                className={
                  pathname === "/jobs"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                وظائف مسرد
              </NavLink>
            </li>

            <li>
              <NavLink
                to="contact"
                className={
                  pathname === "/contact"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                تواصل معنا الان
              </NavLink>
            </li>
          </ul>
          <hr className="w-full hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Header;
2