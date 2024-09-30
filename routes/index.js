var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/IFrame_visualization.html", function (req, res, next) {
	res.render("IFrame_visualization", { title: "IFrame_visualization ddc" });
});

router.get("/jobCalibrationScen2D.html", function (req, res, next) {
	res.render("jobCalibrationScen2D", { title: "jobCalibrationScen2D ddc" });
});

router.get("/test.html", function (req, res, next) {
	res.render("test", { title: "test ddc" });
});
module.exports = router;
