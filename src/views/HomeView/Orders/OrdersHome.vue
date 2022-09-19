<template>
  <div class="orders-home">
    <v-container>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col cols="12" md="8" style="padding: 0">
          <div>
            <div class="title"><b>Orders</b></div>
            <LeftOrders />
          </div>
        </v-col>
        <v-col cols="12" md="4" style="padding: 0">
          <div><RightOrders /></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LeftOrders from "./LeftOrders.vue";
import RightOrders from "./RightOrders.vue";
export default {
  name: "OrdersHome",
  components: { LeftOrders, RightOrders },
};
</script>

<style lang="scss" scoped>
.orders-home {
  //   background-color: #fff;
  //   padding: 1.25em;
  //   margin: 2rem 0;

  .title {
    background-color: #fff;
    padding: 1.25em;
  }
}

.v-sheet.v-card {
  box-shadow: none !important;
}
</style>
