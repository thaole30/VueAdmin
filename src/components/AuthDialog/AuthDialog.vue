<template>
  <v-row justify="center" class="container">
    <v-dialog
      v-if="!isMobile()"
      v-model="dialogStatus"
      width="500px"
      transition="dialog-bottom-transition"
      :fullscreen="isfullscreen ? true : false"
    >
      <v-card>
        <v-card-title v-if="popupTitle" class="text-h5 grey lighten-2">
          {{ popupTitle }}
        </v-card-title>
        <component
          v-bind:isfullscreen="isfullscreen"
          :is="component"
          :email="email"
        ></component>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import SigninForm from "../../views/HomeView/AuthForm/SigninForm.vue";
import SignupForm from "../../views/HomeView/AuthForm/SignupForm.vue";
import ForgotPasswordForm from "../../views/HomeView/AuthForm/ForgotPasswordForm.vue";

export default {
  inject: ["handleDialogStatus", "changeComponent", "changePopupTitle"],
  props: ["dialog", "component", "popupTitle", "email"],

  data() {
    return {
      dialogStatus: false,
      isfullscreen: false,
      window: {
        width: 0,
      },
    };
  },
  components: {
    SigninForm,
    SignupForm,
    ForgotPasswordForm,
  },
  watch: {
    dialog() {
      console.log("watch dialog");
      this.dialogStatus = this.dialog;
    },
    dialogStatus() {
      if (!this.dialogStatus) {
        console.log("close dialog");
        this.handleDialogStatus(false);
      }
    },
  },

  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        console.log("test device");
        if (this.window.width > 960) {
          this.isfullscreen = false;
        } else {
          this.isfullscreen = true;
        }
      } else {
        if (this.window.width > 960) {
          console.log("full false");
          this.isfullscreen = false;
        } else {
          console.log("full true");

          this.isfullscreen = true;
        }
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="css" scoped>
.container {
  overflow: auto !important;
}
.v-dialog--fullscreen {
  top: 160px !important;
}
</style>
