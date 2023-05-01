const { Users } = require('../../models');
// const { userMainField, dataFilter } = require('../../helpers');

const getUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await Users.findById({ _id: id });
    // const newResponse = dataFilter(user, userMainField);
    res.status(200).json(user);
  } catch (error) {
    throw new WrongIdError(error.message);
  }
};

module.exports = getUserById;
