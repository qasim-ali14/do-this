import React, { useState } from 'react'

 function Child(props) {
    const [name,setname]=useState();
    function handlesubmit(e){
        e.preventDefault();
        props.data(name);
    }
   
  return (
   
    <div>
    <form onSubmit={handlesubmit}>
         <h1> {props.data}  hello world!</h1>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={(e)=>{
         setname(e.target.value);
      }}  />
<button>SUBMIT</button></form>
     
    </div>
  )
}
export default Child;
