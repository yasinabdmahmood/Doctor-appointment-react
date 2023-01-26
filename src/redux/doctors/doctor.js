/* eslint-disable no-console */
import axios from 'axios';

const ADD_DOC = 'doctorApp/doctors/ADD_DOCTOR';
const FETCH_DOC = 'doctorApp/doctors/FETCH_DOC';
const REMOVE_DOC = 'doctorApp/doctors/REMOVE_DOCTOR';
const initial = [];

const doctorReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_DOC:
      return [
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
  return axios.get('https://doctor-appointment-hbcv.onrender.com/doctors')
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
  return axios.post('https://doctor-appointment-hbcv.onrender.com/doctors',
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

export const removeDoc = (id) => ({
  type: REMOVE_DOC,
  payload: id,
});

export const removeDocThunk = (id) => (dispatch) => {
  axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
  return axios.delete(`https://doctor-appointment-hbcv.onrender.com/doctors/${id}`)
    .then(() => {
      dispatch(removeDoc(id));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default doctorReducer;
