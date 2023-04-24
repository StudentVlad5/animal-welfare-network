import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  signUp,
  signIn,
  singOut,
  refreshUserToken,
  addToFavorite,
  removeFromFavorite,
  updateUserData,
} from 'services';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await signUp(credentials);
      setAuthHeader(data.data.authToken);
      return data;
    } catch (error) {
      alert(`Something wrong`, error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  '/auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await signIn(credentials);
      setAuthHeader(data.data.authToken);
      return data;
    } catch (error) {
      alert(`Something wrong`, error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await singOut('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const update = createAsyncThunk(
  '/update',
  async (updateData, thunkAPI) => {
    try {
      const result = await updateUserData(updateData);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await refreshUserToken('/auth');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addFavorite = createAsyncThunk(
  '/auth/addFavorite',
  async (id, thunkAPI) => {
    try {
      await addToFavorite(`${id}`); //notices/favorites/
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeFavorite = createAsyncThunk(
  '/auth/removeFavorite',
  async (id, thunkAPI) => {
    try {
      await removeFromFavorite(`${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
