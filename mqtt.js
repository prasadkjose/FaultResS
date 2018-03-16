var mqtt = require('mqtt');
// var MQTT_ADDR           = "mqtt://localhost:1883";
var MQTT_ADDR           = "mqtt://52.172.25.136:1883";

var MQTT_PORT           = 1883;
var client  = mqtt.connect(MQTT_ADDR,{protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});

module.exports = client;
