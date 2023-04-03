import axios from 'axios';

const initAxios = () => {
  axios.defaults.baseURL = `http://petsapi.cyclic.app/api/`;
};

export default initAxios;
