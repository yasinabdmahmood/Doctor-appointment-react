/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import style from './Navigation.css';
import logo from '../../assets/images/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (width <= 600) {
      setIsOpen(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      {width <= 600 && (
        <div
          role="button"
          aria-label="Open hamburger menu"
          className={`hamburger-menu ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          onKeyPress={handleKeyPress}
        >
          <span />
          <span />
          <span />
        </div>
      )}
      <ul className={`sidebar-nav ${isOpen ? 'open' : ''}`}>
        <li className="nav-item"><Link to="/">Doctors</Link></li>
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
        <p className="fw-light">
          Copyright ©
          {' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Navigation;
