const ADD_DOC = 'doctorApp/doctors/ADD_DOCTOR';
const FETCH_DOC = 'doctorApp/doctors/FETCH_DOC';
const initial = [];

const doctorReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_DOC:
      return [
        ...state,
        ...action.payload,
      ];
    case ADD_DOC:
      return [
        ...state,
        action.payload,
      ];

    default:
      return state;
  }
};

export const fetchDoc = (doctors) => ({
  type: FETCH_DOC,
  payload: doctors,
});

export const fetchDocThunk = () => (dispatch) => fetch('doctorsURL')
  .then((response) => response.json())
  .then((data) => {
    dispatch(fetchDoc(data));
  });

export const addDoc = (doctor) => ({
  type: ADD_DOC,
  payload: doctor,
});

export const addDocThunk = (doctor) => (dispatch) => fetch('doctorsURL',
  {
    method: 'POST',
    body: JSON.stringify({
      doctor,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(() => {
    dispatch(addDoc(doctor));
  });

export default doctorReducer;
