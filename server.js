const express = require('express');
const hbs = require('hbs');
const { pg } = require('pg');
var path = require('path');

const port = process.env.PORT || 3000;
var app = express();

var connectionString = "postgres://jogekjsshjwbgb:ce0812c7781b5c929b09c2aef4e197fb1fb9a05ae8d5dd529c27cfcd807ce707@ec2-54-235-244-185.compute-1.amazonaws.com:5432/d5tp3snp1afq9h";


app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  var dataList= [];
  pg.connect(connectionString, function(err, client, done) {
  client.query("SELECT * FROM test", function (err, rows) {
    if (err) throw err;
    for (var i = 0 ; i < rows.length; i++)
                   {
                      // Create an object to save current row's data
                      var data = {

                          'Line':rows[i].line,
                          'Section':rows[i].section,
                          'category':rows[i].category
                      }
                      // Add object into array
                      dataList.push(data);
                  }

                    client.end();
                  res.render('home.hbs', {
                    pageTitle: 'FaultResS- Fault Resolution System',
                    dataList : dataList   });

    });
});

});

app.listen(port, () => {
  console.log('Server is up on port' + port);
});
