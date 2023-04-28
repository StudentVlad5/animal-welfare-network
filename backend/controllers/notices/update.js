const { Notices } = require('../../models');

const updateNotices = async (req, res, next) => {
  const { body, params } = req;
  const { id } = params;
  const fullData = { ...body };

  const notices = await Notices.findByIdAndUpdate({ _id: id }, fullData, {
    new: true,
  });
  res.status(201).json(notices);
};

module.exports = updateNotices;
