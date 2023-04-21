const { Notices } = require('../../models');
const { ValidationError } = require('../../helpers');

const getNotices = async (req, res, next) => {
  try {
    const notices = await Notices.find();
    res.status(200).json(notices);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = getNotices;
