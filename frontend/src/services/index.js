import axios from 'axios';
import { refreshUser } from 'redux/auth/operations';
import { store } from 'redux/store';

axios.defaults.baseURL = `https://petsapi.cyclic.app/api`;

export * from './auth';

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject('Error: ', error);
  },
);

axios.interceptors.request.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(refreshUser());
    }
    return Promise.reject('Error: ', error);
  },
);
