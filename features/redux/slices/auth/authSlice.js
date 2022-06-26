import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { authInitState } from './authState';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  reducers: {
    logInAct: (state, action) => {
      console.log('iniciando login...');
    },
  },
  extraReducers: {},
});

export const { logInAct } = authSlice.actions;
export default authSlice.reducer;
