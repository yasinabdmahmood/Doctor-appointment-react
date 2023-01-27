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

          <div className="col-sm-4" key={doctor.id}>
            <NavLink to={`/doctors/${doctor.id}`} className="list-group-item list-group-item-action text-center">

              <img className="rounded-circle" src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60" alt="Doctor" width="140" height="140" />
              <h2>{doctor.name}</h2>
              <p className="border-bottom pb-3 mb-1">{doctor.speciality}</p>
              <p>{doctor.bio}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsList;
