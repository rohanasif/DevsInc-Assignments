import { useState, createContext } from "react";
import "./App.css";
import LifeCycle from "./components/LifeCycle";
import TrackMouse from "./components/TrackMouse";
import LoginForm from "./components/LoginForm";
import ABC from "./components/Posts";
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentD from './components/ComponentD'


export const UserContext = createContext()



function App() {
  const [visible, setVisible] = useState(true)
  const username = "ahmned"
  return (
    <>
       {/* {visible && <TrackMouse />}
      <button onClick={() => setVisible(!visible)}>toggle visibility</button> */}
      {/* <TrackMouse /> */}
      {/* <LoginForm /> */}
      {/* <ABC /> */}
      <UserContext.Provider value={username}>
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </UserContext.Provider>
  

    </>
  );
}

export default App;
