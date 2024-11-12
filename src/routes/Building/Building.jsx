import Landing from "../Building/Landing"
import Contact from "./Contact"
import How from "./How"
import {  useOutletContext } from "react-router-dom"

const Building = () => {

  const [ , ,buildData] =  useOutletContext()
  return (
    <div>
        <Landing build={buildData} />
        <How build={buildData} />
        <Contact  build={buildData}/>
    </div>
  )
}

export default Building
