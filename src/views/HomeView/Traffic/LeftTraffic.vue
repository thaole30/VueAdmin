<template>
  <div>
    <p>LeftTraffic</p>
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
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler
);

export default {
  name: "LeftTraffic",
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
      default: 400,
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
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Bounce Rate",
            backgroundColor: "rgba(141,151,211, 0.6)",
            data: [0, 15000, 25000, 15000, 30000, 0],
            fill: true,
            tension: 0.5,
            pointRadius: 0,
          },
          {
            label: "Targeted Visitors",
            backgroundColor: "rgba(244,134,132, 0.8)",
            data: [0, 33000, 15000, 20000, 17000, 0],
            fill: true,
            tension: 0.5,
            pointRadius: 0,
          },

          {
            label: "Targeted Visitors",
            backgroundColor: "rgba(145,205,148, 0.6)",
            data: [0, 17000, 35000, 25000, 22000, 0],
            fill: true,
            tension: 0.5,
            pointRadius: 0,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
