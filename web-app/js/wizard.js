function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(pieChartData);

    // Set chart options
    var options = pieChartOptions;

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    chart.draw(data, options);
}

function drawChart1(chartData) {
    // Create the data table.
    var data = google.visualization.arrayToDataTable(chartData);
    // Set chart options
    var options = DonutChartOptions;

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie-chart1'));
    chart.draw(data, options);
}

function drawvBarChart(chartData) {
    var data = google.visualization.arrayToDataTable(chartData);

    var options = {
        title: 'Company Performance',
        vAxis: {title: 'Year', titleTextStyle: {color: 'red'}},
//        hAxis: {title: 'Sales', titleTextStyle: {color: 'pink'}},
//        vAxis: {title: title.toTitleCase()}, // use capitalize
//        hAxis: {title: generalizedResolution.toTitleCase()}, // use capitalize
        height: '350',
        width: '60%',
        focusTarget: 'category',
        tooltip: {isHtml: true},
        pointSize: 5,
        'chartArea': {'width': '60%'},
        orientation: 'horizontal', //this will change the bar chart to column chart
        dataOpacity: 0.85
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar-chart-v'));

    chart.draw(data, options);
}

function drawhBarChart(chartData) {
    var data = google.visualization.arrayToDataTable(chartData);

    var options = {
        title: 'Company Performance',
        vAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar-chart-h'));

    chart.draw(data, options);
}

function drawLineChart(chartData) {
    var data = google.visualization.arrayToDataTable(chartData);

    var options = {
        title: 'Company Performance'
    };

    var chart = new google.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data, options);
}

function drawVisualization(chartData) {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable(chartData);

    var options = {
        title: 'Monthly Coffee Production by Country',
        vAxis: {title: "Cups"},
        hAxis: {title: "Month"},
        seriesType: "bars",
        series: {5: {type: "line"}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('combo-chart'));
    chart.draw(data, options);
}