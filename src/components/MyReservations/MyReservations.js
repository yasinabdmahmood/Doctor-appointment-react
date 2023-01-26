/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppThunk } from '../../redux/appointments/appointment';
import { fetchDocThunk } from '../../redux/doctors/doctor';
import './MyReservations.css';

const MyReservations = () => {
  const getDoctorNames = (state) => {
    const { doctors } = state;
    const reservations = state.appointments;
    const appointments = reservations.map((reservation) => ({
      ...reservation,
      name: doctors.filter((doctor) => reservation.doctor_id === doctor.id)[0].name,
    }));
    console.log(appointments);
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
      <h2>My Reservations</h2>
      <ul>
        {
          reservationdatas.map((item) => {
            const {
              doctor_id, city, date, name,
            } = item;
            // const doctor = doctorsList.filter((doctor) => doctor.id === doctor_id);
            // console.log(doctor[0].name)
            // const name = doctor[0].name;
            return (
              <div className="reservation-list" key={doctor_id}>
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
