import React, { useState } from "react";
import { useRef } from "react";
function App() {
  //use ref
  //most used for direct  mamipulate DOM
  //sometimes we cannot manipulate by state peops so we used this.
  //we use to manipulate with objevt which ref return.
  const RefElement=useRef();
  const [state,setstate]=useState('qasim')
  console.log(RefElement);
  //we handle dom with ref by using current which help to change dom
  function handlein(){
    RefElement.current.style.color='red';
  }
  function reset(){
    setstate("");
    RefElement.current.focus();
  }
  return (
    <>
    <input  ref={RefElement} value={state} onChange={(e)=>setstate(e.target.value)}/>
    <button onClick={reset}>reset</button>
    <button onClick={handlein}> handle input</button>
    </>
  );
}

export default App;
