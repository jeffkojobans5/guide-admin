export const HotelColumns = [
  { 
  field: "id", 
  headerName: "ID", 
  width: 50 ,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row._id}
        </div>
      );
    },
},

  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "distance",
    headerName: "distance",
    width: 150,
  },
  {
    field: "title",
    headerName: "title",
    width: 230,
  },
  {
    field: "rooms",
    headerName: "rooms",
    width: 100,
    renderCell: (params) => {
      return (
            <p> { params.row.rooms.length } </p>
      );
    }
  },
];

//temporary data
export const userRows = [
  {
    "_id": "628b3a109eb15c99b40a506cd",
    "name": "Love and Money",
    "type": "Hostel",
    "city": "Nairobi",
    "address": "Hotel WaaWaa",
    "distance": "Hotel WaaWaa",
    "photos": [],
    "title": "Hotel WaaWaa",
    "desc": "Hotel WaaWaa",
    "rooms": [],
    "cheapestPrice": 25,
    "featured": true,
    "__v": 0
    },
  {
    "_id": "628b3a109eb15c99b40a5d06c",
    "name": "Love and Money",
    "type": "Hostel",
    "city": "Nairobi",
    "address": "Hotel WaaWaa",
    "distance": "Hotel WaaWaa",
    "photos": [],
    "title": "Hotel WaaWaa",
    "desc": "Hotel WaaWaa",
    "rooms": [],
    "cheapestPrice": 25,
    "featured": true,
    "__v": 0
    },
  {
    "_id": "628b3ad109eb15c99b40a506c",
    "name": "Love and Money",
    "type": "Hostel",
    "city": "Nairobi",
    "address": "Hotel WaaWaa",
    "distance": "Hotel WaaWaa",
    "photos": [],
    "title": "Hotel WaaWaa",
    "desc": "Hotel WaaWaa",
    "rooms": [],
    "cheapestPrice": 25,
    "featured": true,
    "__v": 0
    },
  {
    "_id": "628b3a109eb15dc99b40a506c",
    "name": "Love and Money",
    "type": "Hostel",
    "city": "Nairobi",
    "address": "Hotel WaaWaa",
    "distance": "Hotel WaaWaa",
    "photos": [],
    "title": "Hotel WaaWaa",
    "desc": "Hotel WaaWaa",
    "rooms": [],
    "cheapestPrice": 25,
    "featured": true,
    "__v": 0
    }
];
