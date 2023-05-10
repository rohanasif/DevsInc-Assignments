import { useContext } from "react";
import { CounterContext } from "../contexts/CounterProvider";

function Counter(props) {
  const { counter, increanent, decrement } = useContext(CounterContext);

  return (
    <>
      {props.children}
      <h1>{counter}</h1>
      <button onClick={increanent}>Increament</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;
