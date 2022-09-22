<template>
  <div class="bonus-home">
    <v-row>
      <v-col cols="12" md="6"> <Calendar /> </v-col>
      <v-col cols="12" md="6"> <MixedChart /> </v-col>
    </v-row>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import MixedChart from "./MixedChart.vue";
export default {
  name: "BonusHome",
  components: { Calendar, MixedChart },
};
</script>

<style lang="scss" scoped></style>
