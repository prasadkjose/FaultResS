var mqtt = require('mqtt');
var express = require('express');
var router = express.Router();

var MQTT_TOPIC          = "faultress/filter1/machine";
var MQTT_ADDR           = "mqtt://192.168.1.5:1883";
var MQTT_PORT           = 1883;

/* This is not working as expected */
//var client = mqtt.connect({host: MQTT_ADDR, port:MQTT_PORT},{clientId: 'bgtestnodejs'});

/* This works... */
var client  = mqtt.connect(MQTT_ADDR,{protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});

// client.on('connect', function () {
//     client.subscribe(MQTT_TOPIC);
//     client.publish(MQTT_TOPIC, '1');
// });

// client.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(message.toString());
//     client.end();
// });

// client.on('error', function(){
//     console.log("ERROR")
//     client.end()
// })
module.exports = router;
