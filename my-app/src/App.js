import React from 'react';
import ChildA from './ChildA';
import react, { createContext } from 'react'

//how to avoid props drilling 
//we use context api
//three steps 1.create context 2.provider 3.consumer

const data=createContext();
const gend=createContext();
function App() {

  const name='Qasim ali '
  const gender='male'
  return (
     <>
     <data.Provider value={name}> 
      <gend.Provider value={gender}>
     <ChildA/>
     </gend.Provider>
     </data.Provider>
     </>
  )
  ;
}

export default App;
export {data,gend}
