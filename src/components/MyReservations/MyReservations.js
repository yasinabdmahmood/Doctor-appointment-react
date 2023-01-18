import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppThunk } from '../../redux/appointments/appointment';

const MyReservations = () => {
  const appointments = useSelector((store) => store.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>My reservations</h1>

      {appointments.map((appointment) => (
        <p key={appointment.id}>{appointment.city}</p>
      ))}
    </div>
  );
};

export default MyReservations;
