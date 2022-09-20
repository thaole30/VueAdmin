<template>
  <ul class="todolist">
    <li class="todo-item" v-for="(item, index) in todos" :key="item.id">
      <input
        style="display: none"
        type="checkbox"
        :id="`idinput-${item.id}`"
        @input="toggleComplete(item.id, $event)"
      />
      <label :for="`idinput-${item.id}`">
        <v-row align="center" justify="start" class="todo-info">
          <v-checkbox :input-value="item.isComplete"></v-checkbox>
          <p class="text">{{ item.title }}</p>
        </v-row>
      </label>
      <v-row align="center" justify="end" class="actions-group">
        <v-btn text icon>
          <v-icon>mdi-check</v-icon>
        </v-btn>
        <v-btn text icon @click="toggleIsEditting(item.id, $event)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn text icon @click="deleteTodo(item.id, $event)">
          <v-icon>mdi-trash-can</v-icon>
        </v-btn>
      </v-row>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      selectedId: null,
      isEditting: false,
      todos: [
        { id: 1, title: "job1", isComplete: true },
        { id: 2, title: "job2", isComplete: true },
        { id: 3, title: "job3", isComplete: false },
        { id: 4, title: "job4", isComplete: true },
        { id: 5, title: "job5", isComplete: false },
      ],
      //   indexTodo: false,
    };
  },
  methods: {
    updateIdSelected(id, e) {
      console.log("iddd", id, e);
      this.selectedId = id;
    },
    toggleComplete(id, e) {
      console.log("iddd", id, e);
      let index = this.todos.findIndex((item) => item.id === id);
      this.todos[index].isComplete = !this.todos[index].isComplete;
    },
    toggleIsEditting(id, e) {
      this.selectedId = id;
      this.isEditting = !this.isEditting;
    },
    deleteTodo(id, e) {
      console.log("delete id", id);
      let index = this.todos.findIndex((item) => item.id === id);

      this.todos.splice(index, 1);
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
