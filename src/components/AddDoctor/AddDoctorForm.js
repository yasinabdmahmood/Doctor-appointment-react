import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDoc } from '../../redux/doctors/doctor';

const AddDoctorForm = () => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDoc(name, specialization));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Specialization:
        <input
          type="text"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
      </label>
      <input type="submit" value="Add Doctor" />
    </form>
  );
};

export default AddDoctorForm;
