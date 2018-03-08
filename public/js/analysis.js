// Top Graph for count Javascript
var options1 = {
   referenceValue: 5,
  low: 0,
  stackBars: true,
  axisY: {
    type: Chartist.AutoScaleAxis,
    onlyInteger: true,
  }
   };
var data1 = {
  labels: [],
  series: [[]]
}   

new Chartist.Bar('#graph-top', data1 , options1 );

$(function()
{
  $(document).ready(function(){

    var get_data = setInterval(function(){         
      var ajaxrequest;
      ajaxrequest = $.ajax({
          type:"post",
          datatype:"Json",
          url:"/analysis/chart1",
          data: (typeof data ==="Json"? data:null),
          success: function(data) { 

               var mychart = $('#graph-top ');
        mychart.get(0).__chartist__.update(data);
        $("#filter-factory-label").html(data.labels[0]+"    :    "+ data.series[0][0]);
        $("#RFM-factory-label").html(data.labels[1]+"     :    "+ data.series[0][1]);
 
              
          },
      });  
  },1000);
}); 

});

// Javascript for Downtime graph
var options = {
   referenceValue: 5,
  low: 0,
  onlyInteger: true  
  };
var data = {
  labels: [],
  series: [[]]
}   

new Chartist.Bar('#graph-Downtime', data , options );

$(function()
{
  $(document).ready(function(){

    var get_data = setInterval(function(){         
      var ajaxrequest;
      ajaxrequest = $.ajax({
          type:"post",
          datatype:"Json",
          url:"/analysis/chartDowntime",
          data: (typeof data ==="Json"? data:null),
          success: function(data) { 

               var mychart = $('#graph-Downtime ');
        mychart.get(0).__chartist__.update(data);              
          },
      });  
  },1000);
}); 

});

// Javascript for pie chart
var data_pie = {
  labels: [],
  series: []
};


var options_pie = {
  height: '300px',
  labelInterpolationFnc: function(value) {
    return value[0]
  } 
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie('#pie-fault', data_pie, options_pie, responsiveOptions);
$(function()
{
  $(document).ready(function(){

    var get_data = setInterval(function(){         
      var ajaxrequest;
      ajaxrequest = $.ajax({
          type:"post",
          datatype:"Json",
          url:"/analysis/pie",
          data: (typeof data ==="Json"? data:null),
          success: function(data) { 

               var mychart = $('#pie-fault');
        mychart.get(0).__chartist__.update(data);              
          },
      });  
  },1000);
}); 

});


