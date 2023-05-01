const { Users } = require('../../models');
// const { userMainField, dataFilter } = require('../../helpers');

const updateUser = async (req, res, next) => {
  const { body, params } = req;
  const { id } = params;
  const resUpdate = await Users.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  });

  // const newResponse = dataFilter(resUpdate, userMainField);
  res.status(201).json(resUpdate);
};

module.exports = updateUser;
