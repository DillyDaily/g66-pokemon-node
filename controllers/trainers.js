var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('trainers/index', {passedInData: "xyz"});
});

module.exports = router;
