const { ValidationError } = require('../../helpers');
const { Notices } = require('../../models');

const updateNotices = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const files = req.files;
    const imagesObject = {};
    Object.values(files).forEach(e => {
      imagesObject[e[0].fieldname] = e[0].path;
    });
    const fullData = !files ? { ...body } : { ...body, ...imagesObject };
    const notices = await Notices.findByIdAndUpdate({ _id: id }, fullData, {
      new: true,
    });
    return res.status(201).json(notices);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateNotices;
