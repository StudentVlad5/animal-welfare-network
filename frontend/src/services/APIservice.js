import axios from 'axios';
import PropTypes from 'prop-types';

const { BASE_URL } = window.global;
async function fetchData(pathParams) {
  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${pathParams}`,
    headers: { 'Content-Type': 'application/json' },
  });

  return await axiosInstance.get();
}

async function fetchNotice(pathParams, body, file1, file2, file3) {
  const formData = new FormData();
  formData.append('birthday', body.birthday);
  formData.append('typeofpet', body.typeofpet);
  formData.append('breed', body.breed);
  formData.append('size', body.size);
  formData.append('height', body.height);
  formData.append('weight', body.weight);
  formData.append('passport', body.passport);
  formData.append('sterilization', body.sterilization);
  formData.append('lives', body.lives);
  formData.append('comments', body.comments);
  formData.append('imageUrl', file1);
  file2 && formData.append('imageUrl_1', file2);
  file3 && formData.append('imageUrl_2', file3);
  formData.append('location', body.location);
  formData.append('name', body.name);
  body.price !== '' && formData.append('price', body.price);
  body.currency !== '' && formData.append('currency', body.currency);
  formData.append('sex', body.sex);
  formData.append('title', body.title);

  return axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

async function fetchPetsUser(pathParams, body, file) {
  const formData = new FormData();
  formData.append('name', body.values.name);
  formData.append('date', body.values.data);
  formData.append('breed', body.values.breed);
  formData.append('comments', body.values.comments);
  formData.set('imageURL', file);

  return axios.post(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

async function deleteNoticeUser(pathParams) {
  const formData = new FormData();
  return axios.delete(`${BASE_URL}${pathParams}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

fetchData.propTypes = {
  pathParams: PropTypes.string.isRequired,
};

export { fetchData, fetchNotice, fetchPetsUser, deleteNoticeUser };
