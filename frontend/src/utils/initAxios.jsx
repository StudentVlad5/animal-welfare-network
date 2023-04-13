import axios from 'axios';

const initAxios = () => {
  axios.defaults.baseURL = 'https://animal-welfare-network.onrender.com/api';
};

export default initAxios;
