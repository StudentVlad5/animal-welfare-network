const { ValidationError } = require('../helpers');
const { Developers } = require('../models');

const developers = async (req, res, next) => {
  try {
    const developers = await Developers.find();
    res.status(200).json(developers);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = developers;
