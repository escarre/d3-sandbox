var d3 = require("d3");
var _ = require('underscore');
require('./bar-graph');
// var dataset =  _.map(_.range(75), function(i){
//   return Math.random() * 100;
// });
//
// var w = 400,
//     h = 300;
//
// var svg = d3.select('#chartArea').append('svg')
//   .attr('width', w).attr('height', h);
//
// var yScale = d3.scale.linear()
//   .domain([0, d3.max(dataset) * 1.1])
//   .range([0, h]);
//
// var xScale = d3.scale.ordinal()
//   .domain(dataset)
//   .rangeBands([0, w], 0.1, 0);
//
// var colorScale = d3.scale.linear()
//   .domain([0, d3.max(dataset)])
//   .range(["orange", "purple"]);
//
//  svg.selectAll('rect')
//    .data(dataset)
//    .enter()
//    .append('rect')
//    .attr('class', 'bar')
//    .attr('x', function (d, i){
//      return xScale(d);
//    })
//    .attr('y', function(d){
//      return h - yScale(d);
//    })
//    .attr('width', xScale.rangeBand())
//    .attr('height',yScale)
//    .attr('fill', colorScale);
