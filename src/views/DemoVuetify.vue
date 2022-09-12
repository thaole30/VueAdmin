<template>
  <v-app>
    <div class="ma-4">
      <v-card class="d-flex flex-row mb-6" color="grey lighten-4" flat tile>
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          Flex item {{ n }}
        </v-card>
      </v-card>
      <v-card class="d-flex flex-row-reverse" color="green lighten-4" flat tile>
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          Flex item {{ n }}
        </v-card>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DemoVuetify",
};
</script>
