import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = ({ settings }) => {
  const social = settings.filter((el) =>
    ["facebook", "youtube", "instagram", "x"].includes(el.key)
  );
  const email = settings.find((el) => el.key === "email");

  const list = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  const icons = (key) => {
    if (key === "instagram") return <FaInstagram />;
    else if (key === "x") return <FaTwitter />;
    else if (key === "facebook") return <FaFacebook />;
    else if (key === "youtube") return <FaYoutube />;
  };

  const clicked = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className={
        pathname === "/" ? " text-[#7B7B7B] " : " bg-[#0C5685] text-[white]"
      }
    >
      <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-stretch gap-5 h-full container p-5 mx-auto">
        <div className=" flex justify-between items-center   md:hidden ">
          <div onClick={clicked}>
            <Hamburger color={pathname === "/" ? "#0C5685" : "white"} />
          </div>
          <img
            className="w-14"
            src={pathname === "/" ? "/Frame.png" : "/Frame (2).png"}
            alt="Shared Screenshot"
          />
        </div>

        {isOpen ? (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={list}
            className="flex flex-col-reverse  gap-5  md:hidden"
          >
            <motion.li variants={item}>
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
            </motion.li>

            <motion.li variants={item}>
              <NavLink
                to="Description"
                className={
                  pathname === "/Description"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                صفة مسرد
              </NavLink>
            </motion.li>

            <motion.li variants={item}>
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
            <motion.li variants={item}>
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

            <motion.li variants={item}>
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

            <motion.li variants={item}>
              <NavLink
                to="contact"
                className={
                  pathname === "/contact"
                    ? "active text-[#FCD275]"
                    : "hover:text-[#FCD275]"
                }
              >
                واصل معنا الان
              </NavLink>
            </motion.li>
          </motion.ul>
        ) : (
          ""
        )}

        <hr className={pathname === "/" ? "#0C5685" : "white"} />
        <div className="md:flex md:flex-col flex-col-reverse md:w-[50%] md:items-start items-center gap-5  lg:text-[16px]  sm:text-[14px] font-medium  hidden ">
          <a
            href={`mailto:${email.value}`}
            className="underline hidden md:block md:text-[17px] mt-[7px]"
          >
            {email.value}
          </a>
          <hr className="w-full " />
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
                to="Description"
                className={
                  pathname === "/Description"
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
        </div>
        <div className=" md:block hidden h-full ">
          <img
            className="w-[100px] h-[112px]"
            src={pathname === "/" ? "/Frame.png" : "/Frame (2).png"}
            alt="Shared Screenshot"
          />
        </div>
        <div className="flex  md:flex-col flex-col-reverse md:w-[50%] md:items-end items-center gap-5  lg:text-[16px] text-[12px] sm:text-[14px] font-medium h-full">
          <div className="md:flex justify-center items-center gap-5 hidden ">
            {social.map((el) => (
              <div
                key={el.id}
                className={
                  pathname === "/"
                    ? "w-8 h-8 rounded-full border-3 border border-[#0C5685] flex justify-center items-center text-[#0C5685]"
                    : "w-8 h-8 rounded-full border-3 border border-[white] flex justify-center items-center text-[white] bg-[#0C5685]"
                }
              >
                <a
                  href={`https://${el.value}`}
                  target="_blank"
                  className="w-[16px] h-[16px]"
                >
                  {icons(el.key)}
                </a>
              </div>
            ))}
          </div>
          <hr className="w-full hidden md:block" />
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
                وظائف مسرد العائلة
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
        </div>
      </div>
    </div>
  );
};

export default Header;
