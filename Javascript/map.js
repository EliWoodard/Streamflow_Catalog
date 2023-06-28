window.addEventListener('DOMContentLoaded', (event) => {
    // Create a projection to determine how the map data is converted to screen coordinates
    var projection = d3.geoMercator().scale(150).translate([480, 300]);
  
    // Create a path generator function
    var path = d3.geoPath().projection(projection);
  
    // Create a zoom behavior
    var zoom = d3.zoom().scaleExtent([1, 8]).on('zoom', zoomed);
  
    // Select the SVG element and add a g element
    var svg = d3.select('.interactive-map')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .call(zoom); // add zoom behavior

    var g = svg.append('g'); // group element to apply transformations
  
    // Load map data
    d3.json('Map/world.json').then(function(world) {
      // Draw countries
      g.selectAll('.country')
        .data(world.features)
        .enter().append('path')
        .attr('class', 'country')
        .attr('d', path);
    }).catch(function(error) {
      console.log(error);
    });
  
    // Function to handle zoom event
// Function to handle zoom event
function zoomed() {
    g.attr('transform', d3.event.transform);
}

  
    // Function to add a new point on the map
    function addPoint(longitude, latitude) {
      g.append('circle')
        .attr('cx', projection([longitude, latitude])[0])
        .attr('cy', projection([longitude, latitude])[1])
        .attr('r', '8px')
        .attr('fill', 'red');
    }
});
