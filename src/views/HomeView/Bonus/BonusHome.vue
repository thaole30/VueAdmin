<template>
  <div class="bonus-home mt-8">
    <v-row>
      <v-col cols="12" md="4"> <Calendar /> </v-col>
      <v-col cols="12" md="4"> <MixedChart /> </v-col>
      <v-col cols="12" md="4"> <Weather /> </v-col>
    </v-row>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import MixedChart from "./MixedChart.vue";
import Weather from "./Weather.vue";
export default {
  name: "BonusHome",
  components: { Calendar, MixedChart, Weather },
};
</script>

<style lang="scss" scoped></style>
