<template>
  <div class="right-orders">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <div class="top">
            <TopChart />
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card> <BottomChart /> </v-card>
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
.right-orders {
  padding-left: 32px;
}
.v-card {
  box-shadow: none !important;
}
</style>
