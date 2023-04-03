import { createSlice } from '@reduxjs/toolkit';

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState: {value: []},
  reducers: {
    addBreeds(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addBreeds } = breedsSlice.actions;