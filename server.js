const express = require('express');
const hbs = require('hbs');
 var path = require('path');
const fs = require('fs');
var admin = require('./routes/admin.js');
var Technician = require('./routes/Technician.js');
var analysis = require('./routes/analysis.js');
var bodyParser = require('body-parser');
var mqtt1 = require('./routes/mqtt.js');
var device = require('./routes/device.js');
var analysisbydate = require('./routes/analysisdate.js');
var analysisbymonth = require('./routes/analysismonth.js');



var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'hbs');

const port = process.env.PORT || 8081;

const partialsDir = __dirname + '/views/partials';
const filenames = fs.readdirSync(partialsDir);
app.use(express.static(__dirname + '/public'));

filenames.forEach(function (filename) {
  const matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  const name = matches[1];
  const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});


 

app.use('/admin', admin);
app.use('/tech-panel', Technician);
app.use('/analysis', analysis);
app.use('/mqtt', mqtt1);
app.use('/device', device);

 

app.post('/date',admin);
app.post('/tech',admin);
app.post('/line',admin);

app.use('/analysisbydate',analysisbydate);
app.use('/analysisbymonth',analysisbymonth);


 



app.post('/ack',Technician);
app.post('/comment',Technician);

 //give public IP next to port and open up port
app.listen(port, () => {
  console.log('Server is up on port' + port);
});
