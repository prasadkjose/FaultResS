var express = require('express');
var router = express.Router();

var con = require('../db.js'); // importing my db conf from db.js
var moment = require('moment');// timestamp formatter

router.get('/', (req, res) => {
          var dataList= [];
          con.query("SELECT * FROM test", function (err, rows, fields) {
            if (err) throw err;
         var status;
         var color;
         var tor;
         var toc;
         var toa;
              for (var i = 0 ; i < rows.length; i++)
                   {

                     if (rows[i].status==0) {
                        status = 'Not Resolved';
                      color = 'red';  }
                       else
                       {status= 'Resolved';
                       color = 'green';
                        }
                          //formats the timestamps
                    tor =  moment(rows[i].tor).format("dddd, MMMM Do YYYY, h:mm:ss a");

                      // Create an object to save current row's data
                      var data = {
                          'tor':tor,
                          'Line':rows[i].line,
                          
                          'category':rows[i].category,

                          
                          
                      }
                      // Add object into array
                      dataList.push(data);
                  }
                  res.render('Technician.hbs', {
                    pageTitle: 'Technician Page',
                    name: 'Fault Resolution System   |   Technician Panel',
                    dataList : dataList  });

                    });


        });


module.exports = router;
