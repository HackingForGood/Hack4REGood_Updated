google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        console.log("drawChart function");

        var data = google.visualization.arrayToDataTable([
          ['Year', 'House', 'Apparment'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Price',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('proyectionPrice'));

        chart.draw(data, options);        
        //http://www.zillow.com/webservice/GetZestimate.htm?zws-id=X1-ZWz195iegi5q17_93aho&zpid=4874942
      }