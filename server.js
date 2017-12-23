const express = require('express');
const hbs = require('hbs');
const { Client } = require('pg');
var path = require('path');

const port = process.env.PORT || 3000;
var app = express();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
client.connect();



app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use('/ng-gentelella', express.static(path.join(__dirname, 'node_modules', 'ng-gentelella')));

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }

app.listen(port, () => {
  console.log('Server is up on port' + port);
});
