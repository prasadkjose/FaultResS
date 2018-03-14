// Javascript for  graph  by week
// Top Graph for count Javascript by day
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
 
 new Chartist.Bar('#graphFaultByLineWeek', data1 , options1 );
 
 $(function()
 {
   $(document).ready(function(){
 
 
 
 
       var ajaxrequest;
       ajaxrequest = $.ajax({
           type:"post",
           datatype:"Json",
           url:"/analysis/weeklinechart",
           data: (typeof data ==="Json"? data:null),
           success: function(data) { 
 
                var mychart = $('#graphFaultByLineWeek');
         mychart.get(0).__chartist__.update(data);
         for(var i=0; i<data.labels.length;i++)
         {
           var target = document.getElementById("faultByLineWeek");
           var newElement = document.createElement("li");
           newElement.classList.add("list-group-item");
           newElement.textContent = data.labels[i]+"    :    "+ data.series[0][i];
           target.appendChild(newElement);
         }
         }
 
         
       }); 
        
       
    
             
   
 }); 
 
 });
 // Javascript for pie chart
 var data_pie = {
   labels: [],
   series: []
 };
 
 
 var options_pie = {
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
     labelOffset: 40,
     chartPadding: 100
   }]
 ];
 
 new Chartist.Pie('#pie-cat-countbylineWeek', data_pie, options_pie, responsiveOptions);
 $(function()
 {
   $(document).ready(function(){
 
            
       var ajaxrequest;
       ajaxrequest = $.ajax({
           type:"post",
           datatype:"Json",
           url:"/analysis/weekcatpie",
           data: (typeof data ==="Json"? data:null),
           success: function(data) { 
 
                var mychart = $('#pie-cat-countbylineWeek');
         mychart.get(0).__chartist__.update(data); 
         for(var i=0; i<data.labels.length;i++)
         {
           var target = document.getElementById("faultByCategoryWeek");
           var newElement = document.createElement("li");
           newElement.classList.add("list-group-item");
           newElement.textContent = data.labels[i]+"    :    "+ data.series[i];
           target.appendChild(newElement);
         }             
           
       }
     })  
 
 }); 
 
 });
 
 
 
 
 