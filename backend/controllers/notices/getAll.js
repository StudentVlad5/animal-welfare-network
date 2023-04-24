const { Notices } = require('../../models');
const { ValidationError } = require('../../helpers');

const getNotices = async (req, res, next) => {
  try {
    const notices = await Notices.find().sort({ createdAt: -1 });
    res.status(200).json(notices);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = getNotices;
