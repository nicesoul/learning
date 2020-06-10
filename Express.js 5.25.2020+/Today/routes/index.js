var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to your favorite blog', desc:'Express yourself with Express.js' });
});

module.exports = router;
