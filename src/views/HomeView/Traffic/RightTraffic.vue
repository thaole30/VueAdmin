<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <!-- <div class="progress-item">
      <p class="progress-item">Visits</p>
      <p class="progress-info">96,930  (40%)</p>
      <v-progress-linear value="15"></v-progress-linear>
    </div> -->

    <ProgressCustom
      title="Visits"
      info="3,220 Users (24%)"
      value="35"
      progressColor="green"
    />
    <ProgressCustom
      title="Bounce Rate"
      info="3,220 Users (24%)"
      value="15"
      progressColor="purple"
    />
    <ProgressCustom
      title="Unique Visitors"
      info="29,658 Users (60%)"
      value="60"
      progressColor="blue"
    />
    <ProgressCustom
      title="Targeted Visitors"
      info="99,658 users (90%)"
      value="80"
      progressColor="green"
    />
  </div>
</template>

<script>
import ProgressCustom from "@/components/ProgressCustom/ProgressCustom.vue";
export default {
  name: "RightTraffic",
  components: { ProgressCustom },
};
</script>

<style lang="scss" scoped></style>
