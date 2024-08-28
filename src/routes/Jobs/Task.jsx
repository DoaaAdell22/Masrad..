
const Task = () => {
  return (
    <div className="container  mx-auto  p-12 ">
    <div className="   flex flex-col justify-between items-center md:flex-row  gap-10  ">
        <div className=" md:text-end  flex flex-col gap-4 justify-center md:items-end items-center text-center font-bold lg:w-[60%]  md:w-[50%] ">
            <p className="text-[#D08A40] lg:text-[19px] text-[17px]">  ما هي مهامنا؟  </p>
            <h1 className=" lg:text-[28px] md:text-[20px] text-[22px] text-[#0C5685] leading-10"> وظائف ومهام نقوم بها في مسرد لأجلكم ومن أجل عائلاتكم الكريمة  </h1>
            <ul className="list-circle text-[15px] font-medium text-[#7B7B7B] flex flex-col gap-4 ">
                <li className="">تحميل الاحفاد مجتمعون (اولاد وبنات) امانه حماية اسم العائلة والحرص على استمراره مئات السنين. .</li>
                <li >بث روح حماس جديدة في الابناء والاحفاد لتكرار قصة النجاح داخل العائلة.</li>
                <li >تبيان التاريخ الطويل الذي تملكه العائلة من علاقات متينة مع المجتمع المحلى والمجتمع الدولي.</li>
                <li >  تبيان النفع المباشر الذي قدمته العائلة للمجتمعات:</li>
            </ul>
            <ul className="list-number text-[15px] font-medium text-[#7B7B7B] flex flex-col gap-4 ">
                <li className="">تحميل الاحفاد مجتمعون (اولاد وبنات) امانه حماية اسم العائلة والحرص على استمراره مئات السنين. .</li>
                <li >بث روح حماس جديدة في الابناء والاحفاد لتكرار قصة النجاح داخل العائلة.</li>
                <li >تبيان التاريخ الطويل الذي تملكه العائلة من علاقات متينة مع المجتمع المحلى والمجتمع الدولي.</li>
                <li >  تبيان النفع المباشر الذي قدمته العائلة للمجتمعات:</li>
            </ul>
        </div>
        <img src="/more.png" className="lg:w-[40%] md:w-[50%]  lg:h-[250px] md:h-[200px]   " />
    </div>
</div>
  )
}

export default Task
