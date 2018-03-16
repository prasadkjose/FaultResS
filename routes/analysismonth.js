
var express = require('express');
var router = express.Router();
var con = require('../db.js'); // importing my db conf from db.js

var month;
router.post('/', (req, res) => {

  month = req.body.month;

   res.render('analysismonth.hbs', {
    pageTitle: 'FaultResS- Analytics Page',
    name: 'Faultress | Analytics  ',
    month : month
    
     });
});

 

router.post('/monthlinechart', (req, res) => {
    var dataList=[];
    var dataList1=[];
    

    con.query(" SELECT count(line) AS count, line FROM test where DATE_FORMAT(tor, \"%Y-%m\") = '" + month + "' GROUP BY line  ", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var no = rows[i].line;
                var val = rows[i].count;
                dataList.push(no);
                dataList1.push(val);
            }
            // con.query(" SELECT count(line) AS count, line FROM test GROUP BY line ", function (err, rows, fields)
            var data = {
                labels: dataList,
                series: [dataList1]
            };
                    
        res.send(data);

        });

});


router.post('/monthcatpie', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT count(category) AS count, category FROM test where DATE_FORMAT(tor, \"%Y-%m\") = '" + month + "' GROUP BY category; ", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var category = rows[i].category;
                var count = rows[i].count;
                dataList.push(category);
                dataList1.push(count);
            }
            var data = {
                labels: dataList,
                series: dataList1
            };
         
                    
        res.send(data);

        });

});

router.post('/bylinefilter', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT COUNT(category) as count,line_no from test where DATE_FORMAT(tor, \"%Y-%m\") = '" + month + "' and line='filter' GROUP by line_no;", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var line_no = rows[i].line_no;
                var count = rows[i].count;
                dataList.push(line_no);
                dataList1.push(count);
            }
            var data = {
                labels: dataList,
                series: [dataList1]
            };
         
                    
        res.send(data);

        });

});



router.post('/bylineRFM', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT COUNT(category) as count,line_no from test where DATE_FORMAT(tor, \"%Y-%m\") = '" + month + "' and line='RFM' GROUP by line_no;", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var line_no = rows[i].line_no;
                var count = rows[i].count;
                dataList.push(line_no);
                dataList1.push(count);
            }
            var data = {
                labels: dataList,
                series: [dataList1]
            };
         
                    
        res.send(data);

        });

});

router.post('/bylinepacking', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT COUNT(category) as count,line_no from test where DATE_FORMAT(tor, \"%Y-%m\") = '" + month + "' and line='packing' GROUP by line_no;", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var line_no = rows[i].line_no;
                var count = rows[i].count;
                dataList.push(line_no);
                dataList1.push(count);
            }
            var data = {
                labels: dataList,
                series: [dataList1]
            };
         
                    
        res.send(data);

        });

});


router.post('/bylinethermal', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT COUNT(category) as count,line_no from test where DATE_FORMAT(tor, \"%Y-%m\") = '" + month + "' and line='thermal' GROUP by line_no;", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var line_no = rows[i].line_no;
                var count = rows[i].count;
                dataList.push(line_no);
                dataList1.push(count);
            }
            var data = {
                labels: dataList,
                series: [dataList1]
            };
         
                    
        res.send(data);

        });

});


router.post('/bylinecorrection', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT COUNT(category) as count,line_no from test where DATE_FORMAT(tor, \"%Y-%m\") = '" + month + "' and line='716' GROUP by line_no;", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var line_no = rows[i].line_no;
                var count = rows[i].count;
                dataList.push(line_no);
                dataList1.push(count);
            }
            var data = {
                labels: dataList,
                series: [dataList1]
            };
         
                    
        res.send(data);

        });

});

module.exports = router;
