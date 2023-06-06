import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import invoicesReducer from '../features/counter/invoiveSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    invoices: invoicesReducer,
  },
});
