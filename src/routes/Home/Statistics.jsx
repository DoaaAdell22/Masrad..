
const Statistics = ({ data }) => {

console.log(data)

const statis = data.nums_sec4 || []; 
  return (
    <div className="container mx-auto  p-10 flex flex-col xl:justify-center xl:items-center ">
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative cursor-pointer">
                <video src={data.video_sec4} />
            </div>
        </div>
        <div className="grid xl:grid-cols-4   md:grid-cols-2 grid-cols-1 gap-6 justify-center sm:text-end 
        items-center my-5 ">
        {statis.map((el, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 justify-center md:items-end items-center">
                <span className="text-[#D08A40] lg:text-[48px] text-[28px] font-medium">{el.nums}</span>
                <p className="text-[#0C5685] text-[19px] font-bold">{el.text}</p>
                <div className="w-[260px] h-[1px] bg-[#FCD275]"></div>
              </div>
            );
          })}
          
        </div>
    </div>
  )
}

export default Statistics
