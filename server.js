const express = require('express');
const hbs = require('hbs');
 var path = require('path');
const fs = require('fs');
var admin = require('./routes/admin.js');
var login = require('./routes/login.js');
var Technician = require('./routes/Technician.js');
var home = require('./routes/index.js');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));


const port = process.env.PORT || 8081;

const partialsDir = __dirname + '/views/partials';
const filenames = fs.readdirSync(partialsDir);

filenames.forEach(function (filename) {
  const matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  const name = matches[1];
  const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});


app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use('/admin', admin);
app.use('/login', login);
app.use('/tech-panel', Technician);
app.use('/', home);

app.post('/date',admin);
app.post('/tech',admin);

//give public IP next to port and open up port
app.listen(port, () => {
  console.log('Server is up on port' + port);
});
