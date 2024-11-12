import Descrip from "../Home/Descrip"
import Know from "./Know"
import How from "./How"
import Conta from "./Conta"
import Statistics from "./Statistics"
import Landing from "./Landing"
import {  useOutletContext } from "react-router-dom"

const Home = () => {
  const [data ] = useOutletContext()
  console.log(data)
  return (
  <div> 
    <Landing data={data}/>
    <Descrip data={data}/>
    <How data={data}/>
    <Know data={data}/>
    <Statistics data={data}/>
    <Conta data={data}/>
    
  </div>   
  )
}

export default Home
