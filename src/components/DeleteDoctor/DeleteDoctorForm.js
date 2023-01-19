/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeDoc } from '../../redux/doctors/doctor';

const DeleteDoctorForm = () => {
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeDoc(id));
  };

  return (
    <div>
      <h1>Delete Doctor</h1>
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <p>{doctor.name}</p>
          <button onClick={() => handleDelete(doctor.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteDoctorForm;
