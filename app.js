var ctx = document.getElementById('areaChart');


function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', '/val.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function init() {
    loadJSON(function(response) {
     // Parse JSON string into object
        data = JSON.parse(response);
       var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['120','115','110','105','100','95','90','80','75','70','65','60','55','50','45','40','35','30', '25', '20', '15', '10', '5', '0'],
            datasets: [{
                label: 'CPU Load %',
                data: data.data,
                backgroundColor     : 'rgba(60,141,188,0.5)',
                borderColor         : 'rgba(60,141,188,0.5)',
                pointRadius          : false,
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes : [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                      }
                }]
                
            }
        }
    });
    });
   }

init();