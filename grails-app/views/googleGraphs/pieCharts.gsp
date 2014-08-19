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
        });

    </script>
</head>

<body>
<!--Div that will hold the pie chart-->
<div id="pie-chart"></div>

<div id="pie-chart1"></div>
</body>
</html>