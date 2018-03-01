var express = require('express');
var router = express.Router();
var con = require('../db.js'); // importing my db conf from db.js
var _ = require('lodash');


router.get('/', (req, res) => {
var dataList=[];
var a= [];
var b =[];
  con.query("SELECT * FROM test order by tor desc limit 1 ", function (err, rows, fields)
                                  {
                          if (err) throw err;


                            for (var i=0; i< rows.length; i++)
                            {
                              var data = {

                                  'Line':rows[i].line,
                                  'Section':rows[i].section,
                                  'category':rows[i].category,
                                  'tech':rows[i].technician

                              }
                              dataList.push(data);
                        //      a.push(dataList[i].Line);
                            }



                          //    b=_.groupBy(a);
                          res.render('index.hbs', {
                          pageTitle: 'FaultResS- Fault Resolution System',
                          name: 'Fault Resolution System | ',
                          layout : 'partials/bar-count.hbs'
                          });


                                  });
                              });



    module.exports = router;
