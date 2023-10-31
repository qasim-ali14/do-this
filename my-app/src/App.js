import React from 'react'
 function App() {
  const app=['qasim','ali','sajjad'];//basiacallt map provide us the extension by the in
  // which when we render value ut render in a seprate function after that this is all store in 
  // a new array.
  const recive=app.map((value)=>
  <h1>{value}</h1>
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
