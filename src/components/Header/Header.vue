<template>
  <v-app-bar color="white" elevation="0" dark>
    <v-row no-gutters align="center">
      <v-col xs="12" sm="12" md="4" lg="2" class="custom-col">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://technext.github.io/elaadmin/images/logo.png"
            transition="transition"
            width="160"
          />
          <v-app-bar-nav-icon
            color="#99abb4"
            @click.stop="handleDrawer"
          ></v-app-bar-nav-icon>

          <v-app-bar-nav-icon
            color="#99abb4"
            @click="toggleSidebar"
          ></v-app-bar-nav-icon>
        </div>
      </v-col>
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
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    // setDrawer(val) {
    //   this.drawer = val;
    // },
    handleDrawer() {
      console.log("handleDrawer");
      this.$emit("eventToggleMenuDrawer");

      //   this.drawer = !this.drawer;
    },
    toggleSidebar() {
      console.log("toggle sidebar");
      this.$emit("eventToggleSidebar");

      //   this.isOpenSidebar = !this.isOpenSidebar;
    },
  },
};
</script>

<style></style>
