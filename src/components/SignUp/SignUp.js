import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, username, email, password };

    axios
      .post("http://127.0.0.1:3000/users", data)
      .then((res) => {
        const loginData = { email, password };
        axios
          .post("http://127.0.0.1:3000/auth/login", loginData)
          .then((res) => {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("isAdmin", res.data.isAdmin);
            console.log(res.data.token)
            console.log(res.data.isAdmin)
          })
          .catch((err) => {
            console.log("Error making second API call: ", err);
          });
      })
      .catch((err) => {
        console.log("Error making API call: ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;