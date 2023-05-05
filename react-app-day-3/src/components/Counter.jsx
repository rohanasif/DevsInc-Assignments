import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleCLick() {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={handleCLick}>Increase by 5</button>
    </>
  );
}

export default Counter;
