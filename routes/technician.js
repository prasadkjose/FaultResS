var express = require('express');
var router = express.Router();

var con = require('../db.js'); // importing my db conf from db.js
var moment = require('moment');// timestamp formatter


var MQTT_TOPIC          = "faultress/filter1";
var MQTT_ADDR           = "mqtt://192.168.1.5:1883";
var MQTT_PORT           = 1883;
 
var mqtt = require('mqtt');
var client  = mqtt.connect(MQTT_ADDR,{protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});


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
                    let ack = rows[i].line.concat(",",rows[i].category);

                      // Create an object to save current row's data
                      var data = {
                          'tor':tor,
                          'ack' : ack,
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

        router.post('/ack', (req,res) => {


            let a=req.body.a;

            let b = a.split(',');
           con.query("UPDATE test SET toa = CURRENT_TIMESTAMP  WHERE line = '"+ b[0]+"' and category = '"+ b[1]+ "'", function(err)
        {
          // res.json({msd: err})
          res.render('tech-comment.hbs', {
            pageTitle: 'Technician Page',
            name: 'Fault Resolution System   |   Technician Panel'
            });
        
        });
          
        
                      client.on('connect', function () {
                        client.publish(MQTT_TOPIC, '1');
                    });
                    
                    client.on('message', function (topic, message) {
                        // message is Buffer
                        console.log(message.toString());
                        client.end();
                    });
                    
                    client.on('error', function(){
                        console.log("ERROR")
                        client.end()
                    })

        });

       
 

        
 
     // res.json({msd: a})
    
         
 
module.exports = router;
