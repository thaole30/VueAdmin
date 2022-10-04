<template>
  <v-card>
    <form>
      <v-card-title>
        <span class="text-h5">Detail Event</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="10">
              <v-text-field
                v-model="newEventTitle"
                label="Event Name"
                required
                autofocus
                :disabled="status === 'edit' ? false : true"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn
                small
                fab
                dark
                color="teal"
                class="mt-4"
                @click="clickEditEventDetail"
              >
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1 white--text"
          @click="updateDetailDialogStatus(false)"
        >
          Close
        </v-btn>
        <v-btn
          v-if="status === 'edit'"
          color="green darken-1 white--text"
          @click="handleEditEventDetail"
        >
          Edit
        </v-btn>
        <v-btn color="red darken-1 white--text" @click="clickDeleteEventDetail">
          Delete
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
export default {
  name: "DetailEventPopup",
  props: ["updatedEventName", "selectedEvent", "updateDetailDialogStatus"],
  data: () => ({
    status: "",
    selectedId: "",
    newEventTitle: "",
  }),
  methods: {
    clickEditEventDetail() {
      //   this.selectedId = id;
      this.status = "edit";
    },
    handleEditEventDetail() {
      this.$emit(
        "eventEditEventByModal",
        this.selectedEvent.id,
        this.newEventTitle
      );
      this.status = "";
      this.updateDetailDialogStatus(false);
    },
    clickDeleteEventDetail() {
      //   this.selectedId = id;
      this.status = "delete";
      this.$emit(
        "eventClickDelEventByModal",
        this.selectedEvent,
        "deleteEvent"
      );
      this.updateDetailDialogStatus(false);
    },
  },
  mounted() {
    this.newEventTitle = this.updatedEventName;
  },
  beforeUnmount() {
    this.newEventTitle = "";
  },
  unmounted() {
    this.newEventTitle = "";
  },
};
</script>

<style lang="scss" scoped></style>
