import React from 'react'
import Child from './Child';
 function App() {
  function data(data){//we do lifting state when we want that data which user enter
    // in input in child component then we pass from child to parent...
console.log(data);
  }
  return (
    <div>
    <Child data={data}/>  {/* //here we have a function that accepts data and show that */}
    </div>
  )
}
export default App;
