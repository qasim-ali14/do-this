import React, { useState } from 'react'
import "./App.css"
 function App() {
  const [value,setvalue]=useState([]);
  function add(){
    setvalue([...value,{
      id:value.length,
      item:'qasim ali'
    }])
  }
  
  return (

    <div className='App'>
     <ol>
      {
        value.map((value)=>
        
        <li key={value.id}>{value.item}</li>
        )
      }
     </ol>
     <button onClick={add}>add item</button>
    </div>
  )
}
export default App;
