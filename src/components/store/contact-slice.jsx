import { createSlice } from '@reduxjs/toolkit';

// !Initial state of contact slice
const initialState = {
  totalActive: 0,
  totalInActive: 0,
  contacts: {},
  contactToBeEdited: {
    id: '',
    fName: '',
    lName: '',
    isActive: '',
  },
};

// ! function to calculate total active and inavtive contacts
function totalCalulator(contacts) {
  let totalActive = 0;
  let ctr = 0;
  for (const key in contacts) {
    if (contacts[key].isActive === 'true') {
      totalActive++;
    }
    ctr++;
  }

  let totalInActive = ctr - totalActive;

  return [totalActive, totalInActive];
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, actions) {
      state.contacts[actions.payload.id] = actions.payload;
      const [totalActive, totalInActive] = totalCalulator(state.contacts);
      state.totalActive = totalActive;
      state.totalInActive = totalInActive;
      // console.log('added', totalActive, totalInActive);
    },
    editContact(state, actions) {
      state.contacts[actions.payload.id] = actions.payload;
      const [totalActive, totalInActive] = totalCalulator(state.contacts);
      state.totalActive = totalActive;
      state.totalInActive = totalInActive;
      // console.log('edited', totalActive, totalInActive);
    },
    removeContact(state, actions) {
      delete state.contacts[actions.payload];
      const [totalActive, totalInActive] = totalCalulator(state.contacts);
      state.totalActive = totalActive;
      state.totalInActive = totalInActive;
      // console.log('deleted', totalActive, totalInActive);
    },

    contactToBeEditedHandler(state, actions) {
      state.contactToBeEdited = {
        id: actions.payload.id || '',
        fName: actions.payload.fName || '',
        lName: actions.payload.lName || '',
        isActive: actions.payload.isActive || '',
      };
    },
  },
});

export default contactSlice.reducer;

export const contactActions = contactSlice.actions;
