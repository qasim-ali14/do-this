import React from 'react'
import './Todo.css'
import { useState } from 'react';
function Todolist() {
   const [activity,setactivity]=useState('');
   const [item,setitem]=useState([])
   function addactivity(){
   {setitem([...item,activity]);
   console.log(item);
   setactivity("");

   }
  }
  function removeactivity(index){
    const updatedlist=item.filter((elem,id)=>{
    return index!=id;
    }
    )
    setitem(updatedlist);

  }
  function removeall(){
    setitem([])
  }
  return (
    <>
     <div className='Ap'>
     <div className='header'> Todolist</div>
     <input  type="text" placeholder='enter activity' value={activity} onChange={(e)=>{
      setactivity(e.target.value)
     }}/>
     <button onClick={addactivity}>add</button>
     {
      (item!=0 && item.map((data,index)=>{
        return(
          <>
          <div className='list'>     
          <div className="list-heading"key={index}>
            {data}
            </div>
          <button className='btn' onClick={()=>removeactivity(index)}>remove</button></div>
         
          </>
        )
}))
     }
     { item.length >=1 && <div className='b' onClick={removeall}><button>remove all</button></div> }
      
    </div>   
    </>
  );
}
export default Todolist