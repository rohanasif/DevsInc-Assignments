import "./App.css";
import Callback from "./components/Callback";
import Counter from "./components/Counter";
import EvenOdd from "./components/EvenOdd";
import FetchData from "./components/FetchData";
import CounterProvider from "./contexts/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <Counter>
        <h1>Counter</h1>
      </Counter>
      {/* <FetchData /> */}
      {/* <Callback /> */}
      {/* <EvenOdd /> */}
      {/* <Callback /> */}
    </CounterProvider>
  );
}

export default App;
