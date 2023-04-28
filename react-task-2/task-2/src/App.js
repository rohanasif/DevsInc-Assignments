import Button from './Button';
import './App.css';
import { useState } from 'react';

function App() {
  const [flag, setFlag] = useState(true);

  const toggleFlag = () => {
    setFlag(!flag);
  }

  return <Button onClick={toggleFlag} text={`Flag is ${flag}`} />;
}

export default App;
