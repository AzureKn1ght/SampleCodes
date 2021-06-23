function myFunction() {

var data = [4, 8, 15, 16, 23, 42, 56];
var svg = d3.select("body")
  .append('svg')
  .attr("width",500)
  .attr("height",200);

svg.selectAll("rect") //bar charts
  .data(data)
  .enter().append("rect")            //change the y position, keep the x position
  .attr("transform",function(d, i) { return "translate("+20+","+i*25+")"  }) //Shift the rect based on index
  .attr("fill","blue")
  .attr("height",20)           //change width based on data (multiples of 10px)
  .attr("width", function(d) { return d *10 + "px"; }); //All callback function will have data, index, arr

svg.selectAll("text") //axis labels
.data(data)
.enter().append("text")            //X-position 0 instead of 20 for labels to be on the left
.attr("transform",function(d, i) { return "translate(0,"+Number(i*25+15)+")" }) //Trial/error to get the 15
.attr("fill",'red')                                       //Number here is optional, just to be safe 
.text(function(d) { return d  });

//Transition 
var t = d3.transition()
   .delay(2000).duration(2000);
d3.selectAll("rect")
   .transition(t)
   .style("fill", "red");

}