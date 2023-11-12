import React, { useState } from "react";
import useLifthook from "./useLifthook";
function Decrement(){
  const [count,setcount]=useState(0);
  useLifthook(count);
    return (
        <>
        <h1>{count}</h1>
         <button onClick={()=>{
         setcount(count-1);
         }}>Click for Decrement</button>

        </>

    );
};
export default Decrement;
