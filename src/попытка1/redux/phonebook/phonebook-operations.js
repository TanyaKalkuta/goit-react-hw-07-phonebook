import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  //   deleteContactRequest,
  //   deleteContactSuccess,
  //   deleteContactError,
} from './phonebook-action';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = contact => dispatch => {
  // const contact = { contact };
  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

// const deleteContact = id => dispatch => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };

export {
  addContact,
  // deleteContact,
  // fetchContacts
};
