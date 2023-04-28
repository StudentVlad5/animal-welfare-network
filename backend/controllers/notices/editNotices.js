const { Notices } = require("../../models");

const editNotices = async (req, res, next) => {
  const { body, params, files } = req;
  const imagesObject = {};
  Object.values(files).forEach((e) => {
    imagesObject[e[0].fieldname] = e[0].path;
  });

  const { category } = params;
  const lower = category.toLowerCase();

  const fullData = { ...body, category: lower, owner: _id, ...imagesObject };

  const notices = await Notices.updateOne(body._id, fullData);
  res.status(201).json(notices);
};

module.exports = editNotices;
