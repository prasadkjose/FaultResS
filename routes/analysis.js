var express = require('express');
var router = express.Router();
var con = require('../db.js'); // importing my db conf from db.js
var _ = require('lodash');

// var chart = require('../public/js/analysis.js');


router.get('/', (req, res) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var monthly= mm-1;
    var yearly = yyyy-1


date = dd-1 + '/' + mm + '/' + yyyy;
week = dd-7 + '/' + mm + '/' + yyyy;
month = dd + '/' + monthly + '/' + yyyy;
year = dd + '/' + monthly + '/' + yearly;

    // con.query("SELECT * FROM no ", function (err, rows, fields){
    //     var dataList=[];
    //     var dataList1=[];
    //     if (err) throw err;
    //     for (var i=0; i< rows.length; i++)
    //         {
    //             var no = rows[i].no;
    //             var val = rows[i].val;
    //             dataList.push(no);
    //             dataList1.push(val);
    //         }   
    //     var data = {
    //         labels: dataList,
    //         series: dataList1
    //     };                           
        res.render('analysis.hbs', {
            pageTitle: 'FaultResS- Analytics Page',
            name: 'Faultress | Analytics  ',
            date : date,
            week : week,
            month : month,
            year : year
             });


    // });
});


router.post('/daylinechart', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query(" SELECT count(line) AS count, line FROM test where date(tor) = DATE(NOW() - INTERVAL 1 DAY) GROUP BY line  ", function (err, rows, fields)
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


router.post('/daycatpie', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT count(category) AS count, category FROM test where date(tor) = DATE(NOW() - INTERVAL 1 DAY) GROUP BY category; ", function (err, rows, fields)
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


router.post('/weeklinechart', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query(" SELECT count(line) AS count, line FROM test where date(tor) > DATE(NOW() - INTERVAL 7 DAY) GROUP BY line  ", function (err, rows, fields)
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


router.post('/weekcatpie', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT count(category) AS count, category FROM test where date(tor) > DATE(NOW() - INTERVAL 7 DAY) GROUP BY category; ", function (err, rows, fields)
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

router.post('/monthlinechart', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query(" SELECT count(line) AS count, line FROM test where date(tor) > DATE(NOW() - INTERVAL 30 DAY) GROUP BY line  ", function (err, rows, fields)
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

    con.query("SELECT count(category) AS count, category FROM test where date(tor) > DATE(NOW() - INTERVAL 30 DAY) GROUP BY category; ", function (err, rows, fields)
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


router.post('/yearlinechart', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query(" SELECT count(line) AS count, line FROM test where date(tor) > DATE(NOW() - INTERVAL 30 DAY) GROUP BY line  ", function (err, rows, fields)
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


router.post('/yearcatpie', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT count(category) AS count, category FROM test where date(tor) > DATE(NOW() - INTERVAL 30 DAY) GROUP BY category; ", function (err, rows, fields)
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


    module.exports = router;
