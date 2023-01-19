/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoc } from '../../redux/doctors/doctor';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoc()).then((data) => setDoctors(data));
  }, [dispatch]);

  return (
    <div>
      <h1>Doctor List</h1>
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <Link to={`/doctors/${doctor.id}`}>{doctor.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
