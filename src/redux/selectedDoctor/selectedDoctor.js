/* eslint-disable no-console */

const SELECTED_DOC = 'doctorApp/doctors/SELECTED_DOC';
const initial = null;

const selectDocReducer = (state = initial, action) => {
  switch (action.type) {
    case SELECTED_DOC:
      return action.payload;
    default:
      return state;
  }
};

export const selectDoc = (doctors_id) => ({
  type: SELECTED_DOC,
  payload: doctors_id,
});



export default selectDocReducer;
