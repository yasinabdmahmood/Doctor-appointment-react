import axios from 'axios';

const ADD_APP = 'doctorApp/appointments/ADD_APPOINTMENT';
const FETCH_APP = 'doctorApp/appointments/FETCH_APPOINTMENT';
const initial = [];

const appointmentReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_APP:
      return [
        ...state,
        ...action.payload,
      ];
    case ADD_APP:
      return [
        ...state,
        action.payload,
      ];

    default:
      return state;
  }
};

export const fetchApp = (appointments) => ({
  type: FETCH_APP,
  payload: appointments,
});

export const fetchAppThunk = () => (dispatch) => {
  axios.defaults.headers.common.Authorization = `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NzQ1MDkwODB9.X37qH49KPfjQKqlH745Ezw-sycLKUabDymrvaY-zxdM'}`;
  axios.get('http://127.0.0.1:3000/reservations')
    .then((response) => {
      dispatch(fetchApp(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addApp = (appointment) => ({
  type: ADD_APP,
  payload: appointment,
});

export const addAppThunk = (appointment) => (dispatch) => {
  axios.defaults.headers.common.Authorization = `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NzQ1MDkwODB9.X37qH49KPfjQKqlH745Ezw-sycLKUabDymrvaY-zxdM'}`;
  axios.post('http://127.0.0.1:3000/reservations', { date: appointment.date, city: appointment.city, doctor_id: appointment.doctor_id })
    .then((response) => {
      dispatch(addApp(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default appointmentReducer;
