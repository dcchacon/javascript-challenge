// from data.js
var tableData = data;
// console.log(tableData)

// Get reference to the table body
var tbody = d3.select("tbody");

//Loop through data and console.log each ufoSighting
const buildTable = (data) => {
    tbody.html("")

    data.forEach(function (ufoSighting) {
        // console.log(ufoSighting);
        //Append one table row "tr" for each ufoSighting objet
        var row = tbody.append("tr");

        //Use "Object.entries" to console.log each ufoSighting value
        Object.values(ufoSighting).forEach(function (value) {
            // console.log(value);
            //Append a cell to the row for each value in the ufoSighting report object
            var cell = row.append("td");
            //update each cell's text with the ufoSighting values 
            //(Data, City, State, Country, Shape, Duration, and Comments)
            cell.text(value);
        });
    });
}

//Getting reference to the button on the page with the id property to set to "filter-btn"
var button = d3.selectAll("#filter-btn");

const handleClick = () => {
    //select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    //console.log the input value
    // console.log('!!!!!', inputValue);

    //If filter empty - refresh table
    if (!inputValue) {
        return buildTable(tableData)
    }

    //Filter data
    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    //console.log filter data
    // console.log(filterData);

    buildTable(filterData)

}

button.on("click", handleClick)

buildTable(tableData)