var mysql = require('mysql');
 var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "faultress",
  multipleStatements: true
});

con.connect();
module.exports = con;
