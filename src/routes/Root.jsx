import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"
import axios from "../helpers/axios"
import {
  useQuery
} from '@tanstack/react-query'
import { SpinnerRound } from 'spinners-react';

const Root = () => {
  const {data ,isPending } = useQuery({ queryKey: ['main-page'], queryFn: ()=> axios.get('main-page').then((res)=> res.data.data[0]) 
  })
  const {data :charData, isPending : charPending } = useQuery({ queryKey: ['char'], queryFn: ()=> axios.get('char').then((res)=> res.data.data[0]) })
  const {data :buildData, isPending : buildPending } = useQuery({ queryKey: ['bulid'], queryFn: ()=> axios.get('bulid').then((res)=> res.data.data[0]) })
  const {data :aboutData, isPending : aboutPending } = useQuery({ queryKey: ['about'], queryFn: ()=> axios.get('about').then((res)=> res.data.data[0]) })
  const {data :jobsData, isPending : jobsPending } = useQuery({ queryKey: ['jobs'], queryFn: ()=> axios.get('jobs').then((res)=> res.data.data[0]) })
  const {data :settingsData, isPending : settingsPending } = useQuery({ queryKey: ['settings'], queryFn: ()=> axios.get('settings').then((res)=> res.data.data) })

  return (
    
      isPending || charPending || buildPending || aboutPending || jobsPending || settingsPending ? <div className="relative w-full h-screen "><SpinnerRound className=" absolute flex justify-center items-center top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]   " /></div>: 
    
    <div>
    
        <Header settings={settingsData} />
        <Outlet context={[data , charData , buildData , aboutData , jobsData , settingsData ]} />
        <Footer settings={settingsData}  />
    </div> 
  )
}

export default Root
