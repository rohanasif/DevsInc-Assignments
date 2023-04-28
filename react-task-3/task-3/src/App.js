
import Text from "./Text.js"
import { useState, useRef } from 'react';


function App() {
  const btnRef = useRef(null);
  const [flag, setFlag] = useState(true);

  const toggleFlag = () => {
    setFlag(!flag);
    console.log(btnRef.current);
    btnRef.current.style.backgroundColor = "red";
  }

  return <>
    <button onClick={toggleFlag} ref={btnRef} text={`Flag is ${flag}`}>ClickME</button>
    <Text />
  </>;
}

export default App;
