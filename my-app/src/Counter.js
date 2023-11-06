import React, { useState } from 'react';
import useLifthook from './useLifthook';

function Counter() {
  const [count, setCount] = useState(0);

  // Use the custom hook to update the document title
  useLifthook(count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>Click me</button>
    </div>
  );
}

export default Counter;
