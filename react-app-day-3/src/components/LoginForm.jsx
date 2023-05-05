import { useState, useRef, useEffect } from "react";

function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const emailRef = useRef(null)

  function handleChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  useEffect(() => {
    console.log(emailRef.current, "email ref");
    
    emailRef.current.focus()
  }, [])

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formValues.email}
            ref={emailRef}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={formValues.password}
            autoComplete="on"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default LoginForm;
