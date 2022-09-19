<template>
  <v-app>
    <Header
      @eventToggleDrawer="toggleMenuDrawer"
      @eventToggleSidebar="toggleSidebar"
      :breakpointName="$vuetify.breakpoint.name"
      :isOpenDrawer="isOpenDrawer"
    />

    <div class="left-side-bar">
      <LeftSideBar
        @eventUpdateIsOpenSidebar="handleUpdateIsOpenSidebar"
        :isBiggerSidebar="isBiggerSidebar"
        :isMobile="$vuetify.breakpoint.name === 'xs' ? true : false"
        :breakpointName="$vuetify.breakpoint.name"
        :isOpenDrawer="isOpenDrawer"
        @eventToggleDrawer="toggleMenuDrawer"
      />
    </div>

    <!-- <transition name="fade">
      <router-view></router-view>
    </transition> -->
    <div class="v-main" :class="handleChangeSize">
      <router-view />
    </div>
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
    isOpenDrawer: false,
    isBiggerSidebar: true,
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

      if (this.$vuetify.breakpoint.name === "xs") {
        this.isOpenDrawer = !this.isOpenDrawer;
      } else {
        this.isBiggerSidebar = !this.isBiggerSidebar;
      }
    },
    toggleMenuDrawer(val) {
      this.isOpenDrawer = val;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      this.breakpoint = this.$vuetify.breakpoint.name;
    },
    handleUpdateIsOpenSidebar() {
      console.log("gooo");
      this.isBiggerSidebar = !this.isBiggerSidebar;
    },
  },

  computed: {
    handleChangeSize() {
      if (!this.isBiggerSidebar) {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "main__xs__mini";
          case "sm":
            return "main__sm__mini";
          case "lg":
            return "main__lg__mini";
          case "md":
            return "main__md__mini";
          default:
            return "main__xl__mini";
        }
      } else {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "main__xs";
          case "sm":
            return "main__sm";
          case "lg":
            return "main__lg";
          case "md":
            return "main__md";
          default:
            return "main__xl";
        }
      }
    },
  },

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    // if (this.$vuetify.breakpoint.name === "xs") {
    //   this.isBiggerSidebar = false;
    // } else {
    //   this.isBiggerSidebar = true;
    // }
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
.v-navigation-drawer__content,
.v-navigation-drawer {
  overflow: visible !important;
}

.v-app-bar {
  height: 56px !important;
  min-height: 56px !important;
  position: fixed;
  z-index: 1000;
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
  background-color: white !important;
}

.v-navigation-drawer {
  top: 58px !important;
}
.v-main {
  margin-top: 56px;
  // padding: 0px 0px 0px 256px !important;
  background: #f1f2f7;
}
.v-main__wrap {
  padding: 1.875em;
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
// .v-data-table-header {
//   background-color: red;
// }
.main {
  &__xl {
    padding: 1.875em;
    margin-left: 256px;
    &__mini {
      padding: 1.875em;
      margin-left: 76px;
    }
  }
  &__md {
    padding: 1.875em;
    margin-left: 256px;
    &__mini {
      padding: 1.875em;
      margin-left: 76px;
    }
  }
  &__md {
    padding: 1.875em;
    margin-left: 256px;
    &__mini {
      padding: 1.875em;
      margin-left: 76px;
    }
  }
  &__sm {
    padding: 1.875em;
    margin-left: 256px;
    margin-top: 112px;
    &__mini {
      padding: 1.875em;
      margin-left: 76px;
      margin-top: 112px;
    }
  }
  &__lg {
    padding: 1.875em;
    margin-left: 256px;
    &__mini {
      padding: 1.875em;
      margin-left: 76px;
    }
  }
  &__xs {
    padding: 1.875em;
    margin-top: 116px;
    &__mini {
      padding: 1.875em;
      margin-top: 116px;
    }
  }
}
</style>
