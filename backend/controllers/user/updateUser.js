const { ValidationError } = require('../../helpers');
const { Users } = require('../../models');
// const { userMainField, dataFilter } = require('../../helpers');

const updateUser = async (req, res, next) => {
  try {
    const { body, params } = req;
    const { id } = params;
    const fullData = { ...body };

    const resUpdate = await Users.findByIdAndUpdate({ _id: id }, fullData, {
      new: true,
    });

    // const newResponse = dataFilter(resUpdate, userMainField);
    res.status(201).json(resUpdate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateUser;
