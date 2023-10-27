import React, { useState,useEffect } from 'react'
import './Signup.css'
// import '../Checking'

 function Signup() {
  const input={ name:"" , fname: "" }
   const [data,setdata]=useState(input);
   const [flag,setflag]=useState(false); 
  function handle(e){
     setdata({...data,[e.target.name]:e.target.value});
     console.log(data);
  }
  useEffect(()=>{
    console.log('registered');
  },[flag]);
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(!data.name || !data.fname){
      alert('please complete all input');
    }
    else{
      setflag(true);
    }

  }

    return(
      <>
      <pre>{(flag)?<h2>congratualtion {data.name} you have sucessfully signup</h2>:""}</pre>
     <div className='main'>
    <div className="signup">
      <h1 >Sign up</h1>
       <form id="form-start" onSubmit={handlesubmit}>
          <label htmlFor="Name">Name:</label>
          <input type="text" placeholder='enter your name' name='name' value={data.name}  onChange={handle} maxLength={12}/>
          <label htmlFor="f.name">L.name:</label>
          <input type="text" placeholder='enter your L.name'name='fname' value={data.fname}  onChange={handle} maxLength={12}/>
          {/* <label htmlFor="age">Age:</label>
          <input type="number" placeholder='enter you age' min={0}/>
          <label htmlFor="email">E-mail:</label>
          <input type="email" placeholder='xyz@gmail.com' />
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder='*******' maxLength={8} /> */}
        
          <button   className='btn'>Submit</button>
         
          {/* <Checking name={state}/> */}

      </form>
  </div>
  </div>
  </>
  );
}
export default Signup;
