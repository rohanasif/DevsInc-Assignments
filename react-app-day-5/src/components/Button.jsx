import {memo} from "react";

function Button({ children, handleClick }) {
    console.log("rendering in button", children);

  return <button onClick={handleClick}>{children}</button>;
}
export default memo(Button);
// export default Button

