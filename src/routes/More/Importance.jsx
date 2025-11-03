const Importance = ({ about }) => {
  const section6 = about.components_sec6;

  return (
    <div className="container p-10 mx-auto flex flex-col justify-center items-center">
      <div className="text-center font-bold lg:max-w-[70%] w-auto">
        <p className="text-[#D08A40] text-base lg:text-lg font-medium mb-2">
          {" "}
          {about.main_title_sec_6}
          {/* ماذا يفعل مسرد لعائلتك التجارية؟ */}
        </p>
        <h1 className="text-[#0C5685]  leading-normal text-xl mb-2 font-bold">
          {" "}
          {about.title_sec6}
        </h1>
        <p className="text-[#7B7B7B]  text-sm md:text-base lg:text-lg leading-relaxed font-bold">
          {" "}
          {about.des_sec6}
        </p>
      </div>
      <div
        className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
        justify-center items-center gap-5 sm:text-start text-center "
      >
        {section6.map((el) => (
          <div
            key={el.id}
            className="p-5 flex flex-col gap-5 sm:items-start items-center rounded-2xl shadow-custom-lg "
          >
            <div className="bg-[#FAE5D433] w-10 h-10 flex justify-center items-center">
              <img className="w-4 h-7" src="/Group 1597880858.png" />
            </div>
            <h3 className="text-[#0C5685] text-[19px]"> {el.title}</h3>
            <p className="text-[#7B7B7B] text-[15px]">{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Importance;
