import { useReducer } from "react";

const INITIAL_STATE = 0;
const INCREAMENT = "increament";
const DECREMENT = "decrement";
const RESET = "reset";

function counterReducer(state, action) {
  if (action === INCREAMENT) {
    return state + 1;
  } else if (action === DECREMENT) {
    return state - 1;
  } else if (action === RESET) {
    return INITIAL_STATE;
  }
}

function ReducerExample() {
  const [count, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={() => dispatch(INCREAMENT)}>Increment</button>
      <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
      <button onClick={() => dispatch(RESET)}>Reset</button>
    </div>
  );
}

export default ReducerExample;
