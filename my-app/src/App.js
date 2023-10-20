import React, { useState } from 'react'

//controlled form mean we can controll the submission after the user click on submit button
//uncontrolled mean that we did not control but dom controlled it  we use default behavior which js giving us.
function App() {
  const [name,setname]=useState("");
  const [lname,setlname]=useState("");
  const [passs,setpass]=useState("");//s
   function handle(e){
    if(e.target.name == "firstname"){ 
      const capp=(e.target.value).toUpperCase();
      setname(capp);
    }
    else if(e.target.name == "lastname"){   
      const lower=(e.target.value).toLowerCase();
      setlname(lower);
    }
    else
    setpass(e.target.value);
  }
  return (
    <div>
      <label htmlFor="fname">fname</label>
      <input type='text' name="firstname" value={name} onChange={handle} /><br></br>
     <label htmlFor="lname">lname</label>
      <input type='text' name="lastname" value={lname} onChange={handle}/><br></br>
      <label htmlFor="pass">password</label>
      <input type='password' name="password" value={passs} onChange={handle}/><br></br>
    </div>
  )
}
export default App;
