const { Notices } = require('../../models');

const createNotices = async (req, res, next) => {
  const { user, body, params, files } = req;
  const imagesObject = {};
  Object.values(files).forEach(e => {
    imagesObject[e[0].fieldname] = e[0].path;
  });

  const { _id } = user;
  const { category } = params;
  const lower = category.toLowerCase();

  const fullData = { ...body, category: lower, owner: _id, ...imagesObject };

  const notices = await Notices.create(fullData);
  res.status(201).json(notices);
};

module.exports = createNotices;
