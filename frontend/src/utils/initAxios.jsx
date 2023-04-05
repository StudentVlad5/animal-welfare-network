import axios from 'axios';

const initAxios = () => {
  axios.defaults.baseURL = `http://localhost:3030/api/`;
};

export default initAxios;
