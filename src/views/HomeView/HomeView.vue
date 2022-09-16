<template>
  <div class="home-page">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col class="col-card" cols="12" sm="6" md="3">
        <v-card outlined tile>
          <CustomCard
            iconColor="green"
            icon="mdi-cash"
            cardTitle="$23569"
            cardSubtitle="99,658 users (90%)"
            :iconSize="50"
          />
        </v-card>
      </v-col>
      <v-col class="col-card" cols="12" sm="6" md="3">
        <v-card outlined tile>
          <CustomCard
            iconColor="purple"
            icon="mdi-cart"
            cardTitle="$23569"
            cardSubtitle="Revenue"
            :iconSize="50"
          />
        </v-card>
      </v-col>
      <v-col class="col-card" cols="12" sm="6" md="3">
        <v-card outlined tile>
          <CustomCard
            iconColor="blue"
            icon="mdi-cog-outline"
            cardTitle="$23569"
            cardSubtitle="Revenue"
            :iconSize="50"
          />
        </v-card>
      </v-col>
      <v-col class="col-card" cols="12" sm="6" md="3">
        <v-card outlined tile>
          <CustomCard
            iconColor="orange"
            icon="mdi-account"
            cardTitle="$23569"
            cardSubtitle="Revenue"
            :iconSize="50"
          />
        </v-card>
      </v-col>
    </v-row>
    <TrafficHome />
  </div>
</template>

<script>
import CustomCard from "@/components/Card/CustomCard.vue";
import TrafficHome from "./Traffic/TrafficHome.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: { CustomCard, TrafficHome },
};
</script>

<style lang="scss" scoped>
.col-card {
  // padding: 0 !important;
}
</style>
