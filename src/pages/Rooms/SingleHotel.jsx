import { Link , useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import "./SingleHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { url } from "../../formSource"

const SingleHotel = () => {

  const { id } = useParams();
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function FetchHotel () {
        setLoading(true)
        axios.get(`${url}/api/hotels/find/${id}`).then((res)=>{
            setLoading(false)
            setData(res.data)
        }).catch ((err)=>{
            console.log(err)
            setLoading(false)
        })
    }   

    useEffect(()=>{
      FetchHotel()
    },[])

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            { loading && <h1> Loading </h1>}
            {
              !loading && (
                <>
                <div className="edit-button"><Link to={`/hotel/edit/${id}`}> Edit </Link></div> <br/><br/>
                  <div className="item">
                    <img
                      src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      className="itemImg"
                    />
                    <div className="details">
                      <h1 className="itemTitle"> { data.name } </h1>
                      <div className="detailItem">
                        <span className="itemKey">Type:  </span>
                        <span className="itemValue">{data.type}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Cheapest Price:  </span>
                        <span className="itemValue">{data.cheapestPrice}</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">City: </span>
                        <span className="itemValue"> {data.city}  </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Rating: </span>
                        <span className="itemValue"> {data.rating}  </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey"> Number of Room: </span>
                        <span className="itemValue"> {data.rooms}  </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey"> Featured: </span>
                        <span className="itemValue"> {data.featured}  </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">
                          { data.address }
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Distance:</span>
                        <span className="itemValue"> { data.distance} </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue"> { data.address} </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Description:</span>
                        <span className="itemValue"> { data.desc} </span>
                      </div>
                    </div>
                  </div>

                </>
              )
            }
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default SingleHotel;
