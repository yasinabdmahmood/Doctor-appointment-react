/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name, username, email, password,
    };

    axios
      .post('http://127.0.0.1:3000/users', data)
      .then(() => {
        const loginData = { email, password };
        axios
          .post('http://127.0.0.1:3000/auth/login', loginData)
          .then((res) => {
            sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('isAdmin', res.data.isAdmin);
            navigate('/');
          })
          .catch((err) => {
            console.log('Error making second API call: ', err);
          });
      })
      .catch((err) => {
        console.log('Error making API call: ', err);
      });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?
          {' '}
          <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
