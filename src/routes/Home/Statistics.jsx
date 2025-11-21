import { Player } from "video-react";
import "video-react/dist/video-react.css"; // import css

const Statistics = ({ data, videoUrl }) => {
  const statis = data.nums_sec4 || [];
  return (
   videoUrl || statis.length > 0 ?( <div className="container px-5 pb-10 mx-auto  flex gap-8 flex-col xl:justify-center xl:items-center ">
          {videoUrl && (
      <div className="flex flex-col justify-center items-center  w-full">
        <div className="relative cursor-pointer w-full">
            <Player
              poster="/hekaya.png"
              className="rounded-lg overflow-hidden"
              playsInline
              src={videoUrl}
              aspectRatio="18.1:9.388"
              height={400}
            />
        
        </div>
      </div>
          )}
{  statis.length > 0 ?    <div
        className="grid xl:grid-cols-4   md:grid-cols-2 grid-cols-1 gap-6 justify-center sm:text-start 
        items-center"
      >
        {statis.map((el, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 justify-center  items-center"
            >
              <span className="text-[#D08A40] lg:text-[48px] text-[28px] font-medium">
                {el.nums}
              </span>
              <p className="text-[#0C5685] text-[19px] font-bold">{el.text}</p>
              <div className="w-full h-[1px] bg-[#FCD275]"></div>
            </div>
          );
        })}
      </div>:null}
    </div>):null
  );
};

export default Statistics;
