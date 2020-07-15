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
  /*var addChart = function (target,values) {
    const canvas = canvasTmpl.cloneNode(false);
    target.appendChild(canvas);
    const chartSettings = JSON.parse(chartSettingsString);
    chartSettings.data.datasets[0].data = [...values];
    new Chart(canvas.getContext("2d"), chartSettings);
  }*/
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var addChart = function addChart(target, values) {
  var canvas = canvasTmpl.cloneNode(false);
  target.appendChild(canvas);
  var chartSettings = JSON.parse(chartSettingsString);
  chartSettings.data.datasets[0].data = _toConsumableArray(values);
  new Chart(canvas.getContext("2d"), chartSettings);
};
}
