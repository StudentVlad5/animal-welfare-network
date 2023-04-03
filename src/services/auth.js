import axios from 'axios';

export const signup = async credentials => {
  try {
    const res = await axios.post('/auth/signup', credentials);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const signin = async credentials => {
  try {
    const res = await axios.post('/auth/signin', credentials);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const singOut = async () => {
  const res = await axios.post('/auth/logout');
  return res;
};

export const updateUserData = async updateData => {
  const { data } = await axios.patch('/user', updateData);
  return data;
};

export const refreshUserTocken = async () => {
  const { data } = await axios.post('/auth');
  return data;
};

export const addToFavorite = async id => {
  try {
    await axios.post(`/notices/favorites/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};

export const removeFromFavorite = async id => {
  try {
    await axios.delete(`/notices/favorites/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
};
