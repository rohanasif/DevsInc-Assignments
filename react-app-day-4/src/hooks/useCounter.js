import { useState } from "react";

export default function useCounter(initialState = 0, change = 1) {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount((prevCount) => prevCount + change);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - change);
  };

  const reset = () => {
    setCount(initialState);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
