var express = require('express');
var router = express.Router();
var mqtt = require('mqtt');
var client  = mqtt.connect(MQTT_ADDR,{protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000, debug:true});

var MQTT_ADDR           = "mqtt://192.168.1.5:1883";
var MQTT_PORT           = 1883;


router.get('/', (req, res) => {
    res.send(req.params.a);
});
router.get('/:line/:no', (req, res) => {

    res.render('device.hbs', {
        pageTitle: 'FaultResS- Analysis Page',
        name: 'Faultress | Device Controller',
        line: req.params.line,
        line_no: req.params.no,
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

    // res to send stuff to the browser
// res.json({ msg: "We receive your data", data: user });

});

module.exports = router;

