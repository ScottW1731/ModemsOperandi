// var path = require("path");


module.exports = function(app) {
    //landing page
    app.get("/", function(req, res) {
        var reqPath = req.protocol + '://' + req.get('host');
        res.render("index", { 
            main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg",
            image_url: reqPath + "/images/darkroom.jpg"});
    });
};
