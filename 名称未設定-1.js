< script > addChart(document.currentScript.parentNode, [2, 3, 3, 2, 4, 3]) < /script>


"use strict"; {
  const canvasTmpl = document.createElement("canvas");
  Object.assign(canvasTmpl, {
    width: 370,
    height: 370
  });
  const chartSettingsString = JSON.stringify({
    type: "radar",
    data: {
      labels: ["必達能力(営業力)", "管理能力", "マネジメント力", "企画力", ["危機管理能力&", "リスク管理能力"], "協調性"],
      datasets: [{
        backgroundColor: 'RGBA(225,95,150, 0.5)',
        borderColor: 'RGBA(225,95,150, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'RGB(225,95,150)',
        pointRadius: 2,
        pointStyle: 'rectRot'
      }]
    },
    options: {
      legend: {
        display: false
      },
      animation: true,
      responsive: true,
      scale: {
        ticks: {
          stepSize: 1,
          max: 5,
          beginAtZero: true,

        }
      }
    }
  });
  var addChart = function (target,values) {
    const canvas = canvasTmpl.cloneNode(false);
    target.appendChild(canvas);
    const chartSettings = JSON.parse(chartSettingsString);
    chartSettings.data.datasets[0].data = [...values];
    new Chart(canvas.getContext("2d"), chartSettings);
  }
}
