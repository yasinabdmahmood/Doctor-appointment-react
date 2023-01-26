import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchDocThunk } from '../../redux/doctors/doctor';

const DoctorsList = () => {
  const doctors = useSelector((state) => state.doctors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchDocThunk());
    }
  }, []);

  return (
    <section>
      <h1 className="text-center mt-5">Doctors list</h1>
      <p className="text-center text-muted mb-5">Please select a doctor</p>

      <div className="row px-5 py-5">
        {doctors.map((doctor) => (
          <div className="col-lg-4" key={doctor.id}>
            <NavLink to={`/doctors/${doctor.id}`} className="doctor-card">
              <img className="rounded-circle" src={doctor.picture} alt="Doctor" width="140" height="140" />
              <h2>{doctor.name}</h2>
              <p>{doctor.speciality}</p>
              <p>{doctor.bio}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsList;
