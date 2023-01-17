/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DoctorList from './pages/doctors/DoctorList';
import DoctorDetail from './pages/doctors/DoctorDetails';
import ReserveForm from './components/Reserve/ReserveForm';
import MyReservations from './pages/reserve/MyReservations';
import AddDoctorForm from './components/AddDoctor/AddDoctorForm';
import DeleteDoctorForm from './components/DeleteDoctor/DeleteDoctorForm';
import LogIn from './pages/SignUp/LogIn';
import SignUp from './pages/SignUp/SignUp';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" exact element={<DoctorList />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
      <Route path="/reserve" component={ReserveForm} />
      <Route path="/my-reservations" component={MyReservations} />
      <Route path="/add-doctor" component={AddDoctorForm} />
      <Route path="/delete-doctor" component={DeleteDoctorForm} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Routes>

  </>
);

export default App;
