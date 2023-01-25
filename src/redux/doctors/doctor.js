import axios from 'axios';

const ADD_DOC = 'doctorApp/doctors/ADD_DOCTOR';
const FETCH_DOC = 'doctorApp/doctors/FETCH_DOC';
const REMOVE_DOC = 'doctorApp/doctors/REMOVE_DOCTOR';
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
    case REMOVE_DOC:
      return state.filter((doc) => doc.id !== action.payload);

    default:
      return state;
  }
};

export const fetchDoc = (doctors) => ({
  type: FETCH_DOC,
  payload: doctors,
});

export const fetchDocThunk = () => (dispatch) => {
  axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
  return axios.get('http://127.0.0.1:3000/doctors')
    .then((response) => {
      dispatch(fetchDoc(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addDoc = (doctor) => ({
  type: ADD_DOC,
  payload: doctor,
});

export const addDocThunk = (doctor) => (dispatch) => {
  axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
  return axios.post('http://127.0.0.1:3000/doctors',
    {
      name: doctor.name, picture: doctor.picture, speciality: doctor.speciality, bio: doctor.bio,
    })
    .then((response) => {
      dispatch(addDoc(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const removeDoc = (doctor) => ({
  type: REMOVE_DOC,
  payload: doctor,
});

export const removeDocThunk = (doctor) => (dispatch) => {
  axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
  return axios.delete(`http://127.0.0.1:3000//doctors/${doctor.id}`)
    .then(() => {
      dispatch(removeDoc(doctor.id));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default doctorReducer;
