<template>
  <v-app-bar color="white" elevation="0" dark>
    <v-row class="header" no-gutters align="center">
      <v-col xs="12" sm="12" md="4" lg="2" class="custom-col">
        <v-row
          align="center"
          justify-sm="justify-space-between"
          flat
          tile
          :class="isMobile && 'justify-space-between'"
          style="flex-wrap: nowrap"
          v-bind:style="isMobile && 'justifyContent: space-between; '"
        >
          <router-link :to="{ name: 'home' }">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://technext.github.io/elaadmin/images/logo.png"
              transition="transition"
              width="160"
            />
          </router-link>
          <!-- <v-app-bar-nav-icon
            color="#99abb4"
            @click.stop="handleDrawer"
          ></v-app-bar-nav-icon> -->

          <v-app-bar-nav-icon
            color="#99abb4"
            @click="toggleSidebar"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-col>
      <v-col xs="12" sm="12" md="8" lg="10" class="custom-col">
        <v-row align="center" justify="end" flat tile style="flex-wrap: nowrap">
          <div class="auth">
            <v-btn
              depressed
              color="primary"
              id="signin-btn"
              @click="
                handleDialogStatus(true);
                changeComponent('SigninForm');
                changePopupTitle('Signin Title');
              "
            >
              Sign In
            </v-btn>

            <v-btn
              depressed
              color="purple"
              id="signup-btn"
              @click="
                handleDialogStatus(true);
                changeComponent('SignupForm');
                changePopupTitle('Signup Title');
              "
            >
              Sign Up
            </v-btn>
          </div>
          <v-btn icon color="#99abb4">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <button color="primary" dark v-bind="attrs" v-on="on">
                <v-badge color="red" content="6" offset-x="20" offset-y="25">
                  <v-btn icon color="#99abb4">
                    <v-icon>mdi-bell</v-icon>
                  </v-btn>
                </v-badge>
              </button>
            </template>
            <v-list class="noti-list">
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <button color="primary" dark v-bind="attrs" v-on="on">
                <v-badge color="blue" content="6" offset-x="20" offset-y="25">
                  <v-btn icon color="#99abb4">
                    <v-icon>mdi-email</v-icon>
                  </v-btn>
                </v-badge>
              </button>
            </template>
            <v-list class="noti-list">
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

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
      <!-- <RightHeader v-if="breakpointName === 'xl' || breakpointName === 'lg'" /> -->
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  inject: ["handleDialogStatus", "changeComponent", "changePopupTitle"],

  props: {
    breakpointName: String,
    isMobile: Boolean,
  },

  data: () => ({
    items: [
      { title: "notification 1" },
      { title: "notification 2" },
      { title: "notification 3" },
      { title: "notification 4" },
    ],
  }),
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
      //   this.isBiggerSidebar = !this.isBiggerSidebar;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.header {
  .row {
    border-bottom: none !important;
  }
}
.v-menu__content {
  top: 56px !important;
  .noti-list {
    padding: 0 12px !important;
  }
}
</style>
