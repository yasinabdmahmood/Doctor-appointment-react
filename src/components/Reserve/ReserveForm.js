import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAppThunk } from '../../redux/appointments/appointment';
import { fetchDocThunk } from '../../redux/doctors/doctor';
import './ReserveForm.css';

// const formReducer = (state, event) => ({
//   ...state,
//   [event.name]: event.value,
// });

const ReserveForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedDoctor = useSelector((state) => state.selectedDoc);
  const doctors = useSelector((state) => state.doctors);
  const [formData, setFormData] = useState({
    city: '',
    doctor_id: selectedDoctor || 1,
    date: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAppThunk(formData));
    navigate('/my-reservations');
  };

  const [submitting] = useState(false);

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchDocThunk());
    }
  }, []);

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
            <input name="city" value={formData.inputText} onChange={handleChange} />
          </label>
          <label>
            <p>Doctor</p>
            <select className="form-select select" name="doctor_id" value={formData.doctor_id} onChange={handleChange}>
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
          <label>
            <p>Date</p>
            <div>
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
          </label>
        </fieldset>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default ReserveForm;
