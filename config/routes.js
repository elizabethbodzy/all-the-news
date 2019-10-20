module.exports = function(router) {
    //route to render homepage
    router.get("/", function(req, res) {
        res.render("home");
    });
    //route to render saved handlebars page
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}