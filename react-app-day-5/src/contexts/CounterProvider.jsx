import { createContext, useState } from "react";

export const CounterContext = createContext();
function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const increanent = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <CounterContext.Provider value={{ counter, increanent, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
