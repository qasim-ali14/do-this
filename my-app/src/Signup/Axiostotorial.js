import React, { useState } from 'react'
import Axios from "axios"
function Axiostotorial() {
  const st={ fname:'',lname:''};
  const [data,setdata]=useState(st);
  function handler(e){
     setdata({...data,[e.target.name]:e.target.value});
  }
  function submitt(e)
  {
    Axios.post("https://jsonplaceholder.typicode.com/users",data)
   .then((Response)=>{
    console.log(Response);
   })

  }

  return (
    <div>
      <label htmlFor="name">firstname</label>
      <input type="text" name='fname'  value={data.fname} onChange={handler}   />
      <label htmlFor="name" >lastname</label>
      <input type="text" name='lname' value={data.lname} onChange={handler}  />
  <button onClick={submitt}>SUBMIT</button>
    </div>
  )
}

export default Axiostotorial
