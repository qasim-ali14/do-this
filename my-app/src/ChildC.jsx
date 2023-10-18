import React, { useContext } from 'react';
import { data,gend } from './App';

function ChildC() {
   const name=useContext(data);//actually  context api  the problem like call back hell.
   const gender=useContext(gend);//so we can  catch props here very easily and maintain this,
  return (
<>
<h1> my name is {name}. i am {gender}</h1>
</>
    )
  }
    // <>
    // <d>
    //   {
    //      (name)=>{
    //       return(
    //         <gend.Consumer>
    //   {
    //       (gender)=>{
    //       return(
    //         <h1>
    //         my name is {name}. and i am {gender}
    //       </h1>
    //       )
    //     }
    //   }
    //  </gend.Consumer>
    //       )

     
 

export default ChildC;
