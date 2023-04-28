const { Users } = require('../../models');
const {
  userMainField,
  userFieldReceivedFromFront,
  dataFilter,
} = require('../../helpers');

const updateAvatar = async (req, res, next) => {
  const newData = dataFilter(req.body, userFieldReceivedFromFront);
  req.file?.path && (newData.avatar = req.file.path);

  const resUpdate = await Users.findByIdAndUpdate(req.user._id, newData, {
    new: true,
  });
  const newResponse = dataFilter(resUpdate, userMainField);
  req.file?.path && (newResponse.avatar = req.file.path);

  res
    .status(200)
    .json({ code: 200, message: 'Successful operation', data: newResponse });
};

module.exports = updateAvatar;
