import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeDocThunk } from '../../redux/doctors/doctor';
import './DeleteDoctorForm.css';

const DeleteDoctorForm = () => {
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeDocThunk(id));
  };

  return (
    <div className="delete-doctor-form">
      <h1>Delete Doctor</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name}
            <button type="button" onClick={() => handleDelete(doctor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteDoctorForm;
