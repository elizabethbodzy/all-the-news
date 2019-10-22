var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {
    var articlesArray = [];

    request("http://www.nytimes.com", function(err, res, body) {
    // request("http://www.nytimes.com", function(err, res, html) {

        var $ = cheerio.load(body);
        // var $ = cheerio.load(html);
        // console.log(body)

        // var articles = [];

        // $(".theme-summary").each(function(i, element) {
            $("h2.css-o2lisy").each(function(i, element) {
                var result = {};

                result.title = $(this).text();
                result.link = $(this).parent("div").parent("a").attr("href");

                if (result.title !== "" && result.link !== "") {
                    articlesArray.push(result);
                }

        });
        cb(articlesArray);
    });
};

module.exports = scrape;