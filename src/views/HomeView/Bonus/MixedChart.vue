<template>
  <div class="mix-chart-container">
    <v-row no-gutters>
      <v-col cols="12">
        <TopBarChart />
      </v-col>
      <v-col cols="12">
        <BottomPieChart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopBarChart from "./TopBarChart.vue";
import BottomPieChart from "./BottomPieChart.vue";
export default {
  name: "MixedChart",
  components: { TopBarChart, BottomPieChart },
};
</script>

<style lang="scss" scoped></style>
