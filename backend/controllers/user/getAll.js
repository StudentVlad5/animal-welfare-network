const { ValidationError } = require('../../helpers');
const { Users } = require('../../models');

const getUsers = async (req, res, next) => {
  try {
    const users = await Users.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};
module.exports = getUsers;
