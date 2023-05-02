const request = require('request');

function execute() {
  const options = {
    "url": `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20230401&end_date=20230502&facet=false&facet_fields=ingredients&page=1&q=pet&sort=newest&api-key=${process.env.API_KEY}`,
    "method": "GET",
    "headers": {
      "Accept": "application/json"
    }
  };
  request(options, function (err, res, body) {
    if (err) {
      console.error(err);
    }
    else {
      console.log(body);
    }
  });
}

module.exports = execute();