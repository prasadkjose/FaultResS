var express = require('express');
var router1 = express.Router();

var con = require('../db.js'); // importing my db conf from db.js

  router1.get('/', (req,res) =>
{
con.query("update test set toa=NOW() where category='a'");
});

module.exports = router1;
