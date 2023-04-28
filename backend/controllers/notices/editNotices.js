const { Notices } = require("../../models");

const editNotices = async (req, res, next) => {
  const { user, body, params, files } = req;
  console.log("user", user);
  console.log("body", body);
  console.log("params", params);
  const imagesObject = {};
  Object.values(files).forEach((e) => {
    imagesObject[e[0].fieldname] = e[0].path;
  });
  const id = params.id;
  const { _id } = user;
  const { category } = params;
  const lower = category.toLowerCase();

  const fullData = { ...body, category: lower, owner: _id, ...imagesObject };
  console.log("fullData", fullData);
  console.log("id", id);
  const notices = await Notices.findOneAndUpdate({id}, fullData, {
    new: true,
  });
  res.status(201).json(notices);
};

module.exports = editNotices;
