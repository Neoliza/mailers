import { configureStore } from '@reduxjs/toolkit';
import mailersReducer from './features/mailers/mailersSlice';

export default configureStore({
  reducer: {
    mailers: mailersReducer,
  },
})