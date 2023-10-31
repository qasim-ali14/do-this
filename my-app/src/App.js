import React from 'react'
 function App() {
  const app=['qasim','ali','sajjad','qasimcd'];//basiacallt map provide us the extension by the in
  // which when we render value ut render in a seprate function after that this is all store in 
  // a new array.
  const recive=app.map((value,index)=>
  <h1 key={index}>{value} and our index is {index}</h1>//Keys are used by React to keep track of individual elements within a list. 
  //They help React understand which elements have been added, removed, or modified.i mean 
  //by this we can make code efficeint and time saving as it is in react javascript.
 );
  return (
    <div>
      {
        recive
      } <br></br>
     {/* {
      app[0]}
      {app[1]}
      {app[2]
     } */}
     
    </div>
  )
}

export default App;
