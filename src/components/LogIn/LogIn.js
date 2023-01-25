/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LogIn.css';

function LogIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://127.0.0.1:3000/auth/login', formData)
      .then((response) => {
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('isAdmin', response.data.isAdmin);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input type="email" placeholder="Email" required value={formData.email} onChange={handleChange} name="email" />
        <input type="password" placeholder="Password" required value={formData.password} onChange={handleChange} name="password" />
        <button type="submit">Log In</button>
        <p>
          Don't have an account?
          {' '}
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
