<html>
<head>
    <script type="text/javascript" src="../js/data.js"></script>
    <script type="text/javascript" src="../js/wizard.js"></script>

    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>

    <script type="text/javascript">
        // Load the Visualization API and the piechart package.
        google.load('visualization', '1.1', {packages: ['corechart']});
    </script>
    <script type="text/javascript">


        // Set a callback to run when the Google Visualization API is loaded.
        google.setOnLoadCallback(function () {
            drawChart();
            drawChart1(pieChartArrayData);
            drawvBarChart(vBarChartData);
            drawhBarChart(vBarChartData);
        });

    </script>
</head>

<body>
<!--Div that will hold the pie chart-->
<h3>Creating Single column and rows at a time</h3>

<div id="pie-chart"></div>

<h3>Having rows created on the basis of data</h3>

<div id="pie-chart1"></div>

<h3>bar chart - horizontal</h3>

<div id="bar-chart-h"></div>

<h3>bar chart - vertical</h3>

<div id="bar-chart-v"></div>

</body>
</html>