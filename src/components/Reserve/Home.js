import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const doctordatas = useSelector((state) => state.doctorReducer);
  const { doctors } = doctordatas;
  
  return (
    <section className={styles['doctors-section']}>
      <h2 className={styles.title}>Hello Welcome to Doctors Dashob</h2>
      <h3 className={styles['sous-title']}>List of your favourite Doctors</h3>
      <div className={styles.points}>.........................</div>
      <ul className={styles['doctor-lists']}>
        {
        doctors.slice(0, 5).map((item) => {
          const {
            name, picture, email, id,
          } = item.doctor;
          return (
            <li className={styles.list} key={id}>
              <div className={styles['doctor-img']}>
                <img src={picture} alt={item.name} />
              </div>
              <h5 className={styles.name}>{name}</h5>
              <p className={styles.email}>{email}</p>
              <div className={styles.points}>.........................</div>
              <Link to={`/user/doctors/${id}`} onClick={() => dispatch(singleDoctor(id))}>
                <button type="button">View Doctor</button>
              </Link>
            </li>
          );
        })
      }
      </ul>
    </section>
  );
};

export default Home;
