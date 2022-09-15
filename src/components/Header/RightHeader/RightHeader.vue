<template>
  <v-col xs="12" sm="12" md="8" lg="10" class="custom-col">
    <v-row align="center" justify="end" flat tile style="flex-wrap: nowrap">
      <v-btn icon color="#99abb4">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-badge color="red" content="6" offset-x="20" offset-y="25">
        <v-btn icon color="#99abb4">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-badge>
      <v-badge color="blue" content="6" offset-x="20" offset-y="25">
        <v-btn icon color="#99abb4">
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </v-badge>

      <v-badge
        bordered
        bottom
        color="green accent-4"
        dot
        offset-x="10"
        offset-y="10"
        style="margin-right: 20px; margin-left: 10px"
      >
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "RightHeader",
};
</script>

<style lang="scss" scoped></style>
