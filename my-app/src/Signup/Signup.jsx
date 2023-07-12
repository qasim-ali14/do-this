import React from 'react'
import './Signup.css'
 function Signup() {
  return (  <div className='main'>
  <div className="signup">
      <h1 >Sign up</h1>
      <form id="form-start">
          <label htmlFor="Name">Name:</label>
          <input type="text" placeholder='enter your name' maxLength={12}/>
          <label htmlFor="f.name">L.name:</label>
          <input type="text" placeholder='enter your L.name'maxLength={12}/>
          <label htmlFor="age">Age:</label>
          <input type="number" placeholder='enter you age' min={0}/>
          <label htmlFor="email">E-mail:</label>
          <input type="email" placeholder='xyz@gmail.com' />
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder='*******' maxLength={8} />
        
          <button className='btn'>Submit</button>

      </form>
  </div>
  </div>
  );
}
export default Signup;
