let dayBtn = document.getElementById("swap-graph-day")
let weekBtn = document.getElementById("swap-graph-week")
let monthBtn = document.getElementById("swap-graph-month")
let yearBtn = document.getElementById("swap-graph-year")
let coinsName = document.getElementById("swap-coins-name-p")
let coinsName2 = document.getElementById("swap-coins-name-p2")
let graphIcons = document.getElementById("swap-graph-icons")
let iconsSwapBtn = document.getElementById("swap-coins-name-btn")
let chartValue = document.getElementById('swap-coin-value')
let chartData = document.getElementById('swap-chart-data')
let chartTime = document.getElementById('swap-chart-time')
let chartYear = document.getElementById('swap-chart-year')
let chartPercent = document.getElementById('swap-coins-percent')
let chart1 = document.getElementById('firstChart')
let chart2 = document.getElementById('secondChart')
let chart3 = document.getElementById('thirdChart')
let chart4 = document.getElementById('fourthChart')
let chart5 = document.getElementById('fifthChart')
let chart6 = document.getElementById('sixthChart')
let chart7 = document.getElementById('seventhChart')
let chart8 = document.getElementById('eighthChart')
let swapChartDiv = document.getElementById('swap-graph-chart-div')
let swapChartBg = document.getElementById('graph-bg')
let graphVisibilityBtn = document.getElementById('graph-visibility-btn')
let cardBtn1Img = document.getElementById('card-btn1-img')
let firstInput = document.getElementById('first-input')
let secondInput = document.getElementById('second-input')
let firstInput_p = document.getElementById('first-input-p')
let secondInput_p = document.getElementById('second-input-p')
let inputSwitchBtn = document.getElementById('input-switch-btn')
let titleInput1 = document.getElementById('title-input1')
let titleInput2 = document.getElementById('title-input2')
let arrowDown = document.getElementById('arrow-down')
let lowRiskDiv = document.getElementById('low-risk-div')
let swapSettingsBtn = document.getElementById('swap-settings-btn')
let chartContainer = document.getElementById('container')
let sizeChangerImg = document.getElementById('size-changer-img')
let swapSection = document.getElementById('swap-section')
let contentFooter = document.getElementById('content-footer')

cardBtn1Img.src = './assets/swap11.svg'


contentFooter.style.display = 'flex'

var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

swapSettingsBtn.addEventListener('click', () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
})

span.onclick = function () {
  modal.style.display = "none";
  body.style.overflow = "unset";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "unset";
  }
};


//    Chart

let chartHeight = chartContainer.clientHeight - 32

let a = 300

gradient1 = document.getElementById('firstChart').getContext("2d").createLinearGradient(0, 0, 0, chartHeight);
gradient1.addColorStop(0, '#32e9b4');
gradient1.addColorStop(1, '#393440');

gradient2 = document.getElementById('fourthChart').getContext("2d").createLinearGradient(0, 0, 0, chartHeight);
gradient2.addColorStop(0, '#e9479d');
gradient2.addColorStop(1, '#393440');


const horizontalArbitraryLine = {
    id: 'horizontalArbitraryLine',
    beforeDraw(chart, args, option) {
        const {ctx, chartArea: { top, right, bottom, left, width, height }, scales: {x,y}} = chart;
        ctx.save();
        ctx.strokeStyle = '#32e9b4';
        ctx.strokeRect (left, chart.getDatasetMeta(0).data[24].y, width, 0);
        ctx.setLineDash([2,3])
    }
}

const myEventCatcher = {
    id: 'myEventCatcher',
    beforeEvent(chart, args, pluginOptions) {
        const event = args.event;
        if (event.type === 'mouseout') {
            chartData.innerText = 'Mar 4'
            chartTime.innerText = '09:25 PM'
            chartYear.innerText = '2032'

            if (coinsName.innerText == 'BNB/CAKE') {
                chartValue.innerText = '77.09'
            }
            else {
                chartValue.innerText = '0.013'
            }
        }
    }
}

