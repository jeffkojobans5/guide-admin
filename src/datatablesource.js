export const userColumns = [
  { 
  field: "_id", 
  headerName: "id", 
  width: 100 ,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
  },
  {
    field: "city",
    headerName: "City",
    width: 200,
  },
  {
    field: "rooms",
    headerName: "No. of Rooms",
    width: 230,
    renderCell: (params ) => {
      console.log()
      return (
        <div className="cellWithImg">
          {params.row.rooms.length}
        </div>
      );
    },  
  }
];


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
    "rooms" : [1,2,3,4,5,8],
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
    "rooms" : [1,2,3,4,5],
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
    "rooms" : [1,2,3,4,5],
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
    "rooms" : [1,2,3,4,5],
    "cheapestPrice": 25,
    "featured": true,
    "__v": 0
    }
];
