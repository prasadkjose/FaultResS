var express = require('express');
var router1 = express.Router();

var con = require('../db.js'); // importing my db conf from db.js

  router1.get('/', (req,res) =>
{
  res.render('login.hbs', {
    pageTitle: 'Login Page',
    name: 'Fault Resolution System   |   Technician Login',
  });

});

module.exports = router1;
