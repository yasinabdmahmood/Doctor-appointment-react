import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './DoctorDetails.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctors);
  const selectedDoctor = doctors.find((doctor) => doctor.id === parseInt(id, 10));

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
    </div>
  );
};

export default DoctorDetails;
