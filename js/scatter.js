var dataset =  _.map(_.range(25), function(i){
  return {
    x: Math.round(Math.random() * 100),
    y: Math.round(Math.random() * 100),
    r: Math.round(Math.random() * 10)
  }
});

function steppedTransition(selection){
  selection.transition()
  .duration(500)
  .attr('cx', function (d){
    return xScale(d.x);
  })
  .transition()
  .duration(500)
  .ease('elastic')
  .delay(function(d,i){
    return i * 25;
  })
  .attr('cy', function(d){
    return yScale(d.y);
  })
  .transition()
  .duration(500)
  .attr('r', function(d){
    return d.r;
  })
  .style('fill', 'purple')
}

function plainTransition(selection){
  selection.transition()
  .duration(500)
  .attr('cx', function (d){
    return xScale(d.x);
  })
  .attr('cy', function(d){
    return yScale(d.y);
  })
  .attr('r', function(d){
    return d.r;
  })
  .style('fill', 'purple')
}

function newData(d){
  d.x = Math.round(Math.random() * 100),
  d.y = Math.round(Math.random() * 100),
  d.r = Math.round(5 + Math.random() * 10)
}

function update (){

  svg.selectAll('circle')
    .filter(function(d){
      return d.x <50;
    })
    .each(newData)
    .call(steppedTransition);

    svg.selectAll('circle')
      .filter(function(d){
        return d.x > 50;
      })
      .each(newData)
      .call(plainTransition);
}

var margin = {top:20, right: 20, bottom: 60, left: 60};
var w = 500 - margin.left - margin.right,
    h = 400 - margin.top - margin.bottom;

var svg = d3.select('#chartArea').append('svg')
  .attr('width', w + margin.left +margin.right)
  .attr('height', h +margin.top + margin.bottom)
  .append('g')
  .attr('class', 'y axis')
  .attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

var xScale = d3.scale.linear()
    .domain([0, 100])
    .range([0, w]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom')
    .ticks(5)
    .innerTickSize(6)
    .outerTickSize(12)
    .tickPadding(12);

svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0, '+ (h+0) +')')
    .call(xAxis);

var yScale = d3.scale.linear()
  .domain([0, 100])
  .range([h, 0]);

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left');

svg.append('g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(0,0)')
    .call(yAxis);

 svg.selectAll('circle')
   .data(dataset)
   .enter()
   .append('circle')
   .attr('class', 'dot')
   .attr('cx', function (d, i){
     return xScale(d.x);
   })
   .attr('cy', function(d){
     return yScale(d.y);
   })
   .attr('r', function(d){
     return d.r;
   })
   .on('mouseover', function(d){
     d3.select(this).classed('active', true);
   })
   .on('mouseout', function(d){
     d3.select(this).classed('active', false);
   })
   .on('mousedown', function(d){
     d3.select(this).attr('r', d.r *2);
   })
   .on('mouseup', function(d){
     d3.select(this).attr('r', d.r);
   });
