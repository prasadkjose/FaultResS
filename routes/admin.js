var express = require('express');
var router = express.Router();
var con = require('../db.js'); // importing my db conf from db.js
var moment = require('moment');// timestamp formatter

router.post('/date', (req,res) => {

 var date = req.body.date;

             var dataList= [];
             con.query("SELECT * FROM test where date(tor)='" + date + "'", function (err, rows, fields) {
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
                       toc =  moment(rows[i].toc).format("dddd, MMMM Do YYYY, h:mm:ss a");
                       toa =  moment(rows[i].toa).format("dddd, MMMM Do YYYY, h:mm:ss a");
                         // Create an object to save current row's data
                         var data = {
                             'tor':tor,
                             'Line':rows[i].line,
                             
                             'category':rows[i].category,
                             'toa' :  toa,
                             'toc':  toc,
                             'tech':rows[i].technician,
                             'status':status,
                             'color':color
                         }
                         // Add object into array
                         dataList.push(data);
                     }
                     res.render('home.hbs', {
                       pageTitle: 'FaultResS- Fault Resolution System',
                       name: 'Fault Resolution System |  Admin Panel',
                       dataList : dataList  });

                       });


});

router.post('/tech', (req,res) => {

 var tech = req.body.technician;

             var dataList= [];
             con.query("SELECT * FROM test where technician='" + tech + "'", function (err, rows, fields) {
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
                       toc =  moment(rows[i].toc).format("dddd, MMMM Do YYYY, h:mm:ss a");
                       toa =  moment(rows[i].toa).format("dddd, MMMM Do YYYY, h:mm:ss a");
                         // Create an object to save current row's data
                         var data = {
                             'tor':tor,
                             'Line':rows[i].line,
                             'Section':rows[i].section,
                             'category':rows[i].category,
                             'toa' :  toa,
                             'toc':  toc,
                             'tech':rows[i].technician,

                             'status':status,
                             'color':color
                         }
                         // Add object into array
                         dataList.push(data);
                     }
                     res.render('home.hbs', {
                       pageTitle: 'FaultResS- Fault Resolution System',
                       name: 'Fault Resolution System |  Admin Panel',
                       dataList : dataList  });

                       });


});


router.get('/a', (req,res) => {
 });


//Get all data
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
                    toc =  moment(rows[i].toc).format("dddd, MMMM Do YYYY, h:mm:ss a");
                    toa =  moment(rows[i].toa).format("dddd, MMMM Do YYYY, h:mm:ss a");
                      // Create an object to save current row's data
                      var data = {
                          'tor':tor,
                          'Line':rows[i].line,
                          'Section':rows[i].section,
                          'category':rows[i].category,
                          'toa' :  toa,
                          'toc':  toc,
                          'tech':rows[i].technician,
                          'status':status,
                          'color':color
                      }
                      // Add object into array
                      dataList.push(data);
                  }
                  res.render('home.hbs', {
                    pageTitle: 'FaultResS- Fault Resolution System',
                    name: 'Fault Resolution System |  Admin Panel',
                    dataList : dataList  });

                    });


        });



    module.exports = router;
