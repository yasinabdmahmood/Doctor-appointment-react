const ADD_APP = 'doctorApp/appointments/ADD_APPOINTMENT';
const FETCH_APP = 'doctorApp/appointments/FETCH_APPOINTMENT';

const appointmentReducer = (state = intial, action) => {
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
      ]

    default:
      return state;
  }

};

export const fetchApp = (appointments) => ({
  type: FETCH_APP,
  payload: appointments,
});

export const fetchAppThunk = () => (dispatch) => fetch('appointmentsURL')
  .then((response) => response.json())
  .then((data) => {
    dispatch(fetchApp(data));
  });

export const addApp = (appointment) => ({
  type: ADD_APP,
  payload: appointment,
});

export const addAppThunk = (appointment) => (dispatch) => fetch('appointmentsURL',
  {
    method: 'POST',
    body: JSON.stringify({
      appointment
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
)
.then(() => {
  dispatch(addApp(appointment));
});

export default appointmentReducer;
