import React from "react";
import Checking from "./Checking"
import Signup from "./Signup/Signup"
import { useState } from "react";

function App() {
  const [state,setstate]=useState(0);
  function increasefun(){
    setstate(state+1);
    }
    function decreasefun(){
      setstate(state-1);
    }
    function removeall(){
      setstate(state-state);
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
    {/* <h1 style={styles.hell}>counting ::  {state} ::</h1>
    <button onClick={increasefun} style={styles.btn}>click me to add</button>
    <button onClick={decreasefun} style={styles.btn}>click me to remove</button>
    <button onClick={removeall} style={styles.btn}>click memto remove all</button> */}
    <Signup/>
   {/* <Checking name="Facebook"/>
   <Checking name="instagram"/>
   <Checking name="Google"/> 
   <Signup/>*/}
  </>
  );
}

export default App;
