const { Notices } = require("../../models");

const editNotices = async (req, res, next) => {
  // const { user, body, params, files } = req;
  // console.log("req", req);
  // console.log("user", user);
  console.log("body", req.body);
  console.log("params", req.params);
  // const imagesObject = {};
  // Object.values(files).forEach((e) => {
  //   imagesObject[e[0].fieldname] = e[0].path;
  // });
  const { _id } = req.params;
  const body = req.body;
  // const { _id } = user;
  // const { category } = params;
  // const lower = category.toLowerCase();

  const fullData = {
    ...body,
    // category: lower,
    // owner: _id,
    // ...imagesObject,
  };
  console.log("fullData", fullData);
  console.log("id", id);
  const notices = await Notices.findByIdAndUpdate({ _id }, fullData, {
    new: true,
  });
  if (notices) {
    return res.status(201).json(notices);
  } else {
    const error = new Error(`pet whith id = ${id} not found`);
    error.status = 404;
    throw error;
  }
};

module.exports = editNotices;
