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

app.get('/', (req, res) => {
  var dataList= [];
  client.query("SELECT * FROM test", function (err, rows, fields) {
    if (err) throw err;
    for (var i = 0 ; i < rows.length; i++)
                   {
                    console.log(rows);
                      // Create an object to save current row's data
                      var data = {

                          'Line':rows[i].line,
                          'Section':rows[i].section,
                          'category':rows[i].category
                      }
                      // Add object into array
                      dataList.push(data);
                  }
                  res.render('home.hbs', {
                    pageTitle: 'FaultResS- Fault Resolution System',
                    dataList : dataList   });

    });


});

app.listen(port, () => {
  console.log('Server is up on port' + port);
});
