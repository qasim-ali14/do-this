import react from 'react'
import { useState, useEffect, useRef } from 'react';

function App() {
  const [countdown, setCountdown] = useState(10);
  const intervalRef = useRef(null);

  // Function to start the countdown timer
  const startCountdown = () => {
    intervalRef.current = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
  };

  // Function to stop the countdown timer::::
  const stopCountdown = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // useEffect hook to start the countdown when the component mounts
  useEffect(() => {
    startCountdown();

    // Clean up the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Countdown: {countdown}</h2>
      <button onClick={startCountdown}>Start Countdown</button>
      <button onClick={stopCountdown}>Stop Countdown</button>
    </div>
  );
}

export default App;
