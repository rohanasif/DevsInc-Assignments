import { useState, useEffect } from "react";

export default function LifeCycle() {
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    console.log(`counter is ${counter}`);
  },[counter])

  useEffect(() => {

   const id = setInterval(() => {
      setCounter(previousState => previousState + 1);
      console.log("interval is running");
    }, 1000);

    return function clear(){
        console.log("unmounting");
        clearInterval(id)
    }
  }, []);

  return <h1>Counter {counter}</h1>;
}
