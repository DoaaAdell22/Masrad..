const Task = ({ jobs }) => {
  const section2 = jobs.job_des2;

  const oneList = section2.slice(0, 3);
  const twoList = section2.slice(3);
  return (
    <div className="container  mx-auto  p-12 ">
      <div className="   flex flex-col justify-between items-center md:flex-row  gap-10  ">
        <div className=" md:text-start  flex flex-col gap-4 justify-center md:items-start items-center text-center font-bold lg:w-[60%]  md:w-[50%] ">
          <p className="text-[#D08A40] text-base lg:text-lg font-medium mb-2">
            {/* ما هي مهامنا؟ */}
            {jobs.main_title_sec_2}
          </p>
          <h1 className="text-[#0C5685]  leading-normal text-xl mb-2 font-bold">
            {jobs.title_sec2}
          </h1>
          <ul className=" text-[#7B7B7B] text-sm md:text-base leading-relaxed font-semibold  flex flex-col gap-4 ">
            {oneList.map((el) => (
              <li key={el.id} className="">
                {el.job_text}
              </li>
            ))}
          </ul>
          <ul className=" text-[#7B7B7B] text-sm md:text-base leading-relaxed font-semibold flex flex-col gap-4 ">
            {twoList.map((el) => (
              <li key={el.id} className="">
                {el.job_text}
              </li>
            ))}
          </ul>
        </div>
        <img src="/Frameadq.png" className="lg:w-[40%] md:w-[50%]    " />
      </div>
    </div>
  );
};

export default Task;
