import React, { useState } from 'react'

 function App() {
     const data={name:"qasim",lname:"ali"}
  const [value,setvalues]=useState(data)
 function update (){
  setvalues({...value,name:"ali"})//we are facing the problem the one is update
  // but other is not showing
  //so we can use spread operator by this is we actually can create the copy 
  //of and when we change any thing it can over write there.
 }
  return (
    <div>
      <h1>my first name is {value.name}.and last name is {value.lname}.</h1>
      <button onClick={update}>update</button>
    </div>
  )
}

export default App;
