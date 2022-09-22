<template>
  <ul class="todolist">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>
<script>
import { mapState } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  data() {
    return {
      selectedId: null,
      isEditting: false,
    };
  },
  computed: {
    ...mapState({
      // arrow functions can make the code very succinct!
      todos: (state) => state.todos.todos,
    }),
  },
  methods: {
    updateIdSelected(id, e) {
      console.log("iddd", id, e);
      this.selectedId = id;
    },

    toggleIsEditting(id, e) {
      this.selectedId = id;
      this.isEditting = !this.isEditting;
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
  components: { TodoItem },
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
