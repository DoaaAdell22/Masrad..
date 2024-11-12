
const Message = ({about}) => {
  return (
    <div className="bg-[#0c5685]">
        <div className=" container  mx-auto   flex flex-col-reverse justify-between items-center md:flex-row  gap-10 rounded-3xl px-5 py-10 ">
            <img src="/message.png" className="md:w-[50%] lg:w-[40%]  " />
            <div className=" md:text-end  flex flex-col gap-3 justify-center md:items-end items-center text-center font-bold lg:w-[60%] md:w-[50%] ">
                <p className="text-[#FCD275] lg:text-[19px] text-[20px]"> رسالتنا   </p>
                <h1 className=" lg:text-[28px] md:text-[20px] text-[18px] text-[white] leading-10">{about.title_sec7}</h1>
                <p className="text-[15px] text-[rgb(255,255,255,0.8)] font-medium">{about.des_sec7}</p>
                
            </div>
        </div>
    </div>
  )
}

export default Message
