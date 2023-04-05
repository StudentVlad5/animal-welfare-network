import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  addFavorite,
  removeFavorite,
  update,
} from './operations';

const initialState = {
  user: {
    userName: null,
    email: null,
    location: null,
    phone: null,
    favorites: null,
    _id: null,
    birthday: null,
    avatarUrl: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: null,
  isRefreshing: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload.data.authToken) {
          state.user = action.payload.data;
          state.token = action.payload.data.authToken;
          state.isLoggedIn = true;
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.data.authToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(update.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        state.isError = null;
      })
      .addCase(update.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user; //data

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(addFavorite.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.user.favorites = [...state.user.favorites, payload];
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(addFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(removeFavorite.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(removeFavorite.fulfilled, (state, { payload }) => {
        state.user.favorites = state.user.favorites.filter(
          _id => _id !== payload,
        );
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(removeFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
