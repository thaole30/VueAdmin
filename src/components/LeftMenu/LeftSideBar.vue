<template>
  <v-card>
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant="!isOpenSidebar"
      :permanent="!isMobile"
      :class="breakpointName === 'sm' && 'move-down-sidebar'"
    >
      <v-list dense>
        <v-list-item style="padding: 0 20px !important">
          <v-list-item-icon>
            <v-icon>mdi-laptop</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div v-for="item in menus" :key="item.type" link>
          <p class="type-title" v-if="isOpenSidebar">{{ item.type }}</p>

          <v-list-item v-for="each in item.data" :key="each.title" link>
            <v-list-group no-action append-icon="mdi-chevron-right">
              <template v-slot:activator>
                <v-list-item-icon @click="toggleFloatMenu(each.title)">
                  <v-icon v-text="`mdi-${each.icon}`"></v-icon>
                  <v-icon
                    v-if="!isOpenSidebar"
                    v-text="`mdi-chevron-right`"
                  ></v-icon>
                </v-list-item-icon>
                <div class="float-menu" v-if="!isOpenSidebar">
                  <span>123</span>
                </div>
                <v-list-item-content>
                  <v-list-item-title>{{ each.title }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="subItem in each.subNav"
                :key="subItem.title"
                link
                class="subnav-item"
              >
                <v-list-item-icon>
                  <v-icon v-text="`mdi-${subItem.icon}`"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "LeftSideBar",
  props: {
    isOpenSidebar: Boolean,
    isMobile: Boolean,
    breakpointName: String,
  },

  data() {
    return {
      drawer: true,
      mini: true,

      menus: [
        {
          type: "UI ELEMENTS",
          data: [
            {
              title: "Components",
              path: "/components",
              // Optional
              icon: "cog-outline",
              subNav: [
                {
                  title: "Button",
                  path: "/button",
                  icon: "gesture-tap-button",
                },
                {
                  title: "Badges",
                  path: "/badge",
                  icon: "police-badge-outline",
                },
                {
                  title: "Cards",
                  path: "/card",
                  icon: "card-multiple",
                },
              ],
            },
            {
              title: "Tables",
              itemId: "/table",
              icon: "table-large",
              subNav: [
                {
                  title: "Basic Table",
                  path: "/basic",
                  icon: "table-large",
                },
                {
                  title: "Data Table",
                  path: "/data",
                  icon: "database-outline",
                },
              ],
            },
          ],
        },
        {
          type: "ICONS",
          data: [
            {
              title: "Icons",
              path: "/icon",
              // Optional
              icon: "cog-outline",
              subNav: [
                {
                  title: "Font Awesome",
                  path: "/font-awesome",
                  icon: "connection",
                },
                {
                  title: "Themefy Icons",
                  path: "/themefy icons",
                  icon: "bluetooth-connect",
                },
              ],
            },
            {
              title: "Maps",
              path: "/map",
              // Optional
              icon: "map-marker-multiple",
              subNav: [
                {
                  title: "Google map",
                  path: "/google-map",
                  icon: "map-search-outline",
                },
                {
                  title: "Vector Maps",
                  path: "/vector-map",
                  icon: "vector-curve",
                },
              ],
            },
            {
              title: "Charts",
              path: "/chart",
              // Optional
              icon: "chart-areaspline",
              subNav: [
                {
                  title: "Chart JS",
                  path: "/chart-js",
                  icon: "chart-bell-curve-cumulative",
                },
                {
                  title: "Flot Chart",
                  path: "/flot-chart",
                  icon: "chart-timeline-variant-shimmer",
                },
                {
                  title: "Peity Chart",
                  path: "/peity-chart",
                  icon: "chart-box-outline",
                },
              ],
            },
          ],
        },
        {
          type: "EXTRAS",
          data: [
            {
              title: "Pages",
              path: "/page",
              icon: "book-open-page-variant",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleFloatMenu(menuTitle) {
      // now we have access to the native event
      if (!this.isOpenSidebar) {
        console.log("menuTitle", menuTitle);
      }
    },
  },

  // computed: {
  //   isMiniSidebar() {
  //     return !this.isOpenSidebar;
  //   },
  // },

  watch: {
    // whenever question changes, this function will run
    isMobile: function (newValue) {
      console.log("isMobile", newValue);
    },
    breakpointName: function (newValue) {
      console.log("breakpointName", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.subnav-item {
  padding-left: 56px !important;
}

.type-title {
  padding: 0 20px;
  height: 46px;
  display: flex;
  align-items: center;
  margin-bottom: 0 !important;
}

.v-navigation-drawer--mini-variant {
  width: 76px !important;
}

.move-down-sidebar {
  margin-top: 56px;
}
</style>
