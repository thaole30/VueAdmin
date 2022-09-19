<template>
  <v-card>
    <v-navigation-drawer
      app
      v-model="propModel"
      :mini-variant="!isBiggerSidebar"
      :permanent="!isMobile"
      :class="
        (breakpointName === 'sm' || breakpointName === 'xs') &&
        'mode-down-sidebar'
      "
      :hide-overlay="true"
      :width="isMobile && isOpenDrawer ? `100%` : '256px'"
    >
      <v-list dense>
        <!-- <v-list-item style="padding: 0 20px !important">
          <router-link :to="{ name: 'home' }">
            <v-list-item-icon>
              <v-icon>mdi-laptop</v-icon>
            </v-list-item-icon>
          </router-link>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <div v-for="item in menus" :key="item.type" link>
          <p class="type-title" v-if="isBiggerSidebar">{{ item.type }}</p>

          <v-list-item
            active-class="link-active"
            v-for="each in item.data"
            :key="each.title"
            link
            :to="each.subNav.length === 0 ? `${each.path}` : null"
          >
            <v-menu offset-x>
              <template v-slot:activator="{ on, attrs }">
                <v-list-group
                  v-bind="attrs"
                  v-on="!isBiggerSidebar && each.subNav.length ? on : ''"
                  no-action
                  :value="matchPath(each.path)"
                  append-icon="mdi-chevron-right"
                >
                  <template v-slot:activator>
                    <!-- {{ attrs[`aria-expanded`] }} -->
                    <!-- {{ attrs[`aria-haspopup`] }} -->
                    <v-list-item-icon>
                      <v-icon v-text="`mdi-${each.icon}`"></v-icon>
                      <v-icon v-if="attrs[`aria-expanded`] === false"
                        >mdi-chevron-right</v-icon
                      >
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ each.title }}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <v-list-item
                    v-for="subItem in each.subNav"
                    active-class="link-active"
                    :key="subItem.title"
                    link
                    class="subnav-item"
                    :to="`${each.path}${subItem.path}`"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="`mdi-${subItem.icon}`"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title
                      v-text="subItem.title"
                    ></v-list-item-title>
                  </v-list-item>
                </v-list-group>
              </template>

              <v-list
                v-if="each.subNav.length === 0 ? false : true"
                class="sub-menu-container"
              >
                <!-- <v-list-item class="sub-menu__title">
                  {{ each.title }}
                </v-list-item> -->
                <v-list-item
                  v-for="(sub, index) in each.subNav"
                  :key="index"
                  :to="`${each.path}${sub.path}`"
                  link
                >
                  <v-list-item-icon class="sub-menu__icon">
                    <v-icon v-text="`mdi-${sub.icon}`"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title
                    class="sub-menu__text"
                    v-text="sub.title"
                  ></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
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
    isBiggerSidebar: Boolean,
    isMobile: Boolean,
    breakpointName: String,
    isOpenDrawer: Boolean,
  },

  data() {
    console.log("data");
    return {
      // drawer: true,
      mini: true,
      path: "/",
      menus: [
        {
          type: null,
          data: [
            {
              title: "Dashboard",
              icon: "laptop",
              path: "/",
              subNav: [],
            },
          ],
        },
        {
          type: "UI ELEMENTS",
          data: [
            {
              title: "Components",
              path: "/component",
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
              path: "/table",
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
              subNav: [
                {
                  title: "Login",
                  path: "/login",
                  icon: "login",
                },
                {
                  title: "Register",
                  path: "/register",
                  icon: "account-plus-outline",
                },
              ],
            },
          ],
        },
      ],

      floatMenu: {
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
    };
  },
  methods: {
    matchPath(data) {
      // console.log("methods getPath");
      console.log(
        "result",
        "-----",
        data,
        "-----",
        this.path,
        data === this.path
      );
      return data === this.path;
    },
  },

  computed: {
    propModel: {
      get() {
        return this.isOpenDrawer;
      },
      set(value) {
        // console.log("prop set", value);
        this.$emit("eventToggleDrawer", value);
      },
    },
  },

  created() {
    console.log("route", this.$route);
    this.path = this.$route.matched[0].path;
    console.log("created route", this.path);
  },

  watch: {
    // $route(to) {
    //   console.log("voday");
    //   if (to.matched[0].path !== undefined) {
    //     this.path = to.matched[0].path;
    //   } else {
    //     this.path = "";
    //   }
    // },
    isMobile: function (newValue) {
      console.log("isMobile", newValue);
    },
    breakpointName: function (newValue) {
      console.log("breakpointName", newValue);
    },
    on: function (newValue) {
      console.log("onnnnn", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.subnav-item {
  padding-left: 56px !important;
}
.link-active {
  background-color: #bcf7da;
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

.sub-menu-container {
  padding: 10px;
}
.float-menu {
  // position: relative !important;
  // width: auto !important;
  // height: auto !important;
  width: 200px !important;
  height: 200px !important;
  overflow: visible !important;
  display: block !important;
  clip: unset !important;
  background-color: aqua;
  left: 76px;
}

.float-menu .v-list.v-sheet.v-list--dense {
  width: 200px !important;
  height: 200px !important;
}

.float-menu .v-navigation-drawer--mini-variant {
  position: absolute !important;
  clip: unset !important;
  width: auto !important;
  height: auto !important;
}

.mode-down-sidebar {
  margin-top: 56px !important;
}
</style>
