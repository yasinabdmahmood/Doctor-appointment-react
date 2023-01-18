import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocThunk } from '../../redux/doctors/doctor';

const DoctorsList = () => {
  const doctors = useSelector((store) => store.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDocThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Doctors list</h1>
      {
        doctors.map((doc) => (
          <p key={doc.id}>{doc.name}</p>
        ))
      }
    </div>
  );
};

export default DoctorsList;
