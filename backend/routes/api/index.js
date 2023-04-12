const routerAuth = require('./auth');
const routerUser = require('./user');
const routerBreeds = require('./breed');
const location = require('./location');
const routerNews = require('./news');
const notices = require('./notices');
const pets = require('./pets');
const routerFriends = require('./friends');
const routerNotices = require('./notices');
const routerDevelopers = require('./developers');

module.exports = {
  routerBreeds,
  location,
  routerNews,
  notices,
  pets,
  routerFriends,
  routerAuth,
  routerNotices,
  routerUser,
  routerDevelopers,
};
