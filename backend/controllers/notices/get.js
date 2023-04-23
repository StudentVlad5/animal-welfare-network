const { Notices } = require("../../models");
const { ValidationError, constructorResponse } = require("../../helpers");

const get = async (req, res, next) => {
  try {
    const isPagination = req.query.page;
    const {
      search,
      isFavorites,
      myAdds,
      findtext,
      page = 1,
      perPage = isPagination ? 20 : 5000,
    } = req.query;
    const limit = perPage * 1;
    const skip = perPage * (page - 1);

    let filterConstructor = {};
    let { typeofpet, sex, size, sterilization, lives } = req.query;

    typeofpet == "" && typeofpet == undefined
      ? (filterConstructor.typeofpet = null)
      : (filterConstructor.typeofpet = typeofpet);
    sex == "" && sex == undefined
      ? (filterConstructor.sex = null)
      : (filterConstructor.sex = sex);
    size == "" && size == undefined
      ? (filterConstructor.size = null)
      : (filterConstructor.size = size);
    sterilization == "" && sterilization == undefined
      ? (filterConstructor.sterilization = null)
      : (filterConstructor.sterilization = sterilization);
    lives == "" && lives == undefined
      ? (filterConstructor.lives = null)
      : (filterConstructor.lives = lives);

    console.log("filterConstructor", filterConstructor);
    let arrayKeyFilter = "";
    Object.entries(filterConstructor).forEach(([key, value]) => {
      arrayKeyFilter += `${key}: ${value},`;
    });

    const category = req.params.category;

    let total = await Notices.find({ category }).count();
    let notices = [];
    const constructorData = {
      pagination: isPagination,
      total,
      perPage,
      // data: notices,
      page,
    };

    if (req.user) {
      const { _id, favorites } = req.user;

      if (category === "favorite") {
        if (findtext) {
          total = await Notices.find({
            _id: { $in: favorites },
            title: { $regex: findtext, $options: "i" },
          }).count();
          constructorData.total = total;

          notices = await Notices.find({
            _id: { $in: favorites },
            title: { $regex: findtext, $options: "i" },
          })
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 });
          return res
            .status(200)
            .json(constructorResponse(constructorData, notices));
        }
        total = await Notices.find({ _id: { $in: favorites } }).count();
        constructorData.total = total;
        notices = await Notices.find({ _id: { $in: favorites } })
          .limit(limit)
          .skip(skip)
          .sort({ createdAt: -1 });
        return res
          .status(200)
          .json(constructorResponse(constructorData, notices));
      }
      if (category === "own") {
        if (findtext) {
          total = await Notices.find({
            owner: _id,
            title: { $regex: findtext, $options: "i" },
          }).count();
          constructorData.total = total;
          notices = await Notices.find({
            owner: _id,
            title: { $regex: findtext, $options: "i" },
          })
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 });
          return res
            .status(200)
            .json(constructorResponse(constructorData, notices));
        }

        notices = await Notices.find({ owner: _id })
          .limit(limit)
          .skip(skip)
          .sort({ createdAt: -1 });

        return res
          .status(200)
          .json(constructorResponse(constructorData, notices));
      }
    }
    // if('lost-found' === category || 'for-free' === category ||) {

    // }

    if (findtext) {
      total = await Notices.find({
        category: category,
        title: { $regex: findtext, $options: "i" },
      }).count();
      constructorData.total = total;
      notices = await Notices.find({
        category: category,
        title: { $regex: findtext, $options: "i" },
      })
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: -1 });
      if (isPagination) {
        return res
          .status(200)
          .json(constructorResponse(constructorData, notices));
      }
      res.status(200).json(constructorResponse(constructorData, notices));
    } else {
      notices = await Notices.find({
        category: { $regex: category, $options: "i" },
      })
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: -1 });
      res.status(200).json(constructorResponse(constructorData, notices));
      console.log("notices", notices);
      console.log("category", category);
      console.log("constructorData", constructorData);
      console.log("arrayKeyFilter", arrayKeyFilter);
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid search characters" });
  }
};

module.exports = get;
