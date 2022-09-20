<template>
  <div class="bottom-table">
    <p class="title">August 2018</p>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "BottomChart",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 120,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: ["", "", "", "", "", "", ""],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [0, 10, 8, 25, 27, 0, 12],
            // pointRadius: 0,
            pointBackgroundColor: "white",
            borderColor: "white",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          x: {
            grid: {
              drawBorder: false,
              display: false,
            },
            display: false,
          },
          y: {
            grid: {
              display: false,

              drawBorder: false,
            },
            display: false,
          },
        },

        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.bottom-table {
  .title {
    color: white;
  }
}
</style>
