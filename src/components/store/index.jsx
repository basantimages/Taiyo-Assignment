import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal-slice';
import contactReducer from './contact-slice';
import coronaReducer from './corona-slice';

// ! Merging all reducers
const store = configureStore({
  reducer: {
    modals: modalReducer,
    contacts: contactReducer,
    coronaData: coronaReducer,
  },
});

export default store;
