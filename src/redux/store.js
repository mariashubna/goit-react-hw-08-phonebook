import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contacts/contactsSlice';
import { filterReducer } from '../redux/contacts/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export { store };