const fs = require('fs');
const path = '~/.data/secure-connect.zip';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Better Botz Nous' });
});

router.get('/data', function (req, res) {
  var theData = 'The data from the database.';  
  
  theData = fs.existsSync(path)
  
  res.send(theData);
})

module.exports = router;
