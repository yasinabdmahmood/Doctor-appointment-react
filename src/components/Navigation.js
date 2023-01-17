/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/doctors">Doctors</Link>
    <Link to="/reserve">Reserve</Link>
    <Link to="/my-reservations">My Reservations</Link>
    <Link to="/add-doctor">Add Doctor</Link>
    <Link to="/delete-doctor">Delete Doctor</Link>
  </nav>
);

export default Navigation;
