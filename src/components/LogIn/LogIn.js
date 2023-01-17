import React, { useState } from "react";
import axios from "axios";

function LogIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:3000/auth/login", formData)
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("isAdmin", response.data.isAdmin);
        console.log(response.data.token)
        console.log(response.data.isAdmin)
        // navigate to protected page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export default LogIn;