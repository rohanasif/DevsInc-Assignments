import { useState, useEffect } from "react";

function TrackMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useFffect called");
    document.body.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("unmounting");
      document.body.removeEventListener("mousemove",logMousePosition )
    }
  }, []);
  return (
    <h1>
      Hooks - X - {x} Y - {y}
    </h1>
  );
}

export default TrackMouse;
