const { ValidationError, constructorResponse } = require("../helpers");
const { News } = require("../models");
const axios = require("axios");

const news = async (req, res, next) => {
  const { API_KEY } = process.env;
  const isPagination = req.query.page;
  const {
    search = 'home+pet',
    page = 1,
    perPage = isPagination ? 20 : 5000,
  } = req.query;
  const today = new Date().toISOString().split('T')[0];
  const dateforSeart = today.split("-").join("");

  let arrayNews = [];
  try {
    const listNews = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20150101&end_date=${dateforSeart}&facet=false&page=100&q=${search}&sort=newest&api-key=${API_KEY}`
    );

    listNews.data.response.docs.map((key) =>
      arrayNews.push({
        abstract: key["abstract"],
        web_url: key["web_url"],
        snippet: key["snippet"],
        lead_paragraph: key["lead_paragraph"],
        pub_date: key["pub_date"],
      })
    );

    const constructorData = {
      pagination: isPagination,
      total: arrayNews.length,
      perPage,
      page,
    };

    //   if (isPagination) {
    //     return res.status(200).json(constructorResponse(constructorData, news));
    //   }
    //   return res.status(200).json(news);
    // }

    res.status(200).json(constructorResponse(constructorData, arrayNews));
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = news;
