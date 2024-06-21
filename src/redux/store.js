import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';
// import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  redusers: {
    filter: filtersReducer,
    contact: contactsReducer,
  },
});
