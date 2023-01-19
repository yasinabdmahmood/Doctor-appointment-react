/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    setDoctor(doctors.find((doc) => doc.id === id));
  }, [doctors, id]);

  return (
    <div>
      <h1>{doctor.name}</h1>
      <p>
        Specialization:
        {' '}
        {doctor.specialization}
      </p>
      <button onClick={() => handleReserve()}>Reserve</button>
    </div>
  );
};

export default DoctorDetail;