const hoverValue = {
    id: 'hoverValue',
    afterDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data, options } = chart;
        // console.log(chart)
        chart.getActiveElements().forEach((active) => {
            let act = active.index
            // console.log(chart)

            if (coinsName.innerText == 'BNB/CAKE') {
                chartValue.innerText = data.datasets[0].data[active.index]
            }

            if (act < 3) {
                chartData.innerText = 'Mar 3'
            }
            else {
                chartData.innerText = 'Mar 4'
            }

            if (act < 3) {
                chartTime.innerText = `${act + 9}:00 PM`
            }
            else if (act == 3) {
                chartTime.innerText = `${act + 9}:00 AM`
            }
            else if (act < 15) {
                chartTime.innerText = `${act - 3}:00 AM`
            }
            else if (act == 15) {
                chartTime.innerText = `${act - 3}:00 PM`
            }
            else {
                chartTime.innerText = `${act - 15}:00 PM`
            }
            
            if (chart2.style.visibility == 'visible' || chart6.style.visibility == 'visible') {
                if (act < 4) {
                    chartData.innerText  = 'Feb 26'
                }
                else if (act < 8){
                    chartData.innerText  = 'Feb 27'
                }
                else if (act < 12){
                    chartData.innerText  = 'Feb 28'
                }
                else if (act < 16){
                    chartData.innerText  = 'Mar 1'                  
                }
                else if (act < 20){
                    chartData.innerText  = 'Mar 2'           
                }
                else if (act < 24){
                    chartData.innerText  = 'Mar 3'                  
                }
                else {
                    chartData.innerText  = 'Mar 4'          
                }

                if (act == 0 || act == 4 || act == 8 || act == 12 || act == 16 || act == 20 || act == 24) {
                    chartTime.innerText  = '03:00 AM'          
                }
                else if (act == 1 || act == 5 || act == 9 || act == 13 || act == 17 || act == 21 || act == 25) {
                    chartTime.innerText  = '09:00 AM'          
                }
                else if (act == 2 || act == 6 || act == 10 || act == 14 || act == 18 || act == 22 || act == 26) {
                    chartTime.innerText  = '03:00 PM'          
                }
                else {
                    chartTime.innerText  = '09:00 PM'          
                }
            }
            else if (chart3.style.visibility == 'visible' || chart7.style.visibility == 'visible') {
                    chartTime.innerText  = '09:00 PM'          

                if (act < 25) {
                    chartData.innerText = `Feb ${act + 4}`
                }
                else {
                    chartData.innerText = `Mar ${act - 24}`
                }
            }
            else if (chart4.style.visibility == 'visible' || chart8.style.visibility == 'visible') {
                chartTime.innerText  = '09:00 PM'          

                if (act < 20) {
                    chartYear.innerText = '2022'
                }
                else {
                    chartYear.innerText = '2023'
                }

                let arr = ['Mar 9', 'Mar 24', 'Apr 8', 'Apr 23', 'May 8', 'May 23', 'Jun 7', 'Jun 22', 'Jul 7', 'Jul 22', 'Aug 6', 'Aug 21', 'Sep 5', 'Sep 20', 'Oct 5', 'Oct 20', 'Nov 4', 'Nov 19', 'Dec 4', 'Dec 19', 'Jan 3', 'Jan 18', 'Feb 2', 'Feb 17', 'Mar 4']

                let val = arr[act]

                chartData.innerText = val
            }
    
            if (coinsName.innerText == 'CAKE/BNB') {
                if (chart7.style.visibility == 'visible') {
                    if (act < 7 && act !=0) {
                        chartValue.innerText = '0.014'
                    }
                    else if (act == 8) {
                        chartValue.innerText = '0.014'
                    }
                    else {
                        chartValue.innerText = '0.013'
                    }
                }

                if (chart8.style.visibility == 'visible') {
                    if (act == 0) {
                        chartValue.innerText = '0.017'
                    }
                    else if (act == 1 || act == 3) {
                        chartValue.innerText = '0.020'
                    }
                    else if (act == 2) {
                        chartValue.innerText = '0.023'
                    }
                    else if (act == 6 || act == 7 || act < 19 && act > 14) {
                        chartValue.innerText = '0.014'
                    }
                    else if (act == 4 || act == 5 || act == 11) {
                        chartValue.innerText = '0.015'
                    }
                    else if (act > 11 && act < 15) {
                        chartValue.innerText = '0.016'
                    }
                    else if (act == 20) {
                        chartValue.innerText = '0.012'
                    }
                    else {
                        chartValue.innerText = '0.013'
                    }
                }
            }
            

            if (chart.tooltip?._active?.length) {
                let x = chart.tooltip._active[0].element.x;
                let y = chart.tooltip._active[0].element.y;
                let yAxis = chart.scales.y;
                let xAxis = chart.scales.x;
                let ctx = chart.ctx;
                // console.log(xAxis)
                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([6,6])
                ctx.moveTo(x, yAxis.top);
                ctx.lineTo(x, yAxis.bottom);
                ctx.lineWidth = 0;
                ctx.strokeStyle = 'white';
                ctx.stroke();

                ctx.beginPath();
                ctx.setLineDash([6,6])
                ctx.moveTo(xAxis.left, y);
                ctx.lineTo(xAxis.right, y);
                
                ctx.strokeStyle = 'lightgray';  
                ctx.stroke();
                ctx.restore();
            }
        })
    }
} 

const options = {

    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: false
        },  

        tooltip: {
            enabled: false
        }
    },

    interaction: {
        intersect: false,
        mode: 'index'
    },
    
    elements: {
        point:{
            radius: 0
        }
    },

    scales: {
        y: {
            min: 76.10,
            max: 77.10,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                display: false
            },
            stacked: true,
            ticks: {
                // display: false,
                color: 'white',
                font: {
                    size: 11
                },
                padding: 15,
                stepSize: 0.20
            }
        },

        x: {
            grid: {
                drawOnChartArea: false,
                display: false
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                color: 'white',
                font: {
                    size: 11
                }
            }
        }
    }
}

const options2 = {

    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },  

        tooltip: {
            enabled: false
        }
    },

    interaction: {
        intersect: false,
        mode: 'index'
    },
    
    elements: {
        point:{
            radius: 0
        }
    },

    scales: {
        y: {
            min: 75.0,
            max: 77.50,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                display: false
            },
            stacked: true,
            ticks: {
                color: 'white',
                font: {
                    size: 11
                },
                padding: 15,
                stepSize: 0.5
            }
        },

        x: {
            grid: {
                drawOnChartArea: false,
                display: false
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                color: 'white',
                font: {
                    size: 11
                }
            }
        }
    }
}

