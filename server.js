var express = require("express");
var exphbs = require("express-handlebars")
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser")

// var axios = require("axios");
// var cheerio = require("cheerio");

var PORT = 3000;

var app = express();

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(router);

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"
mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection is successful")
    }
});

// app.get("/scrape", function(req, res) {
//     axios.get("https://www.nytimes.com/section/sports").then(function (response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);
//     // console.log(response.data)
//     var results = new Array();

//     $("article h2").each(function(i, element) {
//         //Save empty object result
//         var result = {};

//         result.title = $(this)
//         .children("a")
//         .text();

//         result.link = $(this)
//         .children("a")
//         .attr("href");

//         // db.Article.create(result)
//         // .then(function(dbArticle) {
//         //     console.log(dbArticle);
//         // })
//         // .catch(function(err) {
//         //     console.log(err);
//         // });
//     });

//     res.send("Scrape Complete!")
// });
// });

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
  });