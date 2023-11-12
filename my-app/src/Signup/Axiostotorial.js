import React, { useEffect, useState } from 'react'
import Axios from 'axios';
function Axiostotorial() {
  const [data,setdata]=useState([]);
  useEffect( ()=>{
      Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((Response)=>{
          setdata(Response.data);
      })
    }
  )
  return (
    <div>
      <h1>axios api</h1>
      {
        data.map((data)=>{
          return(
            <p>{data.name}</p>
          )

        })
      }
    </div>
  )
}

export default Axiostotorial
