import React from 'react'
 function Checking(props) {
  return (
    <>
    {/* <li>
    props stand for properties.
    props like a funcstions we take value in parameter.
    props used to send data from onr component to other.
    props can only read like we can not here to new value.
    props take data in object that why we acces them by using key.
    by this we make components re-usable
    </li>
    <br></br>
      { <button >login with {props.name}</button> 
       */}
        <h1> you submit for {props.name} times</h1>
    </>
  );
}
export default Checking;