const options3 = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },  

        tooltip: {
            enabled: false
        }
    },

    interaction: {
        intersect: false,
        mode: 'index'
    },
    
    elements: {
        point:{
            radius: 0
        }
    },

    scales: {
        y: {
            min: 69.0,
            max: 78,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                display: false
            },
            stacked: true,
            ticks: {
                color: 'white',
                font: {
                    size: 11
                },
                padding: 15,
                stepSize: 1
            }
        },

        x: {
            grid: {
                drawOnChartArea: false,
                display: false
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                color: 'white',
                font: {
                    size: 11
                }
            }
        }
    }
}

const options4 = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },  

        tooltip: {
            enabled: false
        }
    },

    interaction: {
        intersect: false,
        mode: 'index'
    },
    
    elements: {
        point:{
            radius: 0
        }
    },

    scales: {
        y: {
            min: 35,
            max: 85,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                display: false
            },
            stacked: true,
            ticks: {
                color: 'white',
                font: {
                    size: 11
                },
                padding: 15,
                stepSize: 10
            }
        },

        x: {
            grid: {
                drawOnChartArea: false,
                display: false
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                color: 'white',
                font: {
                    size: 11
                }
            }
        }
    }
}

const options5 = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },  

        tooltip: {
            enabled: false
        }
    },

    interaction: {
        intersect: false,
        mode: 'index'
    },
    
    elements: {
        point:{
            radius: 0
        }
    },

    scales: {
        y: {
            display: false,
            min: 22.9,
            max: 23.9,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                display: false
            },
            stacked: true,
            ticks: {
                color: 'white',
                font: {
                    size: 11
                },
                padding: 50,
                stepSize: 10
            }
        },

        x: {
            grid: {
                drawOnChartArea: false,
                display: false
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                color: 'white',
                font: {
                    size: 11
                }
            }
        }
    }
}

const options6 = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },  

        tooltip: {
            enabled: false
        }
    },

    interaction: {
        intersect: false,
        mode: 'index'
    },
    
    elements: {
        point:{
            radius: 0
        }
    },

    scales: {
        y: {
            display: false,
            min: 22.5,
            max: 25,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                display: false
            },
            stacked: true,
            ticks: {
                color: 'white',
                font: {
                    size: 11
                },
                padding: 15,
                stepSize: 10
            }
        },

        x: {
            grid: {
                drawOnChartArea: false,
                display: false
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                color: 'white',
                font: {
                    size: 11
                }
            }
        }
    }
}

const options7 = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },  

        tooltip: {
            enabled: false
        }
    },

    interaction: {
        intersect: false,
        mode: 'index'
    },
    
    elements: {
        point:{
            radius: 0
        }
    },

    scales: {
        y: {
            display: false,
            min: 22,
            max: 31,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                display: false
            },
            stacked: true,
            ticks: {
                color: 'white',
                font: {
                    size: 11
                },
                padding: 15,
                stepSize: 10
            }
        },

        x: {
            grid: {
                drawOnChartArea: false,
                display: false
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                color: 'white',
                font: {
                    size: 11
                }
            }
        }
    }
}

const options8 = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },  

        tooltip: {
            enabled: false
        }
    },

    interaction: {
        intersect: false,
        mode: 'index'
    },
    
    elements: {
        point:{
            radius: 0
        }
    },

    scales: {
        y: {
            display: false,
            min: 15,
            max: 65,
            position: 'right',
            grid: {
                drawOnChartArea: false,
                display: false
            },
            stacked: true,
            ticks: {
                color: 'white',
                font: {
                    size: 11
                },
                padding: 15,
                stepSize: 10
            }
        },

        x: {
            grid: {
                drawOnChartArea: false,
                display: false
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                color: 'white',
                font: {
                    size: 11
                }
            }
        }
    }
}

// -------------------------------------------------

const data1 = {
    labels: ['9:00 PM', '', '', '12:00 AM', '', '', '3:00 AM', '', '', '6:00 AM', '', '', '9:00 AM', '', '', '12:00 PM', '', '','3:00 PM' , '', '', '6:00 PM', '', '', '9:00 PM'],
    datasets: [{
        label: '',
        data: [76.65, 76.66, 76.66, 76.22, 76.22, 76.31, 76.32, 76.31, 76.31, '76.50', 76.51, 76.51, 76.42, 76.41, 76.44, 76.46, 76.44, 76.43, '76.40', 76.41, '76.40', 76.46, 76.45, 76.46, 77.09],
        borderWidth: 1.5,
        borderColor: '#32e9b4',
        fill: true,
        backgroundColor: gradient1,
        pointBackgroundColor: '#32e9b4',
        pointHoverRadius: 3,
    }],
}

if (swapSection.clientWidth < 1150) {
    data1.labels = ['9:00 PM', '', '', '', '', '', '3:00 AM', '', '', '', '', '', '9:00 AM', '', '', '', '', '','3:00 PM' , '', '', '', '', '', '9:00 PM']
}

const config1 = {
    type: 'line',
    data: data1,
    options,

    // plugins: [horizontalArbitraryLine], 
    plugins: [hoverValue, myEventCatcher],
}

const firstChart = new Chart(
    document.getElementById('firstChart'),
    config1
);

// -------------------------------------------------

