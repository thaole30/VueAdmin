<template>
  <v-app-bar color="white" elevation="0" dark>
    <v-row class="header" no-gutters align="center">
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
      <RightHeader v-if="breakpointName === 'xl' || breakpointName === 'lg'" />
    </v-row>
  </v-app-bar>
</template>

<script>
import RightHeader from "./RightHeader/RightHeader.vue";
export default {
  name: "Header",
  props: {
    breakpointName: String,
  },
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
  components: { RightHeader },
};
</script>

<style lang="scss" scoped>
.header {
  .row {
    border-bottom: none !important;
  }
}
</style>
