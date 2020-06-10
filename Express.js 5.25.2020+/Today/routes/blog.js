var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('blog', {title: 'place to peace out your mind'});
  });
  
  module.exports = router;