import axios from 'axios';

const initAxios = () => {

  axios.defaults.baseURL = "https://animal-welfare-network.cyclic.app/api";
};

export default initAxios;
