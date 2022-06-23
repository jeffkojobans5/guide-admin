import "./Hotels.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Hoteltable from "../../components/Hoteltable/Hoteltable"

const Hotels = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Hoteltable/>
      </div>
    </div>
  )
}

export default Hotels