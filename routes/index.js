var express = require('express');
var router = express.Router();

/* 주석임 GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
