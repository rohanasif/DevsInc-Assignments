import {useState, useMemo} from 'react'

function EvenOdd() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    // const isEven =
    const isEven = useMemo(() => {
        let i = 0
        while(i< 1000000000000) i++
        return counter1 % 2 === 0
    }, [counter1])

  return (
    <>
    <h1>{counter1} {isEven ? "Even" : "Odd"}</h1>
    <button onClick={() => setCounter1(counter1+1)}>increament counter1</button>
    <h1>{counter2}</h1>
    <button onClick={() => setCounter2(counter2+1)}>increament counter2</button>
    </>
  )
}

export default EvenOdd