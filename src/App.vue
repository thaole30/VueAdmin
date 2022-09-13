<template>
  <v-app>
    <Header
      @eventToggleMenuDrawer="toggleMenuDrawer"
      @eventToggleSidebar="toggleSidebar"
    />

    <h3 class="title is-3">
      Width: {{ window.width }} px<br />
      Height: {{ window.height }} px
    </h3>

    <div class="left-side-bar">
      <LeftSideBar
        :isOpenSidebar="isOpenSidebar"
        :isMobile="$vuetify.breakpoint.name === 'xs' ? true : false"
      />
    </div>
    <LeftMenuDrawer :drawer="drawer" :group="group" :setDrawer="setDrawer" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LeftMenuDrawer from "./components/LeftMenu/LeftMenuDrawer.vue";
import LeftSideBar from "./components/LeftMenu/LeftSideBar.vue";
import Header from "./components/Header/Header.vue";
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    isOpenSidebar: true,
    window: {
      width: 0,
      height: 0,
    },
    breakpoint: "",
  }),
  components: { LeftMenuDrawer, LeftSideBar, Header },
  methods: {
    setDrawer(val) {
      this.drawer = val;
    },

    toggleSidebar() {
      console.log("toggle sidebar");
      this.isOpenSidebar = !this.isOpenSidebar;
    },
    toggleMenuDrawer() {
      this.drawer = !this.drawer;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      this.breakpoint = this.$vuetify.breakpoint.name;
    },
  },

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  watch: {
    // whenever question changes, this function will run
    breakpoint: function (newValue) {
      console.log("breakpoint", newValue);
    },
  },
};
</script>

<style lang="scss">
// .v-app-bar.v-app-bar--fixed {
//   position: relative;
// }

.v-app-bar {
  min-height: 56px !important;
  position: fixed;
}

.v-toolbar__content {
  height: auto !important;
  padding: 0 !important;
}

.custom-col {
  border-bottom: 1px solid rgb(210, 209, 209);
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 32px !important;
}

.v-navigation-drawer {
  top: 56px !important;
}

.v-main__wrap,
.v-main {
  margin-top: 56px;
}
// .v-navigation-drawer--open {
//   width: 300px !important;
// }

.v-list-item {
  padding: 0px !important;
}

.v-list-group {
  width: 100%;
}

.v-list-group__header {
  padding: 0 20px !important;
}
</style>
