var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node SAS DDC' });
});

router.get('/jsonDataViewer.html', function(req, res, next) {
  res.render('jsonDataViewer', { title: 'jsonDataViewer ddc' });
});

router.get('/google_OrgCHart.html', function(req, res, next) {
  res.render('google_OrgCHart', { title: 'google_OrgCHart ddc' });
});

module.exports = router;