const data2 = {
    labels: ['Feb 26', '', '', '', 'Feb 27', '', '', '', 'Feb 28', '', '', '', 'Mar 01', '', '', '', 'Mar 02','' , '', '', 'Mar 03', '', '', '', 'Mar 04', '', '', ''],
    datasets: [{
        label: '',
        data: [75.32, 75.38, 75.39, 75.69, '76.00', 76.23, 76.11, 76.12, 76.19, 76.13, '76.38', 76.53, 76.64, 76.77, 76.59, 76.53, 76.66, 76.31, 76.30, 76.44, '76.40', 76.57, 76.25, 77.21, 77.23, 77.14, 77.18, 77.09],
        borderWidth: 1.5,
        borderColor: '#32e9b4',
        fill: true,
        backgroundColor: gradient1,
        pointBackgroundColor: '#32e9b4',
        pointHoverRadius: 3,
    }],
}


const config2 = {
    type: 'line',
    data: data2,
    options: options2,

    // plugins: [horizontalArbitraryLine], 
    plugins: [hoverValue, myEventCatcher],
}

const secondChart = new Chart(
    document.getElementById('secondChart'),
    config2
);

// -------------------------------------------------

const data3 = {
    labels: ['Feb 04', '', '', '', 'Feb 08', '', '', '', 'Feb 12', '', '', '', 'Feb 16','' , '', '', 'Feb 20', '', '', '', 'Feb 24', '', '', '', 'Feb 28', '', '', '', 'Mar 04'],
    datasets: [{
        label: '',
        data: [76.07, 73.03, 74.05, 73.20, 72.95, 70.05, 73.29, '74.20', 74.05, 74.85, 74.61, 74.91, 74.65, 76.11, 75.18, 74.97, 74.71, 74.59, 75.09, 75.69, 75.83, 75.38, 76.12, 76.09, 76.69, 76.42, 76.47, 77.02, 77.09],
        borderWidth: 1.5,
        borderColor: '#32e9b4',
        fill: true,
        backgroundColor: gradient1,
        pointBackgroundColor: '#32e9b4',
        pointHoverRadius: 3,
    }],
}

const config3 = {
    type: 'line',
    data: data3,
    options: options3,

    // plugins: [horizontalArbitraryLine], 
    plugins: [hoverValue, myEventCatcher],
}

const thirdChart = new Chart(
    document.getElementById('thirdChart'),
    config3
);

// -------------------------------------------------

const data4 = {
    labels: ['Mar 09', '', '', '', 'May 08', '', '', '', 'Jul 07','' , '', '', 'Sep 5', '', '', '', 'Nov 04', '', '', '', 'Jan 03', '', '', '', 'Mar 04'],
    datasets: [{
        label: '',
        data: [58.03, 50.19, 43.12, 50.65, 66.16, 65.05, 70.97, '73.90', 78.22, 75.77, '76.60', 66.57, 61.41, 62.84, 61.11, 71.65, 71.31, 73.15, 72.01, 76.98, 81.07, 78.21, 75.18, 76.76, 77.09],
        borderWidth: 1.5,
        borderColor: '#32e9b4',
        fill: true,
        backgroundColor: gradient1,
        pointBackgroundColor: '#32e9b4',
        pointHoverRadius: 3,
    }],
}

const config4 = {
    type: 'line',
    data: data4,
    options: options4,

    // plugins: [horizontalArbitraryLine], 
    plugins: [hoverValue, myEventCatcher],
}

const fourthChart = new Chart(
    document.getElementById('fourthChart'),
    config4
);

// -------------------------------------------------

const data5 = {
    labels: ['9:00 PM', '', '', '12:00 AM', '', '', '3:00 AM', '', '', '6:00 AM', '', '', '9:00 AM', '', '', '12:00 PM', '', '','3:00 PM' , '', '', '6:00 PM', '', '', '9:00 PM'],
    datasets: [{
        label: '',
        data: [23.35, 23.34, 23.34, 23.78, 23.78, 23.69, 23.68, 23.69, 23.69, 23.50, 23.49, 23.49, 23.58, 23.59, 23.56, 23.54, 23.56, 23.57, 23.60, 23.59, 23.60, 23.54, 23.55, 23.54, 22.91],
        borderWidth: 1.5,
        borderColor: '#e9479d',
        fill: true,
        backgroundColor: gradient2,
        pointBackgroundColor: '#e9479d',
        pointHoverRadius: 3,
    }],
}

if (swapSection.clientWidth < 1150) {
    data5.labels = ['9:00 PM', '', '', '', '', '', '3:00 AM', '', '', '', '', '', '9:00 AM', '', '', '', '', '','3:00 PM' , '', '', '', '', '', '9:00 PM']
}

const config5 = {
    type: 'line',
    data: data5,
    options: options5,

    // plugins: [horizontalArbitraryLine], 
    plugins: [hoverValue, myEventCatcher],
}

const fifthChart = new Chart(
    document.getElementById('fifthChart'),
    config5
);

// -------------------------------------------------

const data6 = {
    labels: ['Feb 26', '', '', '', 'Feb 27', '', '', '', 'Feb 28', '', '', '', 'Mar 01', '', '', '', 'Mar 02','' , '', '', 'Mar 03', '', '', '', 'Mar 04', '', '', ''],
    datasets: [{
        label: '',
        data: [100-75.32, 100-75.38, 100-75.39, 100-75.69, 100-76.00, 100-76.23, 100-76.11, 100-76.12, 100-76.19, 100-76.13, 100-76.38, 100-76.53, 100-76.64, 100-76.77, 100-76.59, 100-76.53, 100-76.66, 100-76.31, 100-76.30, 100-76.44, 100-76.40, 100-76.57, 100-76.25, 100-77.21, 100-77.23, 100-77.14, 100-77.18, 100-77.09],
        borderWidth: 1.5,
        borderColor: '#e9479d',
        fill: true,
        backgroundColor: gradient2,
        pointBackgroundColor: '#e9479d',
        pointHoverRadius: 3,
    }],
}

