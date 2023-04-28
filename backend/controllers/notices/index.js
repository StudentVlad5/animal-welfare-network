const addFavorite = require('./addFavorite');
const createNotices = require('./create');
const get = require('./get');
const getId = require('./getId');
const getNotices = require('./getAll');
const deleteFavorite = require('./deleteFavorite');
const deleteNotices = require('./deleteNotices');
const updateNotices = require('./update');

module.exports = {
  createNotices,
  get,
  getId,
  getNotices,
  addFavorite,
  deleteFavorite,
  deleteNotices,
  updateNotices,
};
