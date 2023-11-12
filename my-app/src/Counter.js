import React, { useState } from 'react';
import useLifthook from './useLifthook';
import Decrement from './Decrement';

function Counter() {
  const [count, setCount] = useState(0);

  // Use the custom hook to update the document title
  useLifthook(count);

  return (
   
    <div>
      <Decrement/>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>Click me</button>
    </div>
  );
}

export default Counter;
