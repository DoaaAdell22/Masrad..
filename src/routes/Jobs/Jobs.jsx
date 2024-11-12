import { useOutletContext } from "react-router-dom"
import Conta from "../Home/Conta"
import Landing from "./Landing"
import Task from "./Task"
import Contact from "./Contact"

const Jobs = () => {
  const [ , , , ,jobsData] = useOutletContext()
  return (
    <div>
        <Landing jobs={jobsData} />
        <Task jobs={jobsData}/>
        <Contact jobs={jobsData} />
    </div>
  )
}

export default Jobs
