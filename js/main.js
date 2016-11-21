// JavaScript Document

(function() {
	console.log("SEAF fired");
	"use strict";

// creating json elements or data
var theData =[
{ "x_axis": 0,   "height":12,"name": "  Pico Teide"},

{ "x_axis": 30,   "height":24,"name": "Cerro Aconcagua"},

{ "x_axis": 60,  "height":36,"name": "Denali"},

{ "x_axis": 90,   "height":48,"name": "Kilimanjaro"},

{ "x_axis": 120,  "height":60,"name": "  Cristobal Colon"},

{ "x_axis": 150,   "height":72,"name": "Mount Logan"},

{ "x_axis": 180,   "height":84,"name": "  Citlaltepetl"},

{ "x_axis": 210, "height":96,"name": "Mount Vinson"},

{ "x_axis": 240,   "height":108,"name": " Puncak Jaya"},

{ "x_axis": 270,  "height":120,"name": " Gora Elbrus"},

{ "x_axis": 300,  "height":132,"name": "Mount Blanc"},

{ "x_axis": 330,   "height":144,"name": "Damavand"},

{ "x_axis": 360,  "height":156,"name": " Klyuchevskaya"},

{ "x_axis": 390,   "height":168,"name": "Nanga Parbat"},

{ "x_axis": 420,  "height":180,"name": " Mauna Kea"},

{ "x_axis": 450,  "height":192,"name": "Jengish Chokusu"},

{ "x_axis": 480,   "height":204,"name": "Chimborazo"},

{ "x_axis": 510,  "height":216,"name":"Bogda Shan"},

{ "x_axis": 540,   "height":228,"name": " Namcha Barwa  "},

{ "x_axis": 570,  "height":240,"name": "Kinabalu"},

{ "x_axis": 600,  "height":260,"name": "Mount Everest "},

{ "x_axis": 630,   "height":240,"name": "Mount Rainier"},

{ "x_axis": 660,  "height":228,"name": " K2"},

{ "x_axis": 690,   "height":216,"name": " Ras Dashen"},

{ "x_axis": 720,  "height":204,"name": "Tajumulco"},

{ "x_axis": 750,  "height":192,"name": "  Pico Bolivar"},

{ "x_axis": 780,   "height":180,"name": " Mount Fairweather"},

{ "x_axis": 810,  "height":168,"name": " Yü Shan"},

{ "x_axis": 840,   "height":156,"name": "Margherita"},

{ "x_axis": 870,  "height":144,"name": "Kangchenjunga"},

{ "x_axis": 900,  "height":132,"name": "Tirich Mir"},

{ "x_axis": 930,   "height":120,"name": " Mount Cameroon"},

{ "x_axis": 960,  "height":108,"name": "Mount Kenya"},

{ "x_axis": 990,   "height":96,"name": "Gunung Kerinci"},

{ "x_axis": 1020,  "height":84,"name":"Mount Erebus"},

{ "x_axis": 1050,  "height":72,"name": "Mount Fuji"},

{ "x_axis": 1080,   "height":60,"name": "Jebel Toubkal"},

{ "x_axis": 1110,  "height":48,"name": " Mount Cook"},

{ "x_axis": 1140,   "height":36,"name": "Cerro Chirripo"},

{ "x_axis": 1170,  "height":24,"name": "Gunung Rinjani"},

{ "x_axis": 1200,  "height":12,"name": "Pico Teide"}

];
// creating svg with dimensions
   
var svgContainer =  d3.select("body")
                      .append("svg")
                      .attr("width", 1230)
                      .attr("height", 500)

                      .style("stroke", "black")
                      .style("stroke-width", 3);
//appending text to svg at the top

              svgContainer.append("text")
                      .style("font-size", "26px")
                      .style("stroke-width", 0) //make text not bold
                      .attr("class", "topText")
                      .attr("text-anchor", "middle") 
                      .attr("transform", "translate(615,460) rotate(180)")//set rotation because svg is rotated
                      .text("This page shows you largest mountain peaks all around world.");

                 svgContainer.append("text")
                      .style("font-size", "26px")
                      .style("stroke-width", 0) 
                      .attr("class", "topText")
                      .attr("text-anchor", "middle") //brings text to center align
                      .attr("transform", "translate(615,420) rotate(180)")         
                       .text("Go to circle and you will see the name of the mountain it represents!");
// drawing rectangles in svg with trasition

var rectangle = svgContainer.selectAll(".rect")
                            .data(theData)
                            .enter()
                            .append("rect")  
                            .attr("x", function (d) { return d.x_axis; })
                            .attr("y", 30)
                            .attr("width", 30)
                            .attr("height", 0)
                            .transition()// transition from 0 to the desired height
                            .duration(300)
                            .delay(function (d, i) {return i * 50;})
                            .attr("height", function (d) { return d.height })
                            .attr("fill", function() {return "hsl(" + Math.random() * 360 + ",90%,60%)" });
// drawing circles with transition and text(name) 

var circles = svgContainer.selectAll("circle")
                          .data(theData)
                          .enter()
                          .append("circle")
                          .on('mouseover', function(d) {//mouse on circle event
                          svgContainer.append("text")
                          .style("font-size", "26px")
                          .style("stroke-width", 0) 
                          .attr("text-anchor", "middle")
                          .attr("id", "myText")
                          .attr("transform", "translate(615,350) rotate(180)")
                          .text(d.name); })
                          .on("mouseout", function(d) { d3.select("#myText").remove(); })//mouse out of the circle event
                          .attr("cx", function (d) { return 15 + d.x_axis; })
                          .attr("cy", 0)
                          .attr("r", 10 )
                          .attr("fill", function() {return "hsl(" + Math.random() * 360 + ",90%,60%)" })
                          .transition()
                          .duration(10000)
                          .attr("cy", function (d) { return 45 + d.height; });



            


  
})();