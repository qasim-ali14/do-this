import React from "react";
import Signup from "./Signup/Signup"

import { useState } from 'react';
import { useEffect } from "react";
function App() {
//use effcct hook
//use as a side function in  function components.
//when we want to update dom
//when we want to fetch something. 
  const [state,setstate]=useState(0);
  const [data,setdata]=useState('qasim');
  useEffect(()=>{
    console.log('mounted data:');

  },[state])
  function increasefun(){
    setstate(state+1);
    }
    function decreasefun(){
      setstate(state-1);
    }
    function update(){
      setdata('ali');
    }
    const styles={
      btn:{
    width:'20rem',
    height:'3rem',
    border:'2px solid green',
    margin:'3rem',

      },
      hell:{
        marginleft:'33rem',
        fontsize: '3rem',
        marginleft: '29rem',

      }
    }
  return (
    <>
     <h1 style={styles.hell}>counting ::  {state},{data} ::</h1>
    <button onClick={increasefun} style={styles.btn}>click me to add</button>
    <button onClick={decreasefun} style={styles.btn}>click me to remove</button>
    <button onClick={update} style={styles.btn}>click to  update</button>  
   {/* <Checking name="Facebook"/>
   <Checking name="instagram"/>
   <Checking name="Google"/> 
   <Signup/>*/}
  </>
  );
}

export default App;
