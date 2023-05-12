import axios from 'axios';

export const signUp = async credentials => {
  try {
    const res = await axios.post('/auth/signup', credentials, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    });
    return res;
  } catch (error) {
    return error.message;
  }
};

export const signIn = async credentials => {
  try {
    const res = await axios.post('/auth/signin', credentials, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    });
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

export const refreshUserToken = async () => {
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
