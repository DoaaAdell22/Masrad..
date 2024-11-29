import Contact from "./Contact"
import Landing from "./Landing"
import More from "./More"
import Relace from "./Relace"
import Section2 from './Section2'
import {  useOutletContext } from "react-router-dom"

const Description = () => {
  const [, charData ] = useOutletContext()
  return (
    <div>
        <Landing char={charData} />
        <Section2 char={charData} />
        <Relace char={charData}/>
        <More char={charData}/>
        <Contact char={charData} />
    </div>
  )
}

export default Description
