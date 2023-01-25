import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctor';
import appointmentReducer from './appointments/appointment';
import selectDocReducer from './selectedDoctor/selectedDoctor'

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    appointments: appointmentReducer,
    selectedDoc: selectDocReducer,
  },
});

export default store;
