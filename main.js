var dataSet =  [Math.floor((Math.random()*2000)+1),
 Math.floor((Math.random()*800)+200),
 Math.floor((Math.random()*800)+200)];

var width = 500;
var height = 200;


//Scales

var xScale = d3.scale.linear()
  .domain([0, d3.max(dataSet)])
  .range([0, width]);

var yScale = d3.scale.ordinal()
  .domain(d3.range(dataSet.length))
  .rangeRoundBands([0, height], 0.05);

var svg = d3.select('#barChart')
  .append('svg')
  .attr('width', width)
  .attr('height', height);


svg.selectAll('rect')
  .data(dataSet)
  .enter()
  .append('rect')
  .attr('x', 0)
  .attr("y", function(d, i) {
		return yScale(i)
	})
  .attr('width', function(d){
    return xScale(d)
  })
  .attr('height', yScale.rangeBand())
  .attr('fill', '#669776');


  /*.on("mouseover", function() {
      d3.select(this).classed("highlight", true);
  })
  .on("mouseout", function() {
      d3.select(this).classed("highlight", false);
  });*/
