var jsonCircles = [
  { x_axis: 100, y_axis: 150 },
  { x_axis: 200, y_axis: 200 },
  { x_axis: 50, y_axis: 200 },
  { x_axis: 70, y_axis: 40 },
  { x_axis: 220, y_axis: 60 }
];

    var svgContainer = d3.select("body").append("svg")
                                       .attr("width", 500)
                                        .attr("height", 500);
    
    var circles = svgContainer.selectAll("circle")
                             .data(jsonCircles) //place holder 
                             .enter() //reference
                              .append("circle") //3 circles
    
    //var circleAttributes = circles
                           .attr("cx", function (d) { return d.x_axis; })
                           .attr("cy", function (d) { return d.y_axis; })
                           .attr("r", 20)
                           .style("fill", "blue");
    