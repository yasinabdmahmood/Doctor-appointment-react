import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDocThunk } from '../../redux/doctors/doctor';

const AddDoctorForm = () => {
  const dispatch = useDispatch();

  const initial = {
    name: '',
    speciality: '',
    picture: '',
    bio: '',
  };

  const [state, setState] = useState(initial);

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDocThunk(state));
    e.target.reset();
  };

  return (
    <div className="pr-5">
      <h1>Add doctor form</h1>
      <form className="px-4 pr-5" onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <label htmlFor="exampleInputEmail1">Doctors full name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name" onChange={handleChange} />
        </div>
        <div className="form-group my-4">
          <label htmlFor="exampleInputPassword1">Speciality</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter speciality" name="speciality" onChange={handleChange} />
        </div>
        <div className="form-group my-4">
          <label htmlFor="exampleInputPassword1">Picture link</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter link to doctors picture" name="picture" onChange={handleChange} />
        </div>
        <div className="form-group my-4">
          <label htmlFor="exampleFormControlTextarea1">Bio</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="bio" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
