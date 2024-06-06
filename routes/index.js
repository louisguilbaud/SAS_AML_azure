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

router.get('/google_Calendar.html', function(req, res, next) {
  res.render('google_Calendar', { title: 'google_Calendar ddc' });
});


router.get('/d3_radialStackedBar.html', function(req, res, next) {
  res.render('d3_radialStackedBar', { title: 'd3_radialStackedBar ddc' });
});

router.get('/d3_NetworkDiagram.html', function(req, res, next) {
  res.render('d3_NetworkDiagram', { title: 'd3_NetworkDiagram ddc' });
});

router.get('/d3_FunnelChart.html', function(req, res, next) {
  res.render('d3_FunnelChart', { title: 'd3_FunnelChart ddc' });
});

router.get('/d3_circlePacking.html', function(req, res, next) {
  res.render('d3_circlePacking', { title: 'd3_circlePacking ddc' });
});

router.get('/d3_spiralHeatmap.html', function(req, res, next) {
  res.render('d3_spiralHeatmap', { title: 'd3_spiralHeatmap ddc' });
});

router.get('/multiSelector.html', function(req, res, next) {
  res.render('multiSelector', { title: 'Multiselector ddc' });
});

router.get('/Feedback.html', function(req, res, next) {
  res.render('Feedback', { title: 'ML Based monitoring Feedback ddc' });
});

router.get('/Scoring.html', function(req, res, next) {
  res.render('Scoring', { title: 'ML Based monitoring Scoring ddc' });
});

router.get('/TrainModel.html', function(req, res, next) {
  res.render('TrainModel', { title: 'ML Based monitoring TrainModel ddc' });
});

router.get('/cas_rest_api_js_sample.html', function(req, res, next) {
  res.render('cas_rest_api_js_sample', { title: 'Example of javascript using direct CAS Rest API' });
});

router.get('/jobCalibrationScen2D.html', function(req, res, next) {
  res.render('jobCalibrationScen2D', { title: 'jobCalibrationScen2D ddc' });
});

router.get('/web_page_louis.html', function(req, res, next) {
  res.render('web_page_louis', { title: 'Web page louis ddc' });
});

router.get('/test.html', function(req, res, next) {
  res.render('test', { title: 'test ddc' });
});

router.get('/LLM_support.html', function(req, res, next) {
  res.render('LLM_support', { title: 'LLM_support ddc' });
});

router.get('/LLM_test.html', function(req, res, next) {
  res.render('LLM_test', { title: 'LLM_test ddc' });
});

router.get('/network_test.html', function(req, res, next) {
  res.render('network_test', { title: 'network_test ddc' });
});

module.exports = router;
