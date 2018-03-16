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
 
 new Chartist.Bar('#barFilter', data1 , options1 );
 
 $(function()
 {
   $(document).ready(function(){
 
 
 
 
       var ajaxrequest;
       ajaxrequest = $.ajax({
           type:"post",
           datatype:"Json",
           url:"/analysisbymonth/bylinefilter/",
           data: (typeof data ==="Json"? data:null),
           success: function(data) { 
 
                var mychart = $('#barFilter ');
         mychart.get(0).__chartist__.update(data);
        //  for(var i=0; i<data.labels.length;i++)
        //  {
        //    var target = document.getElementById("faultByLineDay");
        //    var newElement = document.createElement("li");
        //    newElement.classList.add("list-group-item");
        //    newElement.textContent = data.labels[i]+"    :    "+ data.series[0][i];
        //    target.appendChild(newElement);
        //  }
         }
 
         
       }); 
        
       
    
             
   
 }); 
 
 });

 //RFM Line
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

new Chartist.Bar('#barRFM', data1 , options1 );

$(function()
{
 $(document).ready(function(){




     var ajaxrequest;
     ajaxrequest = $.ajax({
         type:"post",
         datatype:"Json",
         url:"/analysisbymonth/bylineRFM/",
         data: (typeof data ==="Json"? data:null),
         success: function(data) { 

              var mychart = $('#barRFM');
       mychart.get(0).__chartist__.update(data);
      //  for(var i=0; i<data.labels.length;i++)
      //  {
      //    var target = document.getElementById("faultByLineDay");
      //    var newElement = document.createElement("li");
      //    newElement.classList.add("list-group-item");
      //    newElement.textContent = data.labels[i]+"    :    "+ data.series[0][i];
      //    target.appendChild(newElement);
      //  }
       }

       
     }); 
      
     
  
           
 
}); 

});

//Packing Line
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

new Chartist.Bar('#barPacking', data1 , options1 );

$(function()
{
 $(document).ready(function(){




     var ajaxrequest;
     ajaxrequest = $.ajax({
         type:"post",
         datatype:"Json",
         url:"/analysisbymonth/bylinepacking/",
         data: (typeof data ==="Json"? data:null),
         success: function(data) { 

              var mychart = $('#barPacking');
       mychart.get(0).__chartist__.update(data);
      //  for(var i=0; i<data.labels.length;i++)
      //  {
      //    var target = document.getElementById("faultByLineDay");
      //    var newElement = document.createElement("li");
      //    newElement.classList.add("list-group-item");
      //    newElement.textContent = data.labels[i]+"    :    "+ data.series[0][i];
      //    target.appendChild(newElement);
      //  }
       }

       
     }); 
      
     
  
           
 
}); 

});


//Thermal Line
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

new Chartist.Bar('#barThermal', data1 , options1 );

$(function()
{
 $(document).ready(function(){




     var ajaxrequest;
     ajaxrequest = $.ajax({
         type:"post",
         datatype:"Json",
         url:"/analysisbymonth/bylinethermal/",
         data: (typeof data ==="Json"? data:null),
         success: function(data) { 

              var mychart = $('#barThermal');
       mychart.get(0).__chartist__.update(data);
      //  for(var i=0; i<data.labels.length;i++)
      //  {
      //    var target = document.getElementById("faultByLineDay");
      //    var newElement = document.createElement("li");
      //    newElement.classList.add("list-group-item");
      //    newElement.textContent = data.labels[i]+"    :    "+ data.series[0][i];
      //    target.appendChild(newElement);
      //  }
       }

       
     }); 
      
     
  
           
 
}); 

});



//Correction Line
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

new Chartist.Bar('#barCorrection', data1 , options1 );

$(function()
{
 $(document).ready(function(){




     var ajaxrequest;
     ajaxrequest = $.ajax({
         type:"post",
         datatype:"Json",
         url:"/analysisbymonth/bylinecorrection/",
         data: (typeof data ==="Json"? data:null),
         success: function(data) { 

              var mychart = $('#barCorrection');
       mychart.get(0).__chartist__.update(data);
      //  for(var i=0; i<data.labels.length;i++)
      //  {
      //    var target = document.getElementById("faultByLineDay");
      //    var newElement = document.createElement("li");
      //    newElement.classList.add("list-group-item");
      //    newElement.textContent = data.labels[i]+"    :    "+ data.series[0][i];
      //    target.appendChild(newElement);
      //  }
       }

       
     }); 
      
     
  
           
 
}); 

});