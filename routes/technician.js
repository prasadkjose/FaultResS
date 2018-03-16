var client = require('../mqtt.js'); // importing my mqtt conf from mqtt.js

var express = require('express');
var router = express.Router();
// var events = require('events');
// var eventEmitter = new events.EventEmitter();


var con = require('../db.js'); // importing my db conf from db.js
var moment = require('moment');// timestamp formatter

 

router.get('/', (req, res) => {
          var dataList= [];
          con.query("SELECT * FROM test where status = 1 ORDER BY tor DESC", function (err, rows, fields) {
            if (err) throw err;
         var status;
         var color;
         var tor;
         var toc;
         var toa;
              for (var i = 0 ; i < rows.length; i++)
                   {

                     if (rows[i].status==1) {
                        status = 'Not Resolved';
                      color = 'red';  }
                       else
                       {status= 'Resolved';
                       color = 'green';
                        }
                          //formats the timestamps
                    tor =  moment(rows[i].tor).format("dddd, MMMM Do YYYY, h:mm:ss a");
                    tor1 =  rows[i].tor;
                    let ack = rows[i].line.concat("/",rows[i].line_no,"/",rows[i].category);

                      // Create an object to save current row's data
                      var data = {
                          'tor':tor,
                          'ack' : ack,
                          'Line':rows[i].line,
                          'LineNo':rows[i].line_no,                   
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

         
  router.post('/ack', (req,res) => 
        {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
      var date = yyyy + "-" + mm + "-" + dd;  
          let a=req.body.a;

            let b = a.split('/');
            var MQTT_TOPIC          = "ack/faultress/" + b[0] + "/" + b[1];
          var ack = "Fault in " + a + " is acknowledged."
          client.publish(MQTT_TOPIC, ack);
           con.query("UPDATE test SET toa = CURRENT_TIMESTAMP  WHERE date(tor) = '"+ date +"'and  line = '"+ b[0]+"' and line_no = '"+ b[1]+"' and status = 1 and category = '"+ b[2]+ "'", function(err)
              {
                // res.json({msd: err})
                res.render('tech-comment.hbs', {
                  pageTitle: 'Technician Page',
                  name: 'Fault Details',
                  b: a
                  });



              
              });
          
        
        });


 router.post('/comment', (req,res) => 
        {

          var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
      var date = yyyy + "-" + mm + "-" + dd;  

              let TechnicianName= req.body.TechnicianName;
              let Fault= req.body.Fault;
              let Comment = req.body.Comment;

            // res.json({Technicin: TechnicianName,
            //       Fault : Fault,
            //     Comment : Comment})
           // res.json({msd: err})
           let a=req.body.b;

           let b = a.split('/');
           con.query("UPDATE test SET status= "+ 0 +" , toc = CURRENT_TIMESTAMP, technician ='"+TechnicianName+ "', fault = '"+Fault +"', comment='"+Comment+"' WHERE date(tor) = '"+ date +"'and line = '"+ b[0]+"' and line_no = '"+ b[1]+"'and status = 1 and category = '"+ b[2]+ "'", function(err)
        {
          //  res.json({msd: err})
          var dataList= [];
          con.query("SELECT * FROM test where status = 1 ORDER BY tor DESC", function (err, rows, fields) {
            if (err) throw err;
         var status;
         var color;
         var tor;
         var toc;
         var toa;
              for (var i = 0 ; i < rows.length; i++)
                   {

                     if (rows[i].status==1) {
                        status = 'Not Resolved';
                      color = 'red';  }
                       else
                       {status= 'Resolved';
                       color = 'green';
                        }
                          //formats the timestamps
                    tor =  moment(rows[i].tor).format("dddd, MMMM Do YYYY, h:mm:ss a");
                    tor1 =  rows[i].tor;
                    let ack = rows[i].line.concat("/",rows[i].line_no,"/",rows[i].category);

                      // Create an object to save current row's data
                      var data = {
                          'tor':tor,
                          'ack' : ack,
                          'Line':rows[i].line,
                          'LineNo':rows[i].line_no,
                          
                          
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
     
        });

 

        
 
     // res.json({msd: a})
    
         
 
module.exports = router;
