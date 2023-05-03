const { ValidationError, constructorResponse } = require("../helpers");
const { News } = require("../models");
const request = require("request");

const news = async (req, res, next) => {
  const { API_KEY } = process.env;
  const isPagination = req.query.page;
  let arrayNews = {};
  const {
    search = null,
    page = 1,
    perPage = isPagination ? 20 : 5000,
  } = req.query;
  // const limit = perPage * 1;
  // const skip = perPage * (page - 1);
  (function execute() {
    const options = {
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20230401&end_date=20230502&facet=false&facet_fields=ingredients&page=1&q=pet&sort=newest&api-key=${API_KEY}`,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    request(options, function (err, res, body) {
      if (err) {
        console.error(err);
      } else {
        arrayNews = JSON.parse(JSON.stringify(body));
        return arrayNews;
      }
    });
    return arrayNews;
  })();
  console.log("arrayNews: ", arrayNews);
  try {
    // const total = await News.find().count();
    // const total = search
    //   ? await News.find({ title: { $regex: search, $options: "i" } }).count()
    //   : await News.find().count();
    const total = await arrayNews.response.docs.length;
    const constructorData = {
      pagination: isPagination,
      total,
      perPage,
      // data: news,
      page,
    };
    if (search) {
      console.log("search: ", search);
      (function execute(arrayNews) {
        const options = {
          url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20230401&end_date=20230502&facet=false&facet_fields=ingredients&page=1&q=${search}&sort=newest&api-key=${API_KEY}`,
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        };
        request(options, function (err, res, body) {
          if (err) {
            console.error(err);
          } else {
            arrayNews = JSON.parse(JSON.stringify(body));
          }
        });
        return arrayNews;
      })();
      // const news = await News.find({
      //   title: { $regex: search, $options: "i" },
      // })
      //   .limit(limit)
      //   .skip(skip)
      //   .sort({ date: -1 });
      const news = JSON.parse(JSON.stringify(arrayNews));
      if (isPagination) {
        return res.status(200).json(constructorResponse(constructorData, news));
      }
      return res.status(200).json(news);
    }
    // console.log("limit: ", limit, "\tskip: ", skip);
    // const news = await News.find().limit(limit).skip(skip).sort({ date: -1 });
    const news = JSON.parse(JSON.stringify(arrayNews));
    // console.log("total", total);
    // console.log('news: ', news);
    // const constructorData = {
    //   pagination: isPagination,
    //   total,
    //   perPage,
    //   // data: news,
    //   page,
    // };
    res.status(200).json(constructorResponse(constructorData, news));
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = news;
