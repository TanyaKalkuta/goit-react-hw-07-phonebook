// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const changeFilter = createAction('contacts/changeFilter');
// const addContact = contact => dispatch => {
//   // const contact = { contact };
//   dispatch({ type: 'contacts/addRequest' });

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) =>
//       dispatch({ type: 'contacts/addContactSuccess', payload: data }),
//     )
//     .catch(error =>
//       dispatch({ type: 'contacts/addContactError', payload: error }),
//     );

// dispatch(fetchStart());

// fetch('some url')
//   .then(r => r.json())
//   .then(data => dispatch(fetchSuccess(data)))
//   .catch(err => dispatch(fetchFailure(err)));
// };

// const addContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

const deleteContact = createAction('contacts/delete');

// const changeFilter = createAction('contacts/changeFilter');

export {
  deleteContact,
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
