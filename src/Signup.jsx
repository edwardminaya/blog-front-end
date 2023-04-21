import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        localStorage.setItem("flashMessage", "User Created!");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setStatus(error.response.status);
        setErrors(error.response.data.errors);
      });
  };
  return (
    <div className="signup">
      <h1>Sign Up!</h1>
      {status ? <img src={`https://httpstatusdogs.com/img/${status}.jpg`} /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={name} onChange={(event) => setName(event.target.value)} name="name" type="text" />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div>
          email: <input name="email" type="email" />
        </div>
        <div>
          password: <input name="password" type="password" />
        </div>
        <div>
          password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
