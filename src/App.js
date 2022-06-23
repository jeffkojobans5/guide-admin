import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Hotels from "./pages/Hotels/Hotels";
import Users from "./pages/Users/Users";
import NewHotel from "./pages/Hotels/NewHotel";
import SingleHotel from "./pages/Hotels/SingleHotel";
import SingleUser from "./pages/Users/SingleUser";
import EditHotel from "./pages/Hotels/EditHotel";
import EditUser from "./pages/Users/EditUser";
import Rooms from "./pages/Rooms/Rooms";
import NewRooms from "./pages/Rooms/NewRooms";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";

function App() {
  let user = localStorage.getItem("username")

  return (
    <div className= "app">
      <BrowserRouter>
        <Routes>
        {
          user && (
          <>
            <Route path="/" element={<Hotels />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="hotel/new" element={<NewHotel />} />
            <Route path="hotel/:id" element={<SingleHotel />} />
            <Route path="hotel/edit/:id" element={<EditHotel />} />
            <Route path="users" element={<Users />} />            
            <Route path="users/edit/:id" element={<EditUser />} />            
            <Route path="rooms" element={<Rooms />} />            
            <Route path="rooms/new" element={<NewRooms />} />            
            <Route path="users" element={<Users />} /> 
          </>
            )
        }
        {
          !user && (
            <Route path="login" element={<Login />} />
          )
        }

        <Route path="*" element={ <Navigate to={user ? "/" : "/login"} />} />
  

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
