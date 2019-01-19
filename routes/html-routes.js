module.exports = function(app) {
    //landing page
    app.get("/", function(req, res) {
        res.render("index", { image_url: "./public/images/darkroom.jpg" });
    });
};
