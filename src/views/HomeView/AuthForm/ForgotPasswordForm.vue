<template>
  <v-card
    :class="
      !isfullscreen
        ? 'px-16 py-10 wrapper rounded-xl wrapper-mobile '
        : 'px-16 py-10 wrapper wrapper-mobile '
    "
  >
    <form class="" @submit.prevent="handleResetPassword">
      <div class="input-wrapper mb-2">
        <i class="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Enter your new password"
          v-model.trim="password"
        />
        <v-btn class="mx-2" dark color="teal" type="submit">
          Reset Password
        </v-btn>
      </div>
      <!-- <span class="red--text error-desktop text-center" v-show="!isValid">
        {{ error }}
      </span> -->
    </form>
    <div v-show="!isfullscreen" class="mt-4">
      Sign In?
      <v-btn
        depressed
        color="teal"
        class="white--text"
        @click="changeComponent('SigninForm')"
        >Sign In</v-btn
      >
    </div>

    <v-card-actions class="close-btn">
      <v-btn
        fab
        :color="!isfullscreen ? '#B1ADAD' : '#ffffff'"
        text
        @click="handleCloseForm"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  inject: ["handleDialogStatus", "changeComponent"],
  props: {
    isfullscreen: Boolean,
  },
  data() {
    return {
      email: "",
      password: "",
      isValid: true,

      isSubmitted: false,
    };
  },
  computed: {},
  methods: {
    async handleResetPassword() {
      console.info({
        email: this.email,
        password: this.password,
      });

      if (!this.isSubmitted) {
        if (this.email === "") {
          this.error.email = "email is required";
        }

        if (this.password === "") {
          this.error.password = "password is required";
        }
        this.isSubmitted = true;
      }
    },
    handleCloseForm() {
      this.handleDialogStatus(false);
      this.email = "";
      this.password = "";
      this.error = {
        email: "",
        password: "",
      };
    },
  },

  watch: {
    password: function (newVal) {
      if (newVal !== "") {
        this.error.password = "";

        // this.isValid = true;
      } else {
        this.error.password = "password is required";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
.input-wrapper {
  input {
    color: orange !important;
  }
}

input {
  border: 2px solid orange !important;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
}

.error-mobile {
  display: none;
}
.divider-forgot-password {
  background-color: purple;
  height: 2px;
  margin: 16px 0;
}

@media only screen and (min-width: 280px) and (max-width: 960px) {
  .wrapper-mobile {
    top: 0px;
    left: 50% !important;
    transform: translateX(-50%);
    width: 414px;
    height: 845px;
    background: transparent
      url("https://image.shutterstock.com/image-photo/comfortable-workspace-computer-monitor-putting-260nw-1753041938.jpg")
      0% 0% no-repeat padding-box;
    background-size: cover;
    background-position: center;
    opacity: 1;
    max-height: 200vh;
  }

  @media (max-width: 375px) {
    .logo {
      width: 260px !important;
      height: 190px !important;
    }
  }
  .logo {
    width: 260px;
    height: 250px;
  }

  .signin-btn {
    top: 466px;
    left: 57px;
    width: 300px;
    height: 52px;
    background-color: #3597e200;
    border: 1px solid #ffffff;
    border-radius: 5px;
    opacity: 1;
    font: normal normal bold 14px/17px Segoe UI;
  }
  .signin-btn:hover {
    border: 1px solid #54b1f8;
    box-shadow: 0px 0px 2px #54b1f8;
  }
  h3 {
    overflow: hidden;
    text-align: center;
    color: white;
    margin-top: 30px;
    font: normal normal normal 16px/17px Chivo;
  }
  h3:before,
  h3:after {
    background-color: rgb(255, 255, 255);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  h3:before {
    right: 0.5em;
    margin-left: -50%;
  }

  h3:after {
    left: 0.5em;
    margin-right: -50%;
  }
  .forgotpassword {
    margin-left: 30%;
    display: inline-block;
    font: normal normal normal 16px/17px Chivo;
  }
  .v-application .align-center {
    margin-top: 0px;
  }
  .error-mobile {
    color: rgb(233, 236, 25) !important;
  }
  .v-application .mt-4 {
    margin-top: 0px !important;
  }

  .error-desktop {
    color: #e9ec19 !important;
    width: 300px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 960px) {
  .wrapper-mobile {
    top: 0px;
    left: 0px;
    width: 414px;
    height: 845px;
    background: transparent
      url("https://image.shutterstock.com/image-photo/comfortable-workspace-computer-monitor-putting-260nw-1753041938.jpg")
      0% 0% no-repeat padding-box;
    background-size: cover;
    background-position: center;
    opacity: 1;
    max-height: 200vh;
  }

  .logo {
    width: 379px;
    height: 379px;
  }

  .input-wrapper {
    position: relative;
    width: 100%;
    box-shadow: 0px 0px;
    color: orange !important;
  }
  .input-wrapper input {
    top: 324px;
    left: 57px;
    width: 100%;
    height: 52px;
    background: #ffffff4d 0% 0% no-repeat padding-box;
    opacity: 1;
    color: white;
  }
  .input-wrapper input::placeholder {
    top: 400px;
    left: 110px;
    width: 66px;
    height: 21px;
    text-align: left;
    font: normal normal normal 17px/17px Chivo;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  .input-wrapper i {
    opacity: 1;
    color: orange !important;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  .btn-ipab {
    width: 50%;
  }

  .btn-ipab .signin-btn {
    top: 466px;
    left: 57px;
    width: 100%;
    height: 52px;
    background-color: #3597e200;
    border: 1px solid #ffffff;
    border-radius: 5px;
    opacity: 1;
  }

  .signin-btn {
    top: 466px;
    left: 57px;
    width: 50%;
    height: 52px;
    background-color: #3597e200;
    border: 1px solid #ffffff;
    border-radius: 5px;
    opacity: 1;
    font: normal normal bold 21px/17px Segoe UI;
  }

  .signin-btn:hover {
    border: 1px solid #54b1f8;
    box-shadow: 0px 0px 2px #54b1f8;
  }

  h3 {
    overflow: hidden;
    text-align: center;
    color: white;
    margin-top: 30px;
    font: normal normal normal 16px/17px Chivo;
  }
  h3:before,
  h3:after {
    background-color: rgb(255, 255, 255);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  h3:before {
    right: 0.5em;
    margin-left: -50%;
  }

  h3:after {
    left: 0.5em;
    margin-right: -50%;
  }
  .forgotpassword {
    margin-left: 35%;
    display: inline-block;
    font: normal normal normal 17px/17px Chivo;
  }
  .v-application .align-center {
    margin-top: 0px;
  }
  .error-mobile {
    color: rgb(233, 236, 25) !important;
  }
  .v-application .mt-4 {
    margin-top: 0px !important;
  }

  .error-desktop {
    width: 100%;
  }
}
</style>
