import { useState , useEffect} from "react";
import "./NewHotel.scss";
import axios from "axios";
import { hotelInputs } from "../../formSource"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useParams } from "react-router-dom"


const NewHotel = () => {
  const { id } = useParams()
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [data , setData] = useState([])
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  function handleClick (e) {
    e.preventDefault();
    axios.put(`http://localhost:8800/api/hotels/${id}`, info , { 
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
     }
     ).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
  }


//   function FetchHotel () {
//     setLoading(true)
//     axios.get(`http://localhost:8800/api/hotels/find/${id}`).then((res)=>{
//         setLoading(false)
//         setData(res.data)
//         console.log(res.data)
//     }).catch ((err)=>{
//         console.log(err)
//         setLoading(false)
//     })
// }   

useEffect(()=>{
  setLoading(true)
  axios.get(`http://localhost:8800/api/hotels/find/${id}`).then((res)=>{
      setLoading(false)
      setData(res.data)
      console.log(res.data)
  }).catch ((err)=>{
      console.log(err)
      setLoading(false)
  })
},[])



  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1> Add New Hotel </h1>
        </div>
        { loading && <h1> Loading </h1>}
        {
          !loading && (
            <>
                <div className="bottom">
                  <div className="left">
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <form>
                      <div className="formInput">
                        <label htmlFor="file">
                          Image: <DriveFolderUploadOutlinedIcon className="icon" />
                        </label>
                        <input
                          type="file"
                          id="file"
                          onChange={(e) => setFile(e.target.files[0])}
                          style={{ display: "none" }}
                        />
                      </div>

                      {hotelInputs.map((input) => (
                        <div className="formInput" key={input.id}>
                          <label>{input.label}</label>
                          <input
                            onChange={handleChange}
                            type={input.type}
                            placeholder={input.placeholder}
                            id={input.id}
                            // value={input.value}
                          />
                        </div>
                      ))}
                      <button onClick = { handleClick }> Send</button>
                    </form>
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