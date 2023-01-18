/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
// import logo from './logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar">
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </div>
      <ul className={`sidebar-nav ${isOpen ? 'open' : ''}`}>
        <li className="nav-item"><Link to="/doctors">Doctors</Link></li>
        <li className="nav-item"><Link to="/reserve">Reserve</Link></li>
        <li className="nav-item"><Link to="/my-reservations">My Reservations</Link></li>
        <li className="nav-item"><Link to="/add-doctor">Add Doctor</Link></li>
        <li className="nav-item"><Link to="/delete-doctor">Delete Doctor</Link></li>
      </ul>
    </div>
  );
};

export default Navigation;
