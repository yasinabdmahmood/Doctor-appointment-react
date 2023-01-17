/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';

const MyReservations = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const reservations = useSelector((state) => state.reservations);

  const userReservations = reservations.filter(
    (reservation) => reservation.username === currentUser.username,
  );

  return (
    <div>
      <h1>My Reservations</h1>
      {userReservations.map((reservation) => (
        <div key={reservation.id}>
          <p>
            Item:
            {' '}
            {reservation.itemName}
          </p>
          <p>
            Date:
            {' '}
            {reservation.date}
          </p>
          <p>
            City:
            {' '}
            {reservation.city}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyReservations;
