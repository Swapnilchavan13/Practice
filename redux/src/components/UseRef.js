import React, { useRef, useEffect } from 'react';

function Timer() {
  const intervalRef = useRef(null);
  const timerRef = useRef(0);

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      timerRef.current += 1;
      console.log('Timer:', timerRef.current);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    console.log('Timer stopped');
  };

  const resetTimer = () => {
    timerRef.current = 0;
    console.log('Timer reset');
  };

  return (
    <div>
      <h1>Timer: {timerRef.current}</h1>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}

export default Timer;
