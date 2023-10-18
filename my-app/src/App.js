import React, { useState,useMemo } from 'react'
 function App() {
  const [add,setadd]=useState(0);
  const [subtract,setsubtract]=useState(110);
  const hello=useMemo(
    function  multiply(){//use memo hook use to increase performance like stop
      //repeating data on other components.
      console.log("**************");
      return add*10;//by using memo hook we cccan easily avoid the extra things which previosly
      // printed by rendering other component also.
  },[add])
  return (
    <div>
      <h1> use memo hook</h1>
      {hello}
      <button onClick={()=>{
        setadd(add+1);
      }}>addition</button>
      <span>{add}</span>  


      <button  onClick={()=>{
        setsubtract(subtract-1);
      }}>minus</button>
      <span>{subtract}</span>
    </div>
  )
}
export default App;
