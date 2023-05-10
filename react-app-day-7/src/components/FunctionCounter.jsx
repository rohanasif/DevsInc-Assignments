import { useState } from 'react'

function FunctionCounter() {
    const [counter, setCounter] = useState({value: 0})
    const increament = () => {
        console.log("click received");
        setCounter({value: counter.value + 1})
    }
  return (
    <button onClick={increament}>{counter.value}</button>
  )
}

export default FunctionCounter