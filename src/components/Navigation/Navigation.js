/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import style from './Navigation.css';
import logo from '../../assets/images/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (width <= 600) {
      setIsSidebarOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isSidebarOpen ? 'open' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <div
        role="button"
        aria-label="Open sidebar menu"
        className={`hamburger-menu ${width <= 600 ? 'open' : ''}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onKeyPress={handleKeyPress}
      >
        <span />
        <span />
        <span />
      </div>
      <ul className={`sidebar-nav ${isOpen ? 'open' : ''} ${isSidebarOpen ? 'open' : ''}`}>
        <li className="nav-item"><Link to="/doctors">Doctors</Link></li>
        <li className="nav-item"><Link to="/reserve">Reserve</Link></li>
        <li className="nav-item"><Link to="/my-reservations">My Reservations</Link></li>
        <li className="nav-item"><Link to="/add-doctor">Add Doctor</Link></li>
        <li className="nav-item"><Link to="/delete-doctor">Delete Doctor</Link></li>
      </ul>
      <div className="sidebar-footer">
        <IconContext.Provider value={{ color: '#98be0f' }}>
          <ul className={`${style.social} social-icons`}>
            <li>
              <a
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaIcons.FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" rel="noreferrer" target="_blank">
                <FaIcons.FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FaIcons.FaPinterestP />
              </a>
            </li>
            <li>
              <a href="https://www.medium.com/" rel="noreferrer" target="_blank">
                <FaIcons.FaMediumM />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
        <p className="fw-light mt-3 text-center">
          &copy; 2023, Doctor Appointment.
        </p>
      </div>
    </div>
  );
};

export default Navigation;
