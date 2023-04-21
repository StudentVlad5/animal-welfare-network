const routerAuth = require('./auth');
const routerAdmin = require('./admin');
const routerUser = require('./user');
const routerBreeds = require('./breed');
const location = require('./location');
const routerNews = require('./news');
const routerPets = require('./pets');
const routerFriends = require('./friends');
const routerNotices = require('./notices');
const routerDevelopers = require('./developers');

module.exports = {
  routerBreeds,
  location,
  routerNews,
  routerPets,
  routerFriends,
  routerAuth,
  routerNotices,
  routerUser,
  routerAdmin,
  routerDevelopers,
};
