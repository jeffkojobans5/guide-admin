import "./Users.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Userstable from "../../components/Userstable/Userstable"

const Hotels = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Userstable/>
      </div>
    </div>
  )
}

export default Hotels