var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '5-19', desc:'Learning Express.js' });
});

module.exports = router;
