import React, { useContext } from 'react';
import { data,gend } from './App';

function ChildC() {
  const name=useContext(data);//actua;;u use context the problem like call back hell.
  const gender=useContext(gend);//so we can  catch props here very easily and maintain this,
  return (

    <>
     <h1>hi i am {name}.i am {gender}</h1> 
    </>
  );
}

export default ChildC;
