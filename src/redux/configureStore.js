import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctor';
import appointmentReducer from './appointments/appointment';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    appointments: appointmentReducer,
  },
});

export default store;
