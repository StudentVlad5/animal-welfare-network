const { ValidationError, constructorResponse } = require("../helpers");
const { News } = require("../models");
const http = require("http");

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
  let data = "";
  try {
    const options = {
      hostname: `api.nytimes.com`,
      path: `/svc/search/v2/articlesearch.json?begin_date=20230401&end_date=20230502&facet=false&q=pet&sort=newest&api-key=${API_KEY}`,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    // Sending the request
    const req = https
      .request(options, (res) => {
        res.on("data", (chunk) => {
          data += chunk;
        });

        // Ending the response
        res.on("end", () => {
          console.log("Body:", JSON.parse(data));
        });
      })
      .on("error", (err) => {
        console.log("Error: ", err);
      })
      .end();

    // const total = await arrayNews.response.docs.length;
    const news = await JSON.parse(JSON.stringify(arrayNews));

    const constructorData = {
      pagination: isPagination,
      // total,
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
    return await res
      .status(200)
      .json(constructorResponse(constructorData, news));
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = news;
