import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link , useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import Swal from 'sweetalert2'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate()

  function logOut() {
    localStorage.removeItem('username');
            setTimeout(()=>{
              window.location = "https://guide-admin.vercel.app/"  
            }, 2000)
            
            let timerInterval
            Swal.fire({
              title: "Logged out Succesfully",
              timer: 2000,
              timerProgressBar: true,
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
              }
            })     
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"> Guide</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span><Link to="/">Dashboard</Link></span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span><Link to="/hotels">Hotels</Link></span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span><Link to="/rooms">Rooms</Link></span>
            </li>
          </Link>
        <Link to="/users">          
          <li>
            <CreditCardIcon className="icon" />
              <span>Users</span>     
          </li>
        </Link>              
          <p className="title"> Logout </p>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={ ()=> logOut()} >Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">

      </div>
    </div>
  );
};

export default Sidebar;
