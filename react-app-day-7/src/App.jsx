import "./App.css";
import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import FunctionCounter from "./components/FunctionCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";


// const user = {
//   name: "ahmed",
//   age: 24,
//   phone: {
//     primary: 1234,
//     secondary: 4566,
//   },
// };

// const user2 = {
//   name: "ahmed",
//   age: 24,
//   phone: null,
// };

function App() {
  return (
    <>
      {/* <ErrorBoundary>
        <User user={user} />
      </ErrorBoundary>
      <ErrorBoundary>
        <User user={user2} />
      </ErrorBoundary> */}
      {/* <Counter />
      <HoverCounter /> */}
      <FunctionCounter />
    </>
  );
}

export default App;
