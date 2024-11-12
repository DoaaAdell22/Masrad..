import { useOutletContext } from "react-router-dom"
import Importance from "./Importance"
import Innovation from "./Innovation"
import Landing from "./Landing"
import LangArep from "./LangArep"
import Message from "./Message"
import Objective from "./Objective"
import Who from "./Who"

const More = () => {

  const [, , , aboutData] = useOutletContext()
  return (
    <div>
        <Landing about={aboutData} />
        <Who about={aboutData} />
        <LangArep about={aboutData} />
        <Innovation about={aboutData} />
        <Objective about={aboutData} />
        <Importance about={aboutData} />
        <Message about={aboutData} />
    </div>
  )
}

export default More
