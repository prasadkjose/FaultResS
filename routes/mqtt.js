var mqtt = require('mqtt');
var express = require('express');
var router = express.Router();
 

var MQTT_TOPIC          = "faultress/#";
var MQTT_ADDR           = "mqtt://52.172.25.136:1883";
 var client  = mqtt.connect(MQTT_ADDR,{protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});








//    client.subscribe('test', function ()
// {
//     client.on('message', function (topic, message) {
//         console.log(message.toString());
//       });
// }); 


//start sending
 
  
module.exports = router;
