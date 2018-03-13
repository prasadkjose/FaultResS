var express = require('express');
var router = express.Router();
var client = require('../mqtt.js'); // importing my mqtt conf from mqtt.js





router.get('/', (req, res) => {
    res.send(req.params.a);
});
router.get('/:line/:no', (req, res) => {
    let line = req.params.line;
   let  line_no = req.params.no;
    res.render('device.hbs', {
        pageTitle: 'FaultResS- Device',
        name: 'Faultress | Device Controller',
        line: line,
        line_no: line_no,
         });
    // res.send(req.params);
});

router.post('/mqtt', (req, res) => {
    const { topic } = req.body;
    const user = {
        topic
    };

    var MQTT_TOPIC          = "faultress/" +topic ;

    client.publish(MQTT_TOPIC, "1");
    // console.log("sent");
    // res to send stuff to the browser
// res.json({ msg: "We receive your data", data: user });

});


router.get('/mqtt-ack/:line/:no', (req, res) => 
{
    const line = req.params.line;
    const line_no = req.params.no;
    let MQTT_TOPIC = "ack/faultress/" + line + "/" + line_no;
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      });
      res.write('\n');
        // Timeout timer, send a comment line every 20 sec
    var timer = setInterval(function() {
        res.write('event: ping' + '\n\n');
      }, 20000);
  
      client.subscribe(MQTT_TOPIC, function() {
        client.on('message', function(topic, msg, pkt) {
          //res.write("New message\n");
          var json = msg;
          res.write("data:" + json + "\n\n");
        });
      });

});

  
  

  
//         router.get('/:line/:no/mqtt-ack', (req, res) => 
//         { 
//             let line = req.params.line;
//             let line_no = req.params.no;
//             let MQTT_TOPIC = "faultress/ack/" + line + "/" + line_no +"/#";

            
//     // let MQTT_TOPIC = "hi";
// //     client.subscribe('test', function (topic, message)
// //     {
         
// // console.log(message.toString());          
// //     }); 
//             //  res.send(ack);
//   });
  

 module.exports = router;

