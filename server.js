const express = require('express');
const hbs = require('hbs');
 var mysql = require('mysql');
var path = require('path');

const port = process.env.PORT || 3000;
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "faultress"
});




app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use('/ng-gentelella', express.static(path.join(__dirname, 'node_modules', 'ng-gentelella')));

app.get('/home', (req, res) => {
  var dataList= [];
  con.query("SELECT * FROM test", function (err, rows, fields) {
    if (err) throw err;
    for (var i = 0 ; i < rows.length; i++)
                   {

                      // Create an object to save current row's data
                      var data = {
                          'timestamp':rows[i].timestamp,
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
