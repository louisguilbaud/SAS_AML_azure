var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node SAS DDC' });
});

router.get('/jsonDataViewer.html', function(req, res, next) {
  res.render('jsonDataViewer', { title: 'jsonDataViewer ddc' });
});

router.get('/google_OrgChart.html', function(req, res, next) {
  res.render('google_OrgChart', { title: 'google_OrgChart ddc' });
});

router.get('/d3_radialStackedBar.html', function(req, res, next) {
  res.render('d3_radialStackedBar', { title: 'd3_radialStackedBar ddc' });
});



module.exports = router;
