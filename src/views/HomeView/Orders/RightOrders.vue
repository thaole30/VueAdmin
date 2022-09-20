<template>
  <div class="right-orders">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="12" md="6" lg="12">
        <v-card>
          <div class="top-chart">
            <TopChart />
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="12">
        <v-card>
          <div class="bottom-chart">
            <BottomChart />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TopChart from "./TopChart.vue";
import BottomChart from "./BottomChart.vue";
export default {
  name: "RightOrders",
  components: { TopChart, BottomChart },
};
</script>

<style lang="scss" scoped>
// .right-orders {
//   padding-left: 32px;
// }
.v-card {
  box-shadow: none !important;
}

.top-chart,
.bottom-chart {
  padding: 10px;
}
.bottom-chart {
  background-color: rgb(3, 169, 243);
}
</style>
