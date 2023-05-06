import { useState, useRef } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // let intervalID = null
  const intervalRef = useRef(null);

  function startOrStopTimer() {
    if (!isTimerRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((pv) => pv + 1);
      }, 1000);
      setIsTimerRunning(true);
    } else {
      clearInterval(intervalRef.current);
      setIsTimerRunning(false);
    }
  }

  return (
    <div>
      <h1>Timer = {timer}</h1>
      <button onClick={startOrStopTimer}>
        {isTimerRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default Timer;
