/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppThunk } from '../../redux/appointments/appointment';
import { fetchDocThunk } from '../../redux/doctors/doctor';
import './MyReservations.css';

function generateUUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const MyReservations = () => {
  const getDoctorNames = (state) => {
    const { doctors } = state;
    const reservations = state.appointments;
    const appointments = reservations.map((reservation) => ({
      ...reservation,
      name: doctors.filter((doctor) => reservation.doctor_id === doctor.id)[0].name,
    }));
    return appointments;
  };
  const reservationdatas = useSelector((state) => getDoctorNames(state));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDocThunk());
    dispatch(fetchAppThunk());
  }, []);

  return (
    <section className="reservation-wrapper">
      <h2 className="text-center">My Reservations</h2>
      <ul>
        {
          reservationdatas.map((item) => {
            const {
              city, date, name,
            } = item;
            return (
              <div className="card m-5" key={generateUUID()}>
                <p className="reservation">
                  reservation date:
                  {' '}
                  {date}
                </p>
                <p className="reservation">
                  doctor name:
                  {' '}
                  { name }
                </p>
                <p className="reservation">
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
