import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppThunk } from '../../redux/appointments/appointment';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservationdatas = useSelector((state) => state.reservationReducer);
  const userID = 1;
  const { reservations } = reservationdatas;

  useEffect(() => {
    dispatch(fetchAppThunk(userID));
  }, []);

  return (
    <section>
      <h2>My Reservations</h2>
      <ul>
        {
          reservations[0].map((item) => {
            const { name, city, date } = item.doctor;
            const { id } = item.reservation;
            return (
              <div key={id}>
                <h5>reservation</h5>
                <p>
                  reservation date:
                  {' '}
                  {date}
                </p>
                <p>
                  doctor name:
                  {' '}
                  {name}
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
