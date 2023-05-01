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

    if (typeofpet !== "" && typeofpet !== undefined) {
      filterConstructor.typeofpet = typeofpet;
    }
    if (sex !== "" && sex !== undefined) {
      filterConstructor.sex = sex;
    }
    if (size !== "" && size !== undefined) {
      filterConstructor.size = size;
    }
    if (sterilization !== "" && sterilization !== undefined) {
      filterConstructor.sterilization = sterilization;
    }
    if (lives !== "" && lives !== undefined) {
      filterConstructor.lives = lives;
    }

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
          filterConstructor.comments = { $regex: findtext, $options: "i" };
          filterConstructor._id = { $in: favorites };
          total = await Notices.find({ ...filterConstructor }).count();
          constructorData.total = total;

          notices = await Notices.find({ ...filterConstructor })
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 });
          return res
            .status(200)
            .json(constructorResponse(constructorData, notices));
        }
        filterConstructor._id = { $in: favorites };
        total = await Notices.find({ ...filterConstructor }).count();
        constructorData.total = total;
        notices = await Notices.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ createdAt: -1 });
        return res
          .status(200)
          .json(constructorResponse(constructorData, notices));
      }
      if (category === "own") {
        if (findtext) {
          filterConstructor.comments = { $regex: findtext, $options: "i" };
          filterConstructor.owner = _id;
          total = await Notices.find({ ...filterConstructor }).count();
          constructorData.total = total;
          notices = await Notices.find({ ...filterConstructor })
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 });
          return res
            .status(200)
            .json(constructorResponse(constructorData, notices));
        }

        filterConstructor.owner = _id;
        notices = await Notices.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ createdAt: -1 });

        return res
          .status(200)
          .json(constructorResponse(constructorData, notices));
      }
    }

    if (findtext) {
      filterConstructor.category = category;
      filterConstructor.comments = { $regex: findtext, $options: "i" };
      total = await Notices.find({
        ...filterConstructor,
      }).count();
      constructorData.total = total;
      notices = await Notices.find({
        ...filterConstructor,
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
      filterConstructor.category = { $regex: category, $options: "i" };
      total = await Notices.find({ ...filterConstructor }).count();
      constructorData.total = total;
      notices = await Notices.find({ ...filterConstructor })
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: -1 });
      res.status(200).json(constructorResponse(constructorData, notices));
      console.log("filterConstructor", filterConstructor);
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid search characters" });
  }
};

module.exports = get;
