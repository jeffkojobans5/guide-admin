import { useState , useEffect} from "react";
import "./EditUser.scss";
import axios from "axios";
import { userInputs } from "../../formSource"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"


const NewHotel = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [data , setData] = useState([])

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  function handleClick (e) {
      axios.put(`http://localhost:8800/api/users/${id}`, { isAdmin : status } , { 
        withCredentials: true,
          headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
      }
     ).then((res)=>{
      setStatus(res.data.isAdmin)
                Swal.fire(
                    'Success!',
                    'User Updated Successfully!',
                    'success'
                  )                
                setTimeout(() => {
                 navigate("/users") 
                }, 2000);       
    }).catch((error)=>{
      console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went Wrong',
                })    
                    
    })
  }

useEffect(()=>{
  setLoading(true)
  axios.get(`http://localhost:8800/api/users/${id}` , {
              withCredentials: true,
              headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}      
  }).then((res)=>{
      setLoading(false)
      setData(res.data)
  }).catch ((err)=>{
      console.log(err)
      setLoading(false)
  })
},[])


  function handleSelect (e) {
    setStatus(e.target.value)  
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1> Update User Status </h1>
        </div>
        { loading && <h1> Loading </h1>}
        {
          !loading && (
            <>
                <div className="bottom">
                  <div className="" style={{ padding : "3rem"}}>
                    <p> Change Status of { data.username } </p> <br/>
                    <div>
                        <select name="status" value={ status } style={{ border: "1px solid gray"}} onChange= { (e)=>handleSelect(e) } >
                          <option value="true"> Admin </option>
                          <option value="false"> User </option>
                        </select>
                    </div>
                    <button onClick = {handleClick} className="btn button"> UPDATE  </button>
                  </div>
                </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default NewHotel;