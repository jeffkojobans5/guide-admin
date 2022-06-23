import { useState , useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import "./Hoteltable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { HotelColumns } from "../../Datablesource/Hoteltablesource";
import axios from "axios"
import Swal from 'sweetalert2'


const Hoteltable = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Do you want to delete?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8800/api/hotels/${_id}` , {
          withCredentials: true,
          headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}            
        });
        setData(data.filter((item) => item._id !== _id));
        setTimeout(()=>{
          navigate("/hotels")
        },1000)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };


  function FetchHotel () {
        setLoading(true)
    axios.get(`http://localhost:8800/api/hotels`).then((res)=>{
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
  
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/hotel/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Hotels
        <Link to="/hotel/new" className="link">
          Add New
        </Link>
      </div>
      {
        loading && <h1> Loading </h1>
      }
      <DataGrid
        className="datagrid"
        rows={data}
        columns={HotelColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Hoteltable;
