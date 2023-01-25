import React, { useEffect, useReducer, useState } from 'react';
// import { DatePicker } from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux';
import { addDocThunk, fetchDocThunk } from '../../redux/doctors/doctor';

const formReducer = (state, event) => ({
  ...state,
  [event.name]: event.value,
});

function ReserveForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDocThunk());
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const doctor = {
      name: 'doctor.name', picture: 'doctor.picture', speciality: 'doctor.speciality', bio: 'doctor.bio',
    };
    dispatch(addDocThunk(doctor));
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  const handleChange = (event) => {
    const isStartDate = event.target.startDate === 'startDate';
    setFormData({
      name: event.target.name,
      value: isStartDate ? event.target.startDate : event.target.value,
    });
  };

  // const startDate = new Date();
  return (
    <div className="wrapper" style={{ position: 'absolute', right: '40px' }}>
      <h1>Reserve Doctors Appointment</h1>
      {submitting
       && (
       <div>
         You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}>
               <strong>{name}</strong>
               :
               {value.toString()}
             </li>
           ))}
         </ul>
       </div>
       )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>City</p>
            <input name="city" onChange={handleChange} />
          </label>
          <label>
            <p>Doctor</p>
            <select name="doctor" onChange={handleChange}>
              {doctors.map((doctor) => (
                <option
                  value={doctor.id}
                  key={doctor.id}
                >
                  {doctor.name}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ReserveForm;