const config6 = {
    type: 'line',
    data: data6,
    options: options6,

    // plugins: [horizontalArbitraryLine], 
    plugins: [hoverValue, myEventCatcher],
}

const sixthChart = new Chart(
    document.getElementById('sixthChart'),
    config6
);

// -------------------------------------------------

const data7 = {
    labels: ['Feb 04', '', '', '', 'Feb 08', '', '', '', 'Feb 12', '', '', '', 'Feb 16','' , '', '', 'Feb 20', '', '', '', 'Feb 24', '', '', '', 'Feb 28', '', '', '', 'Mar 04'],
    datasets: [{
        label: '',
        data: [100-76.07, 100-73.03, 100-74.05, 100-73.20, 100-72.95, 100-70.05, 100-73.29, 100-74.20, 100-74.05, 100-74.85, 100-74.61, 100-74.91, 100-74.65, 100-76.11, 100-75.18, 100-74.97, 100-74.71, 100-74.59, 100-75.09, 100-75.69, 100-75.83, 100-75.38, 100-76.12, 100-76.09, 100-76.69, 100-76.42, 100-76.47, 100-77.02, 100-77.09],
        borderWidth: 1.5,
        borderColor: '#e9479d',
        fill: true,
        backgroundColor: gradient2,
        pointBackgroundColor: '#e9479d',
        pointHoverRadius: 3,
    }],
}

const config7 = {
    type: 'line',
    data: data7,
    options: options7,

    // plugins: [horizontalArbitraryLine], 
    plugins: [hoverValue, myEventCatcher],
}

const seventhChart = new Chart(
    document.getElementById('seventhChart'),
    config7
);

// -------------------------------------------------

const data8 = {
    labels: ['Mar 09', '', '', '', 'May 08', '', '', '', 'Jul 07','' , '', '', 'Sep 5', '', '', '', 'Nov 04', '', '', '', 'Jan 03', '', '', '', 'Mar 04'],
    datasets: [{
        label: '',
        data: [100-58.03, 100-50.19, 100-43.12, 100-50.65, 100-66.16, 100-65.05, 100-70.97, 100-73.90, 100-78.22, 100-75.77, 100-76.60, 100-66.57, 100-61.41, 100-62.84, 100-61.11, 100-71.65, 100-71.31, 100-73.15, 100-72.01, 100-76.98, 100-81.07, 100-78.21, 100-75.18, 100-76.76, 100-77.09],
        borderWidth: 1.5,
        borderColor: '#e9479d',
        fill: true,
        backgroundColor: gradient2,
        pointBackgroundColor: '#e9479d',
        pointHoverRadius: 3,
    }],
}

const config8 = {
    type: 'line',
    data: data8,
    options: options8,

    // plugins: [horizontalArbitraryLine], 
    plugins: [hoverValue, myEventCatcher],
}

const eighthChart = new Chart(
    document.getElementById('eighthChart'),
    config8
);

// -------------------------------------------------



//     Functions



function chartHidden() {
    chart1.style.visibility = 'hidden'
    chart2.style.visibility = 'hidden'
    chart3.style.visibility = 'hidden'
    chart4.style.visibility = 'hidden'
    chart5.style.visibility = 'hidden'
    chart6.style.visibility = 'hidden'
    chart7.style.visibility = 'hidden'
    chart8.style.visibility = 'hidden'
}

function deleteBackground(date) {
    date.style.background = "transparent"
    date.style.color = "#1fc7d4"
}

function addBackground(date) {
    date.style.background = "#1fc7d4"
    date.style.color = "#191326"
}

dayBtn.addEventListener("click", () => {
    deleteBackground(dayBtn)
    deleteBackground(weekBtn)
    deleteBackground(monthBtn)
    deleteBackground(yearBtn)
    addBackground(dayBtn)
    chartHidden()
    if (coinsName.innerText == "BNB/CAKE") {
        chart1.style.visibility = "visible"
        chartPercent.innerText = '+0.441 (0.58%)'
        chartPercent.style.color = '#32e9b4'
    }
    else if (coinsName.innerText == "CAKE/BNB") {
        chart5.style.visibility = "visible"
        chartPercent.innerText = '-0.001 (-0.10%)'
        chartPercent.style.color = '#e9479d'
        chartValue.innerText = '0.013'
    }
})

weekBtn.addEventListener("click", () => {
    deleteBackground(dayBtn)
    deleteBackground(weekBtn)
    deleteBackground(monthBtn)
    deleteBackground(yearBtn)
    addBackground(weekBtn)
    chartHidden()
    if (coinsName.innerText == "BNB/CAKE") {
        chart2.style.visibility = "visible"
        chartPercent.innerText = '+1.031 (1.37%)'
        chartPercent.style.color = '#32e9b4'
    }
    else if (coinsName.innerText == "CAKE/BNB") {
        chart6.style.visibility = "visible"
        chartPercent.innerText = '-0.001 (-1.75%)'
        chartPercent.style.color = '#e9479d'
        chartValue.innerText = '0.013'
    }
})

