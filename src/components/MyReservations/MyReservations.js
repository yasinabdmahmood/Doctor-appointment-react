import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppThunk } from '../../redux/appointments/appointment';
import { fetchDocThunk } from '../../redux/doctors/doctor';

const MyReservations = () => {
  const getDoctorNames = (state) => {
    const doctors = state.doctors;
    const reservations = state.appointments;
    const appointments = reservations.map((reservation)=>{
      return {
        ...reservation,
        name: doctors.filter((doctor)=> reservation.doctor_id === doctor.id )[0].name,
      }
      
    });
    console.log(appointments)
    return appointments
  }
  const reservationdatas = useSelector((state) => getDoctorNames(state));
  
  //const doctorsList = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  // const { id } = useParams(1);
  useEffect(() => {
    dispatch(fetchDocThunk());
    dispatch(fetchAppThunk());
  }, []);

  return (
    <section>
      <h2>My Reservations</h2>
      <ul>
        {
          reservationdatas.map((item) => {
            const { doctor_id, city, date, name } = item;
            // const doctor = doctorsList.filter((doctor) => doctor.id === doctor_id);
            // console.log(doctor[0].name)
            // const name = doctor[0].name;
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
