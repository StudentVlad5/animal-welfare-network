import { createSlice } from '@reduxjs/toolkit';

export const reloadSlice = createSlice({
  name: 'reload',
  initialState: {value: false},
  reducers: {
    addReload(state, action) {
      state.value = action.payload
    },
  },
});

export const { addReload } = reloadSlice.actions;