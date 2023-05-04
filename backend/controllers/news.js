const { ValidationError, constructorResponse } = require("../helpers");
const { News } = require("../models");
const axios = require("axios");

// const execute = async() => {
//     const options = {
//     "url": "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20230401&end_date=20230502&facet=false&q=pet&sort=newest&api-key=[YOUR_API_KEY]",
//     "method": "GET",
//     "headers": {
//       "Accept": "application/json"
//     }
//   };
//   request(options, function (err, res, body) {
//     if (err) {
//       console.error(err);
//     }
//     else {
//      return body;
//     }
//   });
// }

const news = async (req, res, next) => {
  const { API_KEY } = process.env;
  const isPagination = req.query.page;
  const {
    search = null,
    page = 1,
    perPage = isPagination ? 20 : 5000,
  } = req.query;
  let arrayNews = [];
  try {
    // const options = {
    //   hostname: `api.nytimes.com`,
    //   path: `/svc/search/v2/articlesearch.json?begin_date=20230401&end_date=20230502&facet=false&q=pet&sort=newest&api-key=${API_KEY}`,
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //   },
    // };
    // Sending the request
    const listNews = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20230401&end_date=20230502&facet=false&q=home+pet&sort=newest&api-key=${API_KEY}`
    );

    listNews.data.response.docs.map(key=>arrayNews.push({"abstract":key["abstract"], "web_url":key["web_url"], "snippet":key["snippet"], "lead_paragraph":key["lead_paragraph"]}));
    console.log("arrayNews",  arrayNews);
    
    
    const constructorData = {
      pagination: isPagination,
      total : arrayNews.length,
      perPage,
      // data: news,
      page,
    };

    // if (search) {
    //   console.log("search: ", search);
    //   const news = JSON.parse(JSON.stringify(arrayNews));
    //   if (isPagination) {
    //     return res.status(200).json(constructorResponse(constructorData, news));
    //   }
    //   return res.status(200).json(news);
    // }
    res
      .status(200)
      .json(constructorResponse(constructorData, arrayNews));

  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = news;
