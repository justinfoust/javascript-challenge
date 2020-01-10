///---------------------------------------------------------///
///   Python Challenge HW  --  UFO Finder                   ///
///   Justin Foust  --  01/09/2020  --  Data Boot Camp      ///
///---------------------------------------------------------///


// from data.js
var tableData = data;

// Select HTML element to modify
tbody = d3.select("#table_entries");

// Define function to insert data as HTML table into selected HTML element
function insertRows(dataInput) {
    dataInput.forEach((sightings) => {
        var row =  tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Insert all data
insertRows(tableData)

var button = d3.select("#filter-btn");  // Select button element

// Set different filter elements to variables
var datetimeFilter = d3.select("#datetime");
var cityFilter = d3.select("#city");
var stateFilter = d3.select("#state");
var countryFilter = d3.select("#country");
var shapeFilter = d3.select("#shape");


// When button is clicked...
button.on("click", function() {
// Clear currently listed table data
    tbody.html("");
    
// Reference dataset and set to varibale
    var filterData = tableData
    
// Set values within each filter fields to respective variables
    var datetimeParam = datetimeFilter.property("value");
    var cityParam = cityFilter.property("value");
    var stateParam = stateFilter.property("value");
    var countryParam = countryFilter.property("value");
    var shapeParam = shapeFilter.property("value");
    
// Each if statment runs only if a field is not empty
// Filter referenced dataset variable and return it as the same variable name

    if (datetimeParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.datetime == datetimeParam
        });
    }
    
    if (cityParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.city == cityParam
        });
    }
    
    if (stateParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.state == stateParam
        });
    }
    
    if (countryParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.country == countryParam
        });
    }
    
    if (shapeParam != "") {
        var filterData = filterData.filter(dataEntry => {
            return dataEntry.shape == shapeParam
        });
    }
    
// After all filters are applied (or none) return remaining data

    insertRows(filterData);
});