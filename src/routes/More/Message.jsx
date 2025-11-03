const Message = ({ about }) => {
  return (
    <div className="bg-[#0c5685]">
      <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
        <div className=" md:text-start  flex flex-col gap-3 justify-center md:items-start items-center text-center lg:w-[60%] md:w-[50%] ">
          <p className="text-[#FCD275] text-base lg:text-lg font-medium mb-2 mt-2">
            {about.main_title_sec_7}
            {/* رسالتنا */}
          </p>
          <h1 className="text-white text-xl leading-normal mb-2 font-bold">
            {about.title_sec7}
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg leading-relaxed font-bold text-shadow-custom ">
            {about.des_sec7}
          </p>
        </div>
        <img src="/message.png" className="md:w-[50%] lg:w-[40%]  " />
      </div>
    </div>
  );
};

export default Message;
