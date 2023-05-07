const { ValidationError } = require('../../helpers');
const { Notices } = require('../../models');

const updateNotices = async (req, res, next) => {
  try {
    const { body, params } = req;
    const { id } = params;
    const fullData = { ...body };

    const notices = await Notices.findByIdAndUpdate({ _id: id }, fullData, {
      new: true,
    });
    res.status(201).json(notices);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateNotices;
