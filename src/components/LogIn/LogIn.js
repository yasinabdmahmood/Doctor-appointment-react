/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchDocThunk } from '../../redux/doctors/doctor';
import './LogIn.css';

function LogIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <>
      <form className="login-form" onSubmit={handleSubmit}>
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
      <Link to="/signup" type="button" className="btn btn-primary">SignUp</Link>
    </>
  );
}

export default LogIn;
