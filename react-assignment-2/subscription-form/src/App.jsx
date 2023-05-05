import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (age > 200) {
      alert("Invalid age");
    } else if (email === "" || password === "") {
      alert("Please enter email and password");
    } else {
      if (subscribe) {
        alert("You are subscribed");
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setSubscribe(checked);
    } else {
      switch (name) {
        case "name":
          setName(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "password":
          setPassword(value);
          break;
        case "age":
          setAge(value);
          break;
        case "gender":
          setGender(value);
          break;
        default:
          break;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Gender:
        <select name="gender" value={gender} onChange={handleInputChange}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Subscribe to email list:
        <input
          type="checkbox"
          name="subscribe"
          checked={subscribe}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
