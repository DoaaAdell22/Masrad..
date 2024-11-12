import { useOutletContext } from "react-router-dom"
import ContactUs from "./ContactUs"
import Landing from "./Landing"

const Contact = () => {

  const [, , , , ,settingsData] =useOutletContext()

  return (
    <div>
        <Landing />
        <ContactUs settings={settingsData} />
    </div>
  )
}

export default Contact
