import "./Rooms.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Roomstable from "../../components/Roomstable/Roomstable"

const Rooms = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Roomstable/>
      </div>
    </div>
  )
}

export default Rooms