// from data.js
var tableData = data;
var tbody = d3.select("tbody")

// YOUR CODE HERE!
tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(
        function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        }
    );
});

var button = d3.select('#filter-btn');

button.on("click", runenter);

function runenter() {
    d3.event.preventDefault();
    d3.select(".summary").html("");
    
    var input = d3.select('#datetime');
    var inputValue = input.property('value');
    var filteredData = tableData.filter(dateTime => dateTime.datetime === inputValue);

    filteredData.forEach(function(filteredufoSightings) {
        var row = tbody.append("tr");
        Object.entries(filteredufoSightings).forEach(
            function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            }
        );
    });
};