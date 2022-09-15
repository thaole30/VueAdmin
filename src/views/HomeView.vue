<template>
  <div class="home-page">
    <v-container class="grey lighten-5">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-card outlined tile>
            <CustomCard
              iconColor="green"
              icon="mdi-cash"
              cardTitle="$23569"
              cardSubtitle="Revenue"
              :iconSize="50"
            />
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card outlined tile>
            <CustomCard
              iconColor="green"
              icon="mdi-cash"
              cardTitle="$23569"
              cardSubtitle="Revenue"
              :iconSize="50"
            />
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card outlined tile>
            <CustomCard
              iconColor="green"
              icon="mdi-cash"
              cardTitle="$23569"
              cardSubtitle="Revenue"
              :iconSize="50"
            />
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card outlined tile>
            <CustomCard
              iconColor="green"
              icon="mdi-cash"
              cardTitle="$23569"
              cardSubtitle="Revenue"
              :iconSize="50"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CustomCard from "@/components/Card/CustomCard.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: { CustomCard },
};
</script>
