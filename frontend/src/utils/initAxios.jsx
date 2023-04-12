import axios from 'axios';

const initAxios = () => {
  const { BASE_URL } = window.global;
  axios.defaults.baseURL = `${BASE_URL}`;
};

export default initAxios;
