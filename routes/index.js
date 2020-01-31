const fs = require('fs');
const path = '../';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Better Botz Nous' });
});

router.get('/data', function (req, res) {
  var theData = 'Nope!';  
  
  const fs = require("fs");
  
  exists = fs.existsSync(path);
  if (fileExists)
  
  res.send(theData);
})

module.exports = router;
