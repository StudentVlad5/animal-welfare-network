const { ValidationError, constructorResponse } = require("../helpers");
const { News } = require("../models");
const request = require("request");

const news = async (req, res, next) => {
  const { API_KEY } = process.env;
  const isPagination = req.query.page;
  let arrayNews;
  const {
    search = null,
    page = 1,
    perPage = isPagination ? 20 : 5000,
  } = req.query;
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
      // console.log(JSON.parse(JSON.stringify(body)));
      arrayNews = JSON.parse(JSON.stringify(body));
      // const total = arrayNews.response.["docs"].length;
      console.log(arrayNews.response)
      const constructorData = {
        pagination: isPagination,
        // total,
        perPage,
        // data: news,
        page,
      };
      //   if (search) {
      //   console.log("search: ", search);
      //   const news = JSON.parse(JSON.stringify(arrayNews));
      //   if (isPagination) {
      //     return res.status(200).json(constructorResponse(constructorData, news));
      //   }
      //   return res.status(200).json(news);
      // }

      res.status(200).json(constructorResponse(constructorData, arrayNews));
    }
  });
};

module.exports = news;
