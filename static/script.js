Highcharts.chart('chart', {
  chart: {
    type: 'area',
    animation: Highcharts.svg,
    marginRight: 10,
    events: {
      load: function() {
        const request = window.superagent;
              series = this.series[0];

        setInterval(function () {
          request
            .get('/cpu')
            .end(function(err, res){
              let x = (new Date()).getTime(),
                  y = res.body.cpu_percent;

              series.addPoint([x, y], true, true);
            });
        }, 3000);
      } 
    }
  },
  title: {
    text: 'CPU Usage'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Percentage' 
    } 
  },
  series: [{
    name: 'CPU Usage',
    data: (function () {
      let data = [],
          time = (new Date()).getTime(),
          i;

      for (i=-99; i<=0; i+=1) {
        data.push({
          x: time + i * 1000,
          y: 0
        });
      }
      return data;
    }())
  }]
});
