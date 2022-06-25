import { useState , useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import "./Roomstable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { RoomsColumns } from "../../Datablesource/Roomstablesource";
import axios from "axios"
import Swal from 'sweetalert2'
import { url } from "../../formSource";

const Roomstable = () => {
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
        axios.delete(`${url}/api/users/${_id}` , {
          withCredentials: true,
          headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}            
        });
        setData(data.filter((item) => item._id !== _id));
        setTimeout(()=>{
          navigate("/users")
        },1000)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };


  function FetchRooms () {
      setLoading(true)
    axios.get(`${url}/api/rooms` , {
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}      
    }).then((res)=>{

        setLoading(false)
        setData(res.data)
    }).catch ((err)=>{
        console.log('rooms error' , err)
        setLoading(false)
    })
}   

useEffect(()=>{
    FetchRooms()
},[])
  
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">          
            <Link to={`/rooms/edit/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="editButton" style={{ visibility : 'hidden'}}>   edit </div>
            </Link>            
          {
            !params.row.isAdmin &&
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>            
          }
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Rooms
        <Link to="/rooms/new" className="link">
          Add New
        </Link>          
      </div>
      {
        loading && <h1> Loading </h1>
      }
      <DataGrid
        className="datagrid"
        rows={data}
        columns={RoomsColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Roomstable;