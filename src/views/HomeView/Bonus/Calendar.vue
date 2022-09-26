<template>
  <v-row class="fill-height calendar">
    <v-col>
      <v-sheet height="64" class="d-flex justify-space-between">
        <v-toolbar flat>
          <div class="calendar__toolbar__left">
            {{
              $refs.calendar
                ? $refs.calendar.title
                : `${
                    monthNames[new Date().getMonth()]
                  } ${new Date().getFullYear()}`
            }}
          </div>
          <div class="calendar__toolbar__right">
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
          </div>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @click:day="viewDay"
          @change="handleChange"
        ></v-calendar>
        <!-- <v-menu
          key="2"
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon @click="isEditting = true" v-if="!isEditting">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title
                v-if="!isEditting"
                v-html="selectedEvent.name"
              ></v-toolbar-title>
              <div class="update-event-name" v-if="isEditting">
                <v-row align="center" class="actions-group">
                  <v-text-field
                    v-model="updatedEventName"
                    @keyup.enter="updateEventName(selectedEvent.id)"
                  ></v-text-field>

                  <v-btn text icon @click="updateEventName(selectedEvent.id)">
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                </v-row>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon @click="deleteEvent(selectedEvent.id)"
                  >mdi-trash-can</v-icon
                >
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu> -->
      </v-sheet>
    </v-col>

    <v-dialog v-model="addEventDialog" max-width="600px">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <form>
          <v-card-title>
            <span class="text-h5">Add New Event</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="eventName"
                    label="Event Name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="colors"
                    label="Category"
                    v-model="colorSelect"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="handleCloseModal">
              Close
            </v-btn>

            <v-btn color="blue darken-1" text @click="addEvent">
              Create event
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="selectedOpen"
      v-if="selectedOpen"
      persistent
      max-width="600px"
    >
      <detail-event-popup
        :updatedEventName="updatedEventName"
        :selectedEvent="selectedEvent"
        :updateDetailDialogStatus="updateDetailDialogStatus"
        @eventEditEventByModal="handleEditEventByModal"
        @eventClickDelEventByModal="handleClickDelEventByModal"
      />
    </v-dialog>

    <v-dialog
      v-model="confirmDialog"
      v-if="confirmDialog"
      disabled
      width="500"
      persistent
    >
      <confirm-dialog
        class="confirm-dialog"
        @processConfirmDialog="processConfirmDialog"
        :confirmDialogInfo="confirmDialogInfo"
      ></confirm-dialog>
    </v-dialog>
  </v-row>
</template>

<script>
import DetailEventPopup from "./DetailEventPopup.vue";
import ConfirmDialog from "./../../../components/Common/ConfirmDialog/ConfirmDialog.vue";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default {
  name: "Calendar",
  data: () => ({
    addEventDialog: false,
    confirmDialog: false,
    monthNames,
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
      {
        id: 1,
        name: "job1",
        start: new Date(),
        end: new Date(),
        color: "red",
        timed: false,
      },
      {
        id: 2,
        name: "job3",
        start: new Date("September 19, 2022 11:13:00"),
        end: new Date("September 23, 2022 11:13:00"),
        color: "yellow",
        timed: false,
      },
      {
        id: 3,
        name: "job2",
        start: new Date("September 16, 2022 11:13:00"),
        end: new Date("September 22, 2022 11:13:00"),
        color: "blue",
        timed: false,
      },
    ],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
    eventName: "",
    colorSelect: "orange",
    isEditting: false,
    updatedEventName: "",
    error: {
      eventName: "",
      colorSelect: "",
    },
    confirmDialogInfo: {
      title: "",
      question: "",
      detial: "",
    },
    checkDialog: "",
  }),
  methods: {
    handleChange(e) {
      console.log(e);
    },
    viewDay({ date }) {
      console.log("viewDay", date);
      this.focus = date;
      this.addEventDialog = true;
      // this.selectedOpen = true;
      // this.type = "day";
    },
    checkId(object) {
      const isExistId = this.events.some((each) => {
        if (each.id === object.id) {
          return true;
        }
      });
      if (isExistId) {
        object.id = object.id + 1;
        this.checkId(object);
      }
    },

    checkEventNameExist(eventName) {
      const isExistName = this.events.some((item) => {
        if (item.name === eventName) {
          return true;
        }
      });

      return isExistName;
    },

    updateDetailDialogStatus(bool) {
      console.log("handle", bool);
      this.selectedOpen = bool;
    },

    addEvent() {
      console.log("add event");
      this.dialog = false;
      //   this.$vuetify.$touch();
      const newEvent = {
        name: this.eventName,
        start: this.focus,
        end: this.focus,
        color: this.colorSelect,
        timed: false,
        id: 1,
      };
      this.checkId(newEvent);
      console.log("newEvent after check", newEvent);
      this.events.push(newEvent);
      this.eventName = "";
      this.colorSelect = "";

      this.addEventDialog = false;
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      console.log("eventtt", event);
      this.updatedEventName = event.name;
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      console.log("updateRange");
      const events = [
        {
          name: "job1",
          start: new Date(),
          end: new Date(),
          color: "red",
          timed: false,
        },
        {
          name: "job3",
          start: new Date("September 19, 2022 11:13:00"),
          end: new Date("September 23, 2022 11:13:00"),
          color: "yellow",
          timed: false,
        },
        {
          name: "job2",
          start: new Date("September 16, 2022 11:13:00"),
          end: new Date("September 22, 2022 11:13:00"),
          color: "blue",
          timed: false,
        },
      ];
      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    handleCloseModal() {
      this.addEventDialog = false;
      this.eventName = "";
      this.colorSelect = "";
    },
    updateEventName(id) {
      console.log("updateEventName id", id);
      let index = this.events.findIndex((event) => event.id === id);
      this.events[index].name = this.updatedEventName;
      this.updatedEventName = "";
      this.isEditting = false;
    },
    handleEditEventByModal(id, newTitle) {
      let index = this.events.findIndex((event) => event.id === id);
      this.events[index].name = newTitle;
      this.selectedOpen = false;
    },
    deleteEvent(id) {
      let index = this.events.findIndex((event) => event.id === id);
      this.events.splice(index, 1);
      this.selectedOpen = false;
    },
    handleClickDelEventByModal(selectedEvent, purposeDialog) {
      this.confirmDialogInfo = {
        title: "Are you sure?",
        question: "Do you want to delete " + selectedEvent.name + "?",
        detail: "You can not restore this!!!",
      };
      this.checkDialog = purposeDialog;
      this.confirmDialog = true;
    },
    async processConfirmDialog(confirm) {
      if (confirm === "Cancel") {
        this.confirmDialog = false;
      }
      if (confirm === "Ok") {
        if (this.checkDialog == "deleteEvent") {
          this.handleDeleteEventByModal();
        }
        this.confirmDialog = false;
      }
    },
    handleDeleteEventByModal() {
      console.log("del func");
      let index = this.events.findIndex(
        (event) => event.id === this.selectedEvent.id
      );
      this.events.splice(index, 1);
      this.selectedOpen = false;
    },
  },
  watch: {
    addEventDialog: {
      handler(newDialog, oldDialog) {
        console.log("newDialog", newDialog);
        if (!newDialog) {
          this.eventName = "";
          this.colorSelect = "";
        }
      },
      deep: true,
    },
  },
  components: { DetailEventPopup, ConfirmDialog },
};
</script>

<style lang="scss">
.v-toolbar__content {
  padding-left: 20px !important;
}
</style>
