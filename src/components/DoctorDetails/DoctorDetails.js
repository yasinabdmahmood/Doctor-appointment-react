import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {selectDoc} from '../../redux/selectedDoctor/selectedDoctor'
import './DoctorDetails.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selectedDoctor = doctors.find((doctor) => doctor.id === parseInt(id, 10));
  const handleClick = () => {
    dispatch(selectDoc(id))
    navigate('/reserve')
  }
  if (!selectedDoctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="doctor-details-container">
      <div className="doctor-thumbnail-container">
        <img
          src={selectedDoctor.picture}
          alt={selectedDoctor.name}
          className="doctor-thumbnail"
        />
      </div>
      <div className="doctor-info">
        <h2 className="doctor-name">{selectedDoctor.name}</h2>
        <p className="doctor-speciality">
          Speciality:
          {' '}
          {selectedDoctor.speciality}
        </p>
        <p className="doctor-bio">{selectedDoctor.bio}</p>
      </div>
      <button type='button' onClick={handleClick}>Make reservation</button>
    </div>
  );
};

export default DoctorDetails;
