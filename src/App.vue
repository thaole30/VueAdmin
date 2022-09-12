<template>
  <v-app>
    <v-app-bar style="min-height: 56px" app color="white" elevation="2" dark>
      <v-row no-gutters align="center">
        <v-col xs="12" sm="12" md="6">
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://technext.github.io/elaadmin/images/logo.png"
              transition="scale-transition"
              width="160"
            />
            <v-btn icon color="#99abb4">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="6">
          <v-row align="center" justify="end" color="grey lighten-2" flat tile>
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
                <v-img
                  src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                ></v-img>
              </v-avatar>
            </v-badge>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.v-app-bar {
  min-height: 56px !important;
}
</style>
