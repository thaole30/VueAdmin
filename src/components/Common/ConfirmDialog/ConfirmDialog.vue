<template>
  <v-card class="text-center">
    <v-icon size="56px" class="rounded-sm" color="#FFC700">
      mdi-alert-circle
    </v-icon>
    <p class="title-text">{{ confirmDialogInfo.title }}</p>
    <p class="content-text">{{ confirmDialogInfo.question }}</p>
    <p class="content-text red--text">{{ confirmDialogInfo.detail }}</p>
    <div class="btn-block">
      <v-btn class="btn-yes" @click="ok">OK</v-btn>
      <v-btn class="btn-cancel" @click="cancel">Cancel</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: {
    confirmDialogInfo: {
      type: Object,
      default: function () {
        return {
          title: "title",
          question: "question",
          detail: "detail",
        };
      },
    },
  },
  methods: {
    ok() {
      this.$emit("processConfirmDialog", "Ok");
    },
    cancel() {
      this.$emit("processConfirmDialog", "Cancel");
    },
  },

  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        return this.$emit("processConfirmDialog", "Cancel");
      }

      if (e.key == "Enter") {
        return this.$emit("processConfirmDialog", "Ok");
      }
    });
  },
};
</script>

<style scoped>
.text-center {
  padding: 10px 0px 30px;
}

.v-card {
  border-radius: 5px;
}

.v-icon {
  border-radius: 5px !important;
  margin-top: 12px;
}

p {
  color: #616161;
}

.title-text {
  font: 500 22px Roboto !important;
  margin: 12px;
}

.content-text {
  margin-bottom: 0px;
  font: 400 16px/20px Roboto;
}
.btn-block {
  margin-top: 20px;
}

.btn-yes,
.btn-cancel {
  text-transform: none;
  letter-spacing: 0;
  height: 36px !important;
  border-radius: 5px;
  color: #ffffff !important;
  width: 46px !important;
}

.btn-yes {
  background-color: #3597e2 !important;
  margin-right: 8px;
}

.btn-cancel {
  background-color: #e41414 !important;
}
</style>
