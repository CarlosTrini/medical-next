import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/auth/authSlice';

const store = configureStore({
  reducer: {
    authReducer: authSlice
  }
});

export default store;