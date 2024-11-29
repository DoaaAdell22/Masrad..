import { useOutletContext } from "react-router-dom"
import Importance from "./Importance"
import Innovation from "./Innovation"
import Landing from "./Landing"
import LangArep from "./LangArep"
import Message from "./Message"
import Objective from "./Objective"
import Who from "./Who"
import Statistics from "./../Home/Statistics"

const More = () => {

  const [data, , , aboutData] = useOutletContext()
  return (
    <div>
        <Landing about={aboutData} />
        <Who about={aboutData} />
    <Statistics videoUrl={aboutData.video_sec2} data={data}/>
        <LangArep about={aboutData} />

        <Innovation about={aboutData} />
        <Objective about={aboutData} />
        <Importance about={aboutData} />
        <Message about={aboutData} />
    </div>
  )
}

export default More
