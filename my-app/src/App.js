import react from 'react'
import ChildA from './ChildA';

function App() {
  //prop drilling
  //when we want to send data from parent to multiple components ot its third child 
  //like its nested component, then send data from parent to a to b, to c, to d.
  //its ok in small application where two to three nested loop made but in 10 to 12 nested loop 
  //this can create complexity so we can avoid that
  
  const name='qasim ali sajjad'
  return (
     <>
     <ChildA name={name}/>
     
     </>
  )
  ;
}

export default App;