monthBtn.addEventListener("click", () => {
    deleteBackground(dayBtn)
    deleteBackground(weekBtn)
    deleteBackground(monthBtn)
    deleteBackground(yearBtn)
    addBackground(monthBtn)
    chartHidden()
    if (coinsName.innerText == "BNB/CAKE") {
        chart3.style.visibility = "visible"
        chartPercent.innerText = '+0.593 (0.78%)'
        chartPercent.style.color = '#32e9b4'
    }
    else if (coinsName.innerText == "CAKE/BNB") {
        chart7.style.visibility = "visible"
        chartPercent.innerText = '-0.001 (-0.77%)'
        chartPercent.style.color = '#e9479d'
    }
})

yearBtn.addEventListener("click", () => {
    deleteBackground(dayBtn)
    deleteBackground(weekBtn)
    deleteBackground(monthBtn)
    deleteBackground(yearBtn)
    addBackground(yearBtn)
    chartHidden()
    if (coinsName.innerText == "BNB/CAKE") {
        chart4.style.visibility = "visible"
        chartPercent.innerText = '+18.625 (32.09%)'
        chartPercent.style.color = '#32e9b4'
    }
    else if (coinsName.innerText == "CAKE/BNB") {
        chart8.style.visibility = "visible"
        chartPercent.innerText = '-0.004 (-24.30%)'
        chartPercent.style.color = '#e9479d'
    }
})

iconsSwapBtn.addEventListener("click", () => {
    if (graphIcons.style.flexDirection == "row-reverse") {
        graphIcons.style.flexDirection = "row"
    }
    else {
        graphIcons.style.flexDirection = "row-reverse"
    }


    if (coinsName.innerText == "BNB/CAKE") {
        coinsName.innerText = "CAKE/BNB"
        coinsName2.innerText = "CAKE/BNB"
        if(chart2.style.visibility == 'visible') {
            chartHidden()
            chart6.style.visibility = 'visible'
            chartPercent.innerText = '-0.001 (-1.75%)'
            chartPercent.style.color = '#e9479d'
            chartValue.innerText = '0.013'
        }
        else if (chart3.style.visibility == 'visible') {
            chartHidden()
            chart7.style.visibility = 'visible'
            chartPercent.innerText = '-0.001 (-0.77%)'
            chartPercent.style.color = '#e9479d'
            chartValue.innerText = '0.013'
        }
        else if (chart4.style.visibility == 'visible') {
            chartHidden()
            chart8.style.visibility = 'visible'
            chartPercent.innerText = '-0.004 (-24.30%)'
            chartPercent.style.color = '#e9479d'
            chartValue.innerText = '0.013'
        }
        else {
            chartHidden()
            chart5.style.visibility = 'visible'
            chartPercent.innerText = '-0.001 (-0.10%)'
            chartValue.innerText = '0.013'
            chartPercent.style.color = '#e9479d'
            chartValue.innerText = '0.013'
        }
    }
    else {
        coinsName.innerText = "BNB/CAKE"
        coinsName2.innerText = "BNB/CAKE"

        if(chart6.style.visibility == 'visible') {
            chartHidden()
            chart2.style.visibility = 'visible'
            chartPercent.innerText = '+1.031 (1.37%)'
            chartPercent.style.color = '#32e9b4'
            chartValue.innerText = '77.09'
        }
        else if (chart7.style.visibility == 'visible') {
            chartHidden()
            chart3.style.visibility = 'visible'
            chartPercent.innerText = '+0.593 (0.78%)'
            chartPercent.style.color = '#32e9b4'
            chartValue.innerText = '77.09'
        }
        else if (chart8.style.visibility == 'visible') {
            chartHidden()
            chart4.style.visibility = 'visible'
            chartPercent.innerText = '+18.625 (32.09%)'
            chartPercent.style.color = '#32e9b4'
            chartValue.innerText = '77.09'
        }
        else if (chart5.style.visibility == 'visible'){
            chartHidden()
            chart1.style.visibility = 'visible'
            chartPercent.innerText = '+0.441 (0.58%)'
            chartPercent.style.color = '#32e9b4'
            chartValue.innerText = '77.09'
        }
    }
})


function dataTransition(a) {
    dayBtn.style.transition = a
    weekBtn.style.transition = a
    monthBtn.style.transition = a
    yearBtn.style.transition = a
}


graphVisibilityBtn.addEventListener('click', () => {
    if (swapChartBg.style.visibility == 'hidden') {
        dataTransition('0.2s')
        deleteBackground(dayBtn)
        deleteBackground(weekBtn)
        deleteBackground(monthBtn)
        deleteBackground(yearBtn)
        addBackground(dayBtn)
        chartHidden()
        coinsName.innerText = "BNB/CAKE"
        coinsName2.innerText = "BNB/CAKE"
        chart1.style.visibility = "visible"
        chartPercent.innerText = '+0.441 (0.58%)'
        chartPercent.style.color = '#32e9b4'
        cardBtn1Img.src = './assets/swap11.svg'
        swapChartBg.style.visibility = 'visible'
        if (data1.datasets[0].backgroundColor == gradient1){
            swapChartBg.style.width = '50%'
        }
        else {
            swapChartBg.style.width = '100%'
        }
        chartValue.innerText = '77.09'
        swapChartBg.classList.remove('chart-off')
        swapChartBg.classList.add('chart-on')
    }
    else if (swapChartBg.style.visibility = 'visible') {
        swapChartBg.classList.remove('chart-on')
        swapChartBg.classList.add('chart-off')
        swapChartBg.style.width = 0
        dataTransition('0s')
        cardBtn1Img.src = './assets/swap12.svg'
        swapChartBg.style.visibility = 'hidden'
        chartHidden()
    }
})

