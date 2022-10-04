<template>
  <div>
    <ul class="todolist">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @eventClickDelTodoItem="
          handleClickDelTodoItem(todo.id, todo.title, 'deleteTodoItem')
        "
      />
    </ul>
    <v-dialog v-model="dialog" v-if="dialog" disabled width="500" persistent>
      <confirm-dialog
        class="confirm-dialog"
        @processConfirmDialog="processConfirmDialog"
        :confirmDialogInfo="confirmDialogInfo"
      ></confirm-dialog>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import TodoItem from "./TodoItem.vue";
import ConfirmDialog from "./../../../components/Common/ConfirmDialog/ConfirmDialog.vue";

export default {
  name: "TodoList",
  data() {
    return {
      selectedId: null,
      isEditting: false,
      checkDialog: "",
      todoId: "",
      dialog: false,
      confirmDialogInfo: {
        title: "",
        question: "",
        detial: "",
      },
    };
  },
  computed: {
    ...mapState({
      // arrow functions can make the code very succinct!
      todos: (state) => state.todos.todos,
    }),
  },
  methods: {
    ...mapActions(["deleteTodo"]),

    updateIdSelected(id, e) {
      console.log("iddd", id, e);
      this.selectedId = id;
    },

    toggleIsEditting(id, e) {
      this.selectedId = id;
      this.isEditting = !this.isEditting;
    },
    handleClickDelTodoItem(todoId, todoTitle, purposeDialog) {
      console.log("handleClickDelTodoItem", todoId, todoTitle, purposeDialog);
      this.confirmDialogInfo = {
        title: "Are you sure?",
        question: "Do you want to delete " + todoTitle + "?",
        detail: "You can not restore this!!!",
      };
      this.checkDialog = purposeDialog;
      this.todoId = todoId;
      this.dialog = true;
    },
    async onDeleteTodo() {
      console.log("dellll");
      this.deleteTodo(this.todoId);
    },
    async processConfirmDialog(confirm) {
      if (confirm === "Cancel") {
        this.dialog = false;
      }
      if (confirm === "Ok") {
        if (this.checkDialog == "deleteTodoItem") {
          this.onDeleteTodo();
        }
        this.dialog = false;
      }
    },
  },
  watch: {
    // selectedId: {
    //   handler(newValue, oldValue) {
    //     console.log("update", oldValue, newValue);
    //     let index = this.todos.findIndex((item) => item.id === newValue);
    //     this.todos[index].isComplete = !this.todos[index].isComplete;
    //   },
    // },
  },
  components: { TodoItem, ConfirmDialog },
};
</script>

<style lang="scss">
.todolist {
  background-color: #fff;
  padding: 1.25em;

  list-style-type: none;
  li.todo-item {
    position: relative;
    margin-top: 10px;
    background-color: rgb(245, 242, 242);
    cursor: pointer;
    label {
      .todo-info {
        margin: 0 !important;
        .text {
          margin: 0;
        }
      }
    }
    .actions-group {
      position: absolute;

      top: 28px;
      right: 16px;
    }

    &:hover {
      background-color: rgb(235, 230, 230);
    }
  }
}
</style>
