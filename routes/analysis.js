var express = require('express');
var router = express.Router();
var con = require('../db.js'); // importing my db conf from db.js
var _ = require('lodash');

// var chart = require('../public/js/analysis.js');


router.get('/', (req, res) => {

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
            pageTitle: 'FaultResS- Analysis Page',
            name: 'Faultress | Analysis ',
             });


    // });
});


router.post('/chart1', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query(" SELECT count(line) AS count, line FROM test GROUP BY line ", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var no = rows[i].line;
                var val = rows[i].count;
                dataList.push(no);
                dataList1.push(val);
            }
            var data = {
                labels: dataList,
                series: [dataList1]
            };
                    
        res.send(data);

        });

});


router.post('/chartDowntime', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT sum(TIME_TO_SEC(TIMEDIFF(toc, tor))/3600) As downtime, line from test where tor > DATE_SUB(NOW(), INTERVAL 1 WEEK) group by line; ", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var no = rows[i].line;
                var val = rows[i].downtime;
                dataList.push(no);
                dataList1.push(val);
            }
            var data = {
                labels: dataList,
                series: [dataList1]
            };
                 
        res.send(data);

        });

});


router.post('/pie', (req, res) => {
    var dataList=[];
    var dataList1=[];

    con.query("SELECT count(line) AS count, line FROM test GROUP BY line; ", function (err, rows, fields)
        {
        if (err) throw err;
        for (var i=0; i< rows.length; i++)
            {
                var no = rows[i].line;
                var val = rows[i].count;
                dataList.push(no);
                dataList1.push(val);
            }
            var data = {
                labels: dataList,
                series: dataList1
            };
         
                    
        res.send(data);

        });

});
    module.exports = router;
