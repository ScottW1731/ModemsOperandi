module.exports = function(app) {
    //landing page
    app.get("/", function(req, res) {
        res.render("index", { image_url: "http://localhost:8080/images/darkroom.jpg" });
    });
};
