const Pet = require('./petModel');
const News = require('./news');
const Breed = require('./breeds');
const Friends = require('./friends');
const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
} = require('./users');
const Notices = require('./notices');
const Developers = require('./developers');

module.exports = {
  Breed,
  News,
  Friends,
  Pet,
  Users,
  Notices,
  userValidationSchema,
  userUpdateValidationSchema,
  Developers,
};
