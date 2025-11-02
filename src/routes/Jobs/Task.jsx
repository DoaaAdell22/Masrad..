const Task = ({ jobs }) => {
  const section2 = jobs.job_des2;

  const oneList = section2.slice(0, 3);
  const twoList = section2.slice(4);
  return (
    <div className="container  mx-auto  p-12 ">
      <div className="   flex flex-col justify-between items-center md:flex-row  gap-10  ">
        <div className=" md:text-start  flex flex-col gap-4 justify-center md:items-start items-center text-center font-bold lg:w-[60%]  md:w-[50%] ">
          <p className="text-[#D08A40] lg:text-[19px] text-[20px]">
            {" "}
            ما هي مهامنا؟{" "}
          </p>
          <h1 className=" lg:text-[28px] md:text-[20px] text-[18px] text-[#0C5685] leading-10">
            {" "}
            وظائف ومهام نقوم بها في مسرد لأجلكم ومن أجل عائلاتكم الكريمة{" "}
          </h1>
          <ul className="list-circle text-[15px] font-medium text-[#7B7B7B] flex flex-col gap-4 ">
            {oneList.map((el) => (
              <li key={el.id} className="">
                {el.job_text}{" "}
              </li>
            ))}
          </ul>
          <ul className="list-number text-[15px] font-medium text-[#7B7B7B] flex flex-col gap-4 ">
            {twoList.map((el) => (
              <li key={el.id} className="">
                {el.job_text}{" "}
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
