const { Users } = require('../../models');

const deleteUsers = async (req, res, next) => {
  try {
    const { user, params } = req;
    const _id = params.id;

    const users = await Users.deleteOne({ _id });
    if (users.deletedCount === 0) {
      return res.status(400).json({ message: `Bad request (id incorrect)` });
    }
    res.json({ message: 'Success deleted' });
  } catch (error) {
    res.status(400).json({ message: `Bad request (id incorrect)` });
  }
};

module.exports = deleteUsers;
