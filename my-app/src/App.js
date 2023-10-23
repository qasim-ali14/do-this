import React, { useRef } from 'react'

//controlled form mean we can controll the submission after the user click on submit button
//uncontrolled mean that we did not control but dom controlled it  we use default behavior
// which js giving us. like  dom controll itself.
function App() {
  const inputelement=useRef(0);
  function handle(){
    inputelement.current.focus();//with use ref we can easily manipulate dom 
    //and add things.
  }
  return (
      <div>
      <label htmlFor="fname">fname</label>
      <input type='text'  ref={inputelement} /><br></br>
      <button onClick={handle}>SUBMIT</button>
      {/* <label htmlFor="lname">lname</label>
      <input type='text' name="lastname" value={lname} onChange={handle}/><br></br>
      <label htmlFor="pass">password</label>
      <input type='password' name="password" value={passs} onChange={handle}/><br></br> */}
    </div>
  )
}
export default App;