let cardBox = document.getElementById('card-box')
let graphCard = document.getElementById('graph-card')
let calcBox = document.getElementById('calc-box')
let calcContent = document.getElementById('calc-content')
let price = document.getElementById('price')
let priceInfo = document.getElementById('price-info')
let sizeChangerBtn = document.getElementById('size-changer')
let mainContent = document.getElementById('main-content')

function whenInputNotEmpty() {
    if (contentFooter.style.display != 'none') {
        graphCard.style.height = '760px'
        swapSection.style.height = 'auto'
    }
    else {
        swapSection.style.minHeight = '811px'
    }
    cardBox.style.height = '745px'
    calcBox.style.height = '460px'
    calcContent.style.height = '376px'
    price.style.display = 'flex'
    priceInfo.style.display = 'block'
}

function whenInputEmpty() {
    if (contentFooter.style.display != 'none') {
        graphCard.style.height = 'calc(100% - 108px)'
        swapSection.style.height = 'calc(100vh - 57px)'
    }
    cardBox.style.height = '589px'
    calcBox.style.height = '436px'
    calcContent.style.height = '352px'
    price.style.display = 'none'
    priceInfo.style.display = 'none'
}

firstInput.addEventListener('input', (el) => {
    val1 = el.target.value * 77.09

    if(el.target.value < 14) {
        secondInput.value = val1.toFixed(3)
    }
    else if (el.target.value < 150){
        secondInput.value = val1.toFixed(2)
    }
    else {
        secondInput.value = val1.toFixed(1)
    }

    val2 = el.target.value * 284.71
    firstInput_p.innerText = `~${val2.toFixed(2)} USD`
    val3 = secondInput.value * 3.685
    secondInput_p.innerText = `~${val3.toFixed(2)} USD`

    if (firstInput.value == 0) {
        firstInput_p.innerText = ''
        secondInput_p.innerText = ''
        firstInput.value = ''
        secondInput.value = ''
        whenInputEmpty()
    }
    else {
        whenInputNotEmpty()
    }
})

secondInput.addEventListener('input', (el) => {
    val1 = el.target.value * 0.0131594

    if(el.target.value < 10) {
        firstInput.value = val1.toFixed(7)
    }
    else if (el.target.value < 100){
        firstInput.value = val1.toFixed(6)
    }
    else if (el.target.value < 1000){
        firstInput.value = val1.toFixed(5)
    }
    else if (el.target.value < 10000){
        firstInput.value = val1.toFixed(4)
    }
    else if (el.target.value < 100000){
        firstInput.value = val1.toFixed(3)
    }
    else {
        firstInput.value = val1.toFixed(2)
    }

    val2 = firstInput.value * 284.71
    firstInput_p.innerText = `~${val2.toFixed(2)} USD`
    val3 = el.target.value * 3.685
    secondInput_p.innerText = `~${val3.toFixed(2)} USD`

    if (secondInput.value == 0) {
        firstInput_p.innerText = ''
        secondInput_p.innerText = ''
        firstInput.value = ''
        secondInput.value = ''
        whenInputEmpty()
    }
    else {
        whenInputNotEmpty()
    }
})

let priceInfoBnbCake = document.getElementById('price-info-bnb-cake')

inputSwitchBtn.addEventListener("click", () => {
    if (titleInput1.style.order == '4') {
        titleInput2.style.order = 3
        lowRiskDiv.style.order = 4
        arrowDown.style.order = 2
        titleInput1.style.order = 1
        priceInfoBnbCake.innerText = 'BNB - CAKE'
    }
    else {       
        titleInput2.style.order = 1
        lowRiskDiv.style.order = 2
        arrowDown.style.order = 3
        titleInput1.style.order = 4
        priceInfoBnbCake.innerText = 'CAKE - BNB'
    }
})

let priceOfCoinsBtn = document.getElementById('price-of-coins-btn')
let priceFirstCoin = document.getElementById('price-first-coin')
let priceSecondCoin = document.getElementById('price-second-coin')

priceOfCoinsBtn.addEventListener('click', () => {
    if(priceFirstCoin.innerText == '1 CAKE') {
        priceFirstCoin.innerText = '1 BNB'
        priceSecondCoin.innerText = '77.0942 CAKE'
    }
    else {
        priceFirstCoin.innerText = '1 CAKE'
        priceSecondCoin.innerText = '0.0131594 BNB'
    }
})


function toLargeChard() {
    graphCard.style.height = '100%'
    graphCard.style.width = '100%'
    swapChartBg.style.height = '100%'
    swapChartBg.style.width = '100%'
    swapChartBg.style.borderRadius = '0px'
    mainContent.style.padding = '0px'
    if (swapSection.clientWidth > 962) {
        chartContainer.style.height = 'calc(100% - 133px)'
    }
    console.log(swapChartBg.clientHeight)
    cardBox.style.marginTop = '24px'
    contentFooter.style.display = 'none'
    sizeChangerImg.src = './assets/swapChartSizeChanger.svg'
    chartHeight = chartContainer.clientHeight - 32    

    gradient3 = document.getElementById('firstChart').getContext("2d").createLinearGradient(0, 0, 0, chartHeight);
    gradient3.addColorStop(0, '#32e9b4');
    gradient3.addColorStop(1, '#393440');

    gradient4 = document.getElementById('firstChart').getContext("2d").createLinearGradient(0, 0, 0, chartHeight);
    gradient4.addColorStop(0, '#e9479d');
    gradient4.addColorStop(1, '#393440');

    let dataArr = [data1, data2, data3, data4, data5, data6, data7, data8]

    for(let i = 0; i < 4; i++) {
        dataArr[i].datasets[0].backgroundColor = gradient3
    }
    for(let i = 4; i < 8; i++) {
        dataArr[i].datasets[0].backgroundColor = gradient4
    }
}

