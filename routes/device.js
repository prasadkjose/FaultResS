var express = require('express');
var router = express.Router();
var mqtt = require('mqtt');
var client  = mqtt.connect(MQTT_ADDR,{protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});

var MQTT_ADDR           = "mqtt://52.172.25.136:1883";
var MQTT_PORT           = 1883;


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
    console.log("sent");
    // res to send stuff to the browser
// res.json({ msg: "We receive your data", data: user });

});

router.get('/:line/:no/mqtt-ack', (req, res) => 
{ 
//     let line = req.params.line;
//     let line_no = req.params.no;
//     let MQTT_TOPIC = "faultress/ack/" + line + "/" + line_no +"/#";
//     // let MQTT_TOPIC = "hi";
//  let ack =  client.subscribe(MQTT_TOPIC, function (err,granted){
//      console.log(granted);
//  });
//  res.send(ack);
 });

module.exports = router;

