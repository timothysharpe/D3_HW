//Load CSV data for manipulating with D3
d3.csv("data.csv", function(error, healthData) {
    if(error) return console.warn(error)
});

console.log(healthData);

//Create SVG wrapper and set dimensions of the plot
let svgHeight = 660;
let svgWidth = 960;

let chartMargin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  };

let chartWidth = svgWidth - chartMargin.left - chartMargin.right;
let chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

let svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
