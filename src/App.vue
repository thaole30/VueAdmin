<template>
  <v-app>
    <Header
      @eventToggleMenuDrawer="toggleMenuDrawer"
      @eventToggleSidebar="toggleSidebar"
    />

    <div class="left-side-bar">
      <LeftSideBar :isOpenSidebar="isOpenSidebar" />
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
    isOpenSidebar: false,
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
</style>
