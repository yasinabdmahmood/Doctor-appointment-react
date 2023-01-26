import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppThunk } from '../../redux/appointments/appointment';

const MyReservations = () => {
  const reservationdatas = useSelector((state) => state.appointments);
  const doctorsList = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  // const { id } = useParams(1);
  useEffect(() => {
    dispatch(fetchAppThunk());
  }, []);

  return (
    <section>
      <h2>My Reservations</h2>
      <ul>
        {
          reservationdatas.map((item) => {
            const { doctor_id, city, date } = item;
            const doctor = doctorsList.filter((doctor) => doctor.id === parseInt(id, 10));
            const name = doctor.name;
            return (
              <div key={doctor_id}>
                <h5>reservations</h5>
                <p>
                  reservation date:
                  {' '}
                  {date}
                </p>
                <p>
                  doctor name:
                  {' '}
                  { name }
                </p>
                <p>
                  doctor city:
                  {' '}
                  {city}
                </p>
              </div>
            );
          })
        }
      </ul>
    </section>
  );
};

export default MyReservations;
