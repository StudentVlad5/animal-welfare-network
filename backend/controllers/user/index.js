const get = require('./get');
const getUserById = require('./getId');
const getUsers = require('./getAll');
const updateAvatar = require('./updateAvatar');
const updateUser = require('./updateUser');
const deleteUsers = require('./delete');

module.exports = {
  get,
  getUserById,
  getUsers,
  updateAvatar,
  updateUser,
  deleteUsers,
};
