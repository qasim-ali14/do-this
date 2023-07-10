import React from 'react'
import './Signup.css'
 function Signup() {
  return (
   
    <div className='main'>
    <div className="signup">
        <h1 >Sign up</h1>
        <form id="form-start">
            <label htmlFor="Name">Name:</label>
            <input type="text" placeholder='enter your name' maxLength={12}/>
            <label htmlFor="f.name">F.name:</label>
            <input type="text" placeholder='enter your f.name'maxLength={12}/>
            <label htmlFor="age">Age:</label>
            <input type="number" placeholder='enter you age' min={0}/>
            <label htmlFor="email">E-mail:</label>
            <input type="email" placeholder='xyz@gmail.com' />
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='*******' maxLength={8} />
            {/* <label htmlFor="Name">Choose your favorate language:</label>
            <input type="radio" name="fav-lang" value="html" />
            <label htmlFor="html">html</label>
            <input type="radio" name="fav-lang" value="css" />
            <label htmlFor="css">css</label>
            <input type="radio" name="fav-lang" value="java" />
            <label htmlFor="java">java</label>
            <label htmlFor="Name">select your cars</label>
            <label htmlFor="HONDA">HONDA</label>
            <input type="checkbox" name="v1" value="honda"/>
            <label htmlFor="MERCEDES">MERCEDES</label>
            <input type="checkbox" name="v2" value="mercedes"/>
            <label htmlFor="LAMBO">LAMBORGINI</label>
            <input type="checkbox" name="v3" value="lamborgini"/>
            */}
            <button className='btn'>Submit</button>

        </form>
    </div>
    </div>
  );
}
export default Signup;