function toSmallChart() {
    graphCard.style.height = 'calc(100% - 108px)'
    graphCard.style.width = 'auto'
    if (swapSection.clientWidth > 962) {
        swapChartBg.style.width = '50%'
        swapChartBg.style.height = '516px'
    }
    swapChartBg.style.borderRadius = '16px'
    mainContent.style.padding = '32px 32px 0px 32px'
    cardBox.style.marginTop = '0px'
    contentFooter.style.display = 'flex'
    sizeChangerImg.src = './assets/swap-size-button.svg'
    chartContainer.style.height = '340px'

    let dataArr = [data1, data2, data3, data4, data5, data6, data7, data8]

    for(let i = 0; i < 4; i++) {
        dataArr[i].datasets[0].backgroundColor = gradient1
    }
    for(let i = 4; i < 8; i++) {
        dataArr[i].datasets[0].backgroundColor = gradient2
    }
}

// console.log(swapSection.clientWidth > 970)

sizeChangerBtn.addEventListener('click', () => {
    if (contentFooter.style.display != 'none') {
        if (swapSection.clientWidth > 962) {
            toLargeChard()
        }
    }
    else {
        if (swapSection.clientWidth > 962) {
            toSmallChart()
        }
    }
})


const media = matchMedia('(max-width: 1200px');

const media2 = matchMedia('(max-width: 970px');

media.addEventListener('change', ({matches}) => {
    if (matches) {
        data1.labels = ['9:00 PM', '', '', '', '', '', '3:00 AM', '', '', '', '', '', '9:00 AM', '', '', '', '', '','3:00 PM' , '', '', '', '', '', '9:00 PM']
        data5.labels = ['9:00 PM', '', '', '', '', '', '3:00 AM', '', '', '', '', '', '9:00 AM', '', '', '', '', '','3:00 PM' , '', '', '', '', '', '9:00 PM']
    }
    else {
        data1.labels = ['9:00 PM', '', '', '12:00 AM', '', '', '3:00 AM', '', '', '6:00 AM', '', '', '9:00 AM', '', '', '12:00 PM', '', '','3:00 PM' , '', '', '6:00 PM', '', '', '9:00 PM']   
        data5.labels = ['9:00 PM', '', '', '12:00 AM', '', '', '3:00 AM', '', '', '6:00 AM', '', '', '9:00 AM', '', '', '12:00 PM', '', '','3:00 PM' , '', '', '6:00 PM', '', '', '9:00 PM']   
    }
})


media2.addEventListener('change', ({matches}) => {
    if (matches) {
        chartContainer.style.height = 'calc(100% - 167px)'
        swapChartBg.style.width = '100%'
        swapChartBg.style.height = '100vh'

        chartHeight = chartContainer.clientHeight - 32    
        let dataArr = [data1, data2, data3, data4, data5, data6, data7, data8]

        gradient3 = document.getElementById('firstChart').getContext("2d").createLinearGradient(0, 0, 0, chartHeight);
        gradient3.addColorStop(0, '#32e9b4');
        gradient3.addColorStop(1, '#393440');

        gradient4 = document.getElementById('firstChart').getContext("2d").createLinearGradient(0, 0, 0, chartHeight);
        gradient4.addColorStop(0, '#e9479d');
        gradient4.addColorStop(1, '#393440');

        for(let i = 0; i < 4; i++) {
            dataArr[i].datasets[0].backgroundColor = gradient3
        }
        for(let i = 4; i < 8; i++) {
            dataArr[i].datasets[0].backgroundColor = gradient4
        }
    }
    else {
        chartHeight = chartContainer.clientHeight - 32    
        let dataArr = [data1, data2, data3, data4, data5, data6, data7, data8]
        gradient3 = document.getElementById('firstChart').getContext("2d").createLinearGradient(0, 0, 0, chartHeight);
        gradient3.addColorStop(0, '#32e9b4');
        gradient3.addColorStop(1, '#393440');

        gradient4 = document.getElementById('firstChart').getContext("2d").createLinearGradient(0, 0, 0, chartHeight);
        gradient4.addColorStop(0, '#e9479d');
        gradient4.addColorStop(1, '#393440');

        for(let i = 0; i < 4; i++) {
            dataArr[i].datasets[0].backgroundColor = gradient1
        }
        for(let i = 4; i < 8; i++) {
            dataArr[i].datasets[0].backgroundColor = gradient2
        }

        if (contentFooter.style.display == 'flex'){
            chartContainer.style.height = '340px'

            if (swapChartBg.classList.contains('chart-on')) {
                swapChartBg.style.width = '50%'
            }
            else {
                swapChartBg.style.width = '0px'
            }

            swapChartBg.style.height = '516px'
        }
        else {
            swapChartBg.style.width = '100%'
            swapChartBg.style.height = '100%'
        }
    }
})
