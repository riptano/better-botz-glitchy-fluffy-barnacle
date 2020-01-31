'use strict'

const fs = require('fs');
const path = './.data/secure-connect.zip';
const { Client } = require('cassandra-driver');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Better Botz Nous' });
});

router.get('/data', function (req, res) {
  var theData = 'Nope!';  
  
  const fs = require("fs");
  
  var fileExists = fs.existsSync(path);
  if (fileExists) {
    theData = "The file exists.\n"
    
    process.env.USERNAME
    
    
    
  }
  
  res.send(theData);
})



// async function run() {
//   const client = new Client({
//     cloud: { secureConnectBundle: path },
//     credentials: { username: 'username', password: 'password' }
//   });

//   await client.connect();

//   // Execute a query
//   const rs = await client.execute('SELECT * FROM system.local');
//   console.log(`Hello from cluster: ${rs.first()['cluster_name']}`);

//   await client.shutdown();
// }

// // Run the async function
// run();

module.exports = router;